import React from 'react';
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';

const EpisodeListItem = (props) => {
  const {
    episode: { title, contentSnippet, pubDate, itunes },
    idx,
  } = props;
  let history = useHistory();
  const redirect = (path) => {
    history.push(`/${path}`);
  };
  return (
    <Card
      onClick={() => {
        redirect(idx);
      }}
    >
      <CardActionArea>
        <CardContent>
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
        <CardActions>
          <Button component={RouterLink} to={`/${idx}`} size="small">
            Read More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeListItem;
