import React, { useState, useEffect } from 'react';
import EpisodeListItem from './EpisodeListItem';
import axios from 'axios';
import './css/EpisodeList.css';
import { GridList, Container, DataGrid } from '@material-ui/core';

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
      {/* <DataGrid pageSize={5} rowsPerPageOptions={[5,10,20]} pagination {...episodes.map((episode) => (
            <EpisodeListItem
              key={`${episode.itunes.season}${episode.itunes.episode}`}
              id={`${episode.itunes.season}${episode.itunes.episode}`}
              episode={episode}
            />
          ))}/> */}
    </Container>
  );
};

export default EpisodeList;
