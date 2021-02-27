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
    const stateName = e.target.attributes.name.value;
    const episodeTitleList = allEpisodes.map((episode) => {
      return episode.title.replace(/[^\w\s]/gi, '').split(' ');
    });

    const stateEpisodeList = episodeTitleList
      .map((title, idx) => {
        let prefix = false;
        return [
          title.filter((word, wordIdx) => {
            if (
              word === 'New' ||
              word === 'South' ||
              word === 'North' ||
              word === 'West' ||
              word === 'Rhode'
            ) {
              prefix = true;
              const newWord = `${word} ${title[wordIdx + 1]}`;
              if (newWord === stateName) {
                return true;
              }
            } else {
              if (prefix === false) {
                if (
                  stateName === 'Virginia' &&
                  word === 'Washington' &&
                  title[wordIdx + 1] === 'DC'
                ) {
                  return true;
                } else if (
                  stateName === 'Washington' &&
                  title[wordIdx + 1] === 'DC'
                ) {
                  return false;
                } else {
                  return word === stateName;
                }
              }
            }
          }),
          idx,
        ];
      })
      .filter((list) => list[0].length > 0);

    const stateEpisodes = [];
    stateEpisodeList.forEach((episode) => {
      stateEpisodes.push(allEpisodes[episode[1]]);
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
