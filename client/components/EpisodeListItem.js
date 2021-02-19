import React from 'react';
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '5px',
  },
  episodeItem: {
    //transform: 'scale(0.8)',
  },
});

const EpisodeListItem = (props) => {
  const classes = useStyles();
  const {
    episode: { title, contentSnippet, pubDate, itunes },
  } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography className={classes.title} variant="h6" component="h4">
            {title}
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Box className={classes.episodeItem}>
          <Typography variant="body1" component="h4">
            Summary:
          </Typography>
          <Typography variant="body2" component="p">{`${contentSnippet.slice(
            0,
            350
          )}...`}</Typography>
        </Box>
        <Typography variant="overline">
          Released: {pubDate.slice(0, 16)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default EpisodeListItem;
