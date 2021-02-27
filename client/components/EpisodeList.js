import React, { useState, useEffect } from 'react';
import { EpisodeListItem, Map } from './index';
import axios from 'axios';
import {
  Grid,
  Paper,
  Container,
  LinearProgress,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '5px',
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
    };
    fetchEpisodes();
  }, []);

  const handlePageChange = (e, currentPage) => {
    setPage(currentPage);
    setPageEpisodes(episodes.slice((currentPage - 1) * 10, currentPage * 10));
  };

  const handleStateClick = (e) => {
    const stateName = e.target.attributes.name.value
      .replace(/[\s]/gi, '')
      .toLowerCase();
    const stateEpisodeIndexes = allEpisodes
      .map((episode, idx) => {
        return [
          idx,
          episode.itunes.keywords
            .split(',')
            .sort()
            .filter((keyword) => {
              if (stateName === 'virginia' && keyword === 'dc') {
                return true;
              }
              return keyword === stateName;
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
  };

  return (
    <Container className={classes.root}>
      <Map
        handleClick={handleStateClick}
        selected={usState}
        className={classes.seeAll}
      />
      <Button
        className={classes.button}
        onClick={() => {
          setEpisodes(allEpisodes);
          setPageEpisodes(allEpisodes.slice(0, 10));
          setUsState('all');
        }}
      >
        Show All States
      </Button>
      <Grid container spacing={3} alignItems="center" alignContent="center">
        {episodes ? (
          pageEpisodes.map((episode) => (
            <Grid
              item
              xs={6}
              key={`${episode.itunes.season}${episode.itunes.episode}`}
            >
              <EpisodeListItem
                id={`${episode.itunes.season}${episode.itunes.episode}`}
                idx={episode.idx}
                episode={episode}
              />
            </Grid>
          ))
        ) : (
          <LinearProgress />
        )}
      </Grid>
      <Pagination
        className={classes.pagination}
        page={page}
        count={Math.ceil(episodes.length / 10)}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default EpisodeList;
