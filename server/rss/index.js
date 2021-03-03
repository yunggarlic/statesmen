const router = require('express').Router();
const redis = require('redis');
const redisPort = process.env.REDIS_URL || 6379;
const client = redis.createClient(redisPort);
const Parser = require('rss-parser');
const parser = new Parser();

router.get('/', async (req, res, next) => {
  try {
    client.get('all', async (err, episodeList) => {
      if (err) throw err;

      if (episodeList) {
        res.status(200).send(JSON.parse(episodeList));
      } else {
        const { items: episodeList } = await parser.parseURL(
          'https://statesmen.libsyn.com/rss'
        );
        episodeList.forEach((episode, idx) => {
          episode.idx = idx;
          client.setex(idx, 14400, JSON.stringify(episode));
        });
        client.setex('all', 14400, JSON.stringify(episodeList));
        res.status(200).send(episodeList);
      }
    });
  } catch (error) {
    console.error(error);
  }
});

router.get('/:idx', async (req, res, next) => {
  try {
    client.get(req.params.idx, async (err, episode) => {
      if (err) throw err;
      if (episode) {
        res.status(200).send(JSON.parse(episode));
      } else {
        const { items: episodeList } = await parser.parseURL(
          'https://statesmen.libsyn.com/rss'
        );
        client.setex(
          req.params.idx,
          14400,
          JSON.stringify(episodeList[req.params.idx])
        );
        res.send(episodeList[req.params.idx]);
      }
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
