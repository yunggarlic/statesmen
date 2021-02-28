import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Typography, makeStyles } from '@material-ui/core';
import ContactlessIcon from '@material-ui/icons/Contactless';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f2f2f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    padding: 0,
    width: '50%'
  },
  button: {
    width: "100%",
  },
}));

const Footer = () => {
  const [value, setValue] = useState('');
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/about') {
      setValue('map');
    } else if (history.location.pathname === '/') {
      setValue('about');
    }
  }, []);

  return (
    <Container className={classes.root}>
      {value === 'map' ? (
        <Button
          className={classes.button}
          onClick={() => {
            history.push('/');
            setValue('about');
            window.scrollTo(0, 0);
          }}
        >
          Map
        </Button>
      ) : (
        <Button
          className={classes.button}
          onClick={() => {
            history.push('/about');
            setValue('map');
            window.scrollTo(0, 0);
          }}
        >
          About
        </Button>
      )}
    </Container>
  );
};

export default Footer;
