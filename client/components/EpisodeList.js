import React, { useState, useEffect } from 'react';
import { EpisodeListItem, Map } from './index';
import axios from 'axios';
import {
  Grid,
  Paper,
  Container,
  LinearProgress,
  makeStyles,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pagination: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [usState, setUsState] = useState('all');
  const [page, setPage] = useState(1);
  const [pageEpisodes, setPageEpisodes] = useState([]);
  const classes = useStyles;

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
        return [
          title.filter((word, wordIdx) => {
            if (
              word === 'New' ||
              word === 'South' ||
              word === 'North' ||
              word === 'West'
            ) {
              const newWord = `${word} ${title[wordIdx + 1]}`;
              return newWord === stateName;
            } else {
              return word === stateName;
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
    <Container>
      <Map handleClick={handleStateClick} />
      <Grid container spacing={3} alignItems="center" alignContent="center">
        {episodes ? (
          pageEpisodes.map((episode, idx) => (
            <Grid
              item
              xs={6}
              key={`${episode.itunes.season}${episode.itunes.episode}`}
            >
              <EpisodeListItem
                id={`${episode.itunes.season}${episode.itunes.episode}`}
                idx={idx}
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
        size="large"
      />
    </Container>
  );
};

export default EpisodeList;
