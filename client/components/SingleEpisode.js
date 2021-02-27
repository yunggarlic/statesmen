import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  Button,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';

import axios from 'axios';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  audioPlayer: {
    maxWidth: '50rem',
  },
  episodeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  episodeSummary: {
    margin: '1rem',
  },
});

const SingleEpisode = (props) => {
  const [episode, setEpisode] = useState({});
  const { idx } = useParams();
  console.log(idx)
  const classes = useStyles();

  useEffect(() => {
    const fetchEpisode = async (id) => {
      const { data: episode } = await axios.get(`/rss/${idx}`);
      setEpisode(episode);
    };
    fetchEpisode(idx);
  }, []);

  return (
    <Container className={classes.root}>
      {Object.keys(episode).length > 0 ? (
        <Card className={classes.episodeCard}>
          <Typography>{`${episode.title}`}</Typography>
          <CardMedia
            className={classes.audioPlayer}
            component="audio"
            src={`${episode.enclosure.url}`}
            controls
          />
          <Typography
            className={classes.episodeSummary}
          >{`${episode.contentSnippet}`}</Typography>
          <Button component={RouterLink} to="/">
            Back to Episodes
          </Button>
        </Card>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SingleEpisode;
