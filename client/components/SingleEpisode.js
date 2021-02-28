import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  Button,
  CardMedia,
  makeStyles,
  Zoom,
  CardActionArea,
} from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';

import axios from 'axios';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    marginTop: '2rem',
  },
  audioPlayer: {
    maxWidth: '50rem',
    marginBottom: '1rem',
  },
  episodeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60rem',
  },
  episodeSummary: {
    margin: '1rem',
  },
});

const SingleEpisode = (props) => {
  const [episode, setEpisode] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { idx } = useParams();
  console.log(episode);
  const classes = useStyles();

  useEffect(() => {
    const fetchEpisode = async (id) => {
      const { data: episode } = await axios.get(`/rss/${idx}`);
      setEpisode(episode);
      setLoaded(true);
    };
    fetchEpisode(idx);
  }, []);

  return (
    <Container className={classes.root}>
      {Object.keys(episode).length > 0 ? (
        <Zoom in={loaded} unmountOnExit>
          <Card className={classes.episodeCard}>
            <Typography variant="h4">{`${episode.title}`}</Typography>
            <CardMedia
              className={classes.audioPlayer}
              component="audio"
              src={`${episode.enclosure.url}`}
              controls
            />
            <Card>
              <CardActionArea>
                <Button href="https://fanlink.to/statesmen">
                  LINK TO: Apple Podcasts / Spotify / Stitcher / etc...
                </Button>
              </CardActionArea>
            </Card>
            <Typography
              className={classes.episodeSummary}
            >{`${episode.contentSnippet}`}</Typography>
            <Button component={RouterLink} to="/">
              Back to Episode Map
            </Button>
          </Card>
        </Zoom>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SingleEpisode;
