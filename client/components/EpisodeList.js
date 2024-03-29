import React, { useState, useEffect } from 'react';
import { EpisodeListItem, Map } from './index';
import axios from 'axios';
import {
  Grid,
  Typography,
  Container,
  CircularProgress,
  Button,
  Zoom,
  makeStyles,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '80rem',
  },
  header: {
    margin: '20px 0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  button: {
    margin: '5px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pagination: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  seeAll: {
    alignSelf: 'right',
  },
}));

const EpisodeList = () => {
  const [loaded, setLoaded] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [usState, setUsState] = useState('all');
  const [page, setPage] = useState(1);
  const [pageEpisodes, setPageEpisodes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchEpisodes = async () => {
      const { data } = await axios.get('/rss');
      setAllEpisodes(data);
      setEpisodes(data);
      setPageEpisodes(data.slice(0, 10));
      setLoaded(true);
    };
    fetchEpisodes();
  }, []);

  const handlePageChange = (e, currentPage) => {
    setLoaded(false);
    setPage(currentPage);
    setPageEpisodes(episodes.slice((currentPage - 1) * 10, currentPage * 10));
    setLoaded(true);
  };

  const handleButtonState = (e) => {
    const buttons = document.querySelectorAll('button.active');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    if (e) e.target.classList.add('active');
  };

  const handleStateClick = (e, special) => {
    //removes active class from all buttons by passing in no parameter
    if (!special) handleButtonState();

    const stateName =
      special ||
      e.target.attributes.name.value.replace(/[\s]/gi, '').toLowerCase();
    if (usState !== stateName) {
      setLoaded(false);
      const stateEpisodeIndexes = allEpisodes
        .map((episode, idx) => {
          return [
            idx,
            episode.itunes.keywords
              .split(',')
              .sort()
              .filter((keyword) => {
                return (
                  keyword.toLowerCase() === stateName ||
                  (stateName === 'virginia' && keyword === 'dc')
                );
              }),
          ];
        })
        .filter((episode) => episode[1].length > 0);
      const stateEpisodes = [];
      stateEpisodeIndexes.forEach((episode) => {
        stateEpisodes.push(allEpisodes[episode[0]]);
      });
      setPageEpisodes(stateEpisodes.slice(0, 10));
      setEpisodes(stateEpisodes);
      setUsState(stateName);
      setTimeout(() => setLoaded(true), 550);
    }
  };

  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h2" className={classes.header}>
        Exploring all fifty states with the five senses
      </Typography>
      <Map
        handleClick={handleStateClick}
        selected={usState}
        className={classes.seeAll}
      />
      <Container className={classes.buttonContainer}>
        <Button
          className={`${classes.button} active`}
          onClick={(e) => {
            handleButtonState(e);
            if (usState !== 'all') {
              setLoaded(false);
              setEpisodes(allEpisodes);
              setPageEpisodes(allEpisodes.slice(0, 10));
              setUsState('all');
              setTimeout(() => setLoaded(true), 550);
            }
          }}
        >
          Show All Episodes
        </Button>
        <Button
          className={classes.button}
          onClick={(e) => {
            handleButtonState(e);
            handleStateClick(e, 'special');
          }}
        >
          Show All Specials
        </Button>
      </Container>
      <Container className={classes.grid}>
        {loaded ? (
          <Grid container spacing={3} alignItems="center" alignContent="center">
            {pageEpisodes.map((episode) => (
              <Zoom
                in={loaded}
                style={{ transitionDelay: loaded ? '200ms' : '0ms' }}
                key={`${episode.itunes.season}${episode.itunes.episode}`}
              >
                <Grid item xs={6}>
                  <EpisodeListItem
                    id={`${episode.itunes.season}${episode.itunes.episode}`}
                    idx={episode.idx}
                    episode={episode}
                  />
                </Grid>
              </Zoom>
            ))}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Container>
      {loaded ? (
        <Zoom
          in={loaded}
          style={{ margin: '15px 0', transitionDelay: loaded ? '0ms' : '0ms' }}
        >
          <Pagination
            className={classes.pagination}
            page={page}
            count={Math.ceil(episodes.length / 10)}
            onChange={handlePageChange}
          />
        </Zoom>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default EpisodeList;
