import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Container,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 250,
  },
  actionArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'flex-end',
  },
  cardContent: {
    justifyContent: 'space-between',
  },
}));

const EpisodeListItem = (props) => {
  const classes = useStyles();
  const {
    episode: { title, contentSnippet, pubDate, itunes },
    idx,
  } = props;
  let history = useHistory();
  const redirect = (path) => {
    history.push(`/episode/${path}`);
  };
  return (
    <Card
      className={classes.root}
      onClick={() => {
        redirect(idx);
      }}
    >
      <CardActionArea className={classes.actionArea}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">{contentSnippet.length > 350 ? `${contentSnippet.slice(
            0,
            300
          )}...` : contentSnippet}</Typography>
        </CardContent>
        <Container>
          <Typography variant="overline">
            Released: {pubDate.slice(0, 16)}
          </Typography>
        </Container>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeListItem;
