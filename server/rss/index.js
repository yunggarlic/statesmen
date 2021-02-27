const router = require('express').Router();
const Parser = require('rss-parser');
const parser = new Parser();

router.get('/', async (req, res, next) => {
  try {
    const { items: episodeList } = await parser.parseURL(
      'https://statesmen.libsyn.com/rss'
    );
    episodeList.forEach((episode, idx) => episode.idx = idx)
    res.send(episodeList);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:idx', async (req, res, next) => {
  try{
    const {items: episodeList } = await parser.parseURL('https://statesmen.libsyn.com/rss');
    res.send(episodeList[req.params.idx])
  }catch(error){
    console.error(error)
  }
});

module.exports = router;
