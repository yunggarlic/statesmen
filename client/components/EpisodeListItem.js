import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Button,
} from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 250,
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    alignSelf: 'flex-end'
  },
  cardContent: {
    justifyContent: 'space-between'
  }
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
          <Typography variant="body2" component="p">{`${contentSnippet.slice(
            0,
            350
          )}...`}</Typography>
          <Typography variant="overline">
            Released: {pubDate.slice(0, 16)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeListItem;
