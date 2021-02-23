import React, { useState, useEffect } from 'react';
import EpisodeListItem from './EpisodeListItem';
import axios from 'axios';
import './css/EpisodeList.css';
import { GridList, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageEpisodes, setPageEpisodes] = useState([]);
  useEffect(() => {
    const fetchEpisodes = async () => {
      const { data } = await axios.get('/rss');
      setEpisodes(data);
      setPageEpisodes(data.slice(0, 10));
    };
    fetchEpisodes();
  }, []);

  const handlePageChange = (e, currentPage) => {
    setPage(currentPage);
    setPageEpisodes(episodes.slice((currentPage - 1) * 10, currentPage * 10));
  };

  return (
    <Container>
      <GridList cols={3} className="episode-list">
        {episodes ? (
          pageEpisodes.map((episode) => (
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
      <Pagination
        page={page}
        count={Math.ceil(episodes.length / 10)}
        onChange={handlePageChange}
      />

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
