import React, { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Zoom,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
  paper: {
    display: 'flex',
  },
  title: {
    marginTop: '2rem',
    marginBottom: '5rem',
  },
  contact: {
    marginTop: '5rem',
  },
  body: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => setLoaded(true), []);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Container className={classes.root}>
      <Zoom in={loaded} unmountOnExit>
        <Paper className={classes.paper}>
          <img src="/Statesmen2Square.jpg" width="500" height="500"></img>
          <Container className={classes.body}>
            <Typography className={classes.title} variant="h3" component="h1">
              About? This isn't BOXING!
            </Typography>
            <Typography variant="h5">
              Statesmen is a comedy podcast hosted and created by Chicago
              comedians Anthony Rossi, Stuart Hicar, and Tim Ferrari. The show
              is produced by Camden Stacey. Every Tuesday, we invite a guest
              comedian to explore their home state through the lens of the five
              senses.
            </Typography>
            <Typography className={classes.contact}>
              Contact Us: statesmenpodcast@gmail.com
            </Typography>
            <Button className={classes.root} onClick={handleClick}>Back to Episode Map</Button>
          </Container>
        </Paper>
      </Zoom>
    </Container>
  );
};

export default About;
