import React, { useState, useEffect } from 'react';
import EpisodeListItem from './EpisodeListItem';
import axios from 'axios';
import './css/EpisodeList.css';
import { GridList, Container } from '@material-ui/core';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const fetchEpisodes = async () => {
      const { data } = await axios.get('/rss');
      setEpisodes(data);
    };
    fetchEpisodes();
  }, []);

  return (
    <Container>
      <GridList cols={3} className="episode-list">
        {episodes ? (
          episodes.map((episode) => (
            <EpisodeListItem
              key={`${episode.itunes.season}${episode.itunes.episode}`}
              id={`${episode.itunes.season}${episode.itunes.episode}`}
              episode={episode}
            />
          ))
        ) : (
          <></>
        )}
      </GridList>
    </Container>
  );
};

export default EpisodeList;
