import React, { useState, useEffect } from 'react';
import EpisodeListItem from './EpisodeListItem';
import axios from 'axios';

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
    <div>
      {episodes ? (
        episodes.map((episode) => (
          <EpisodeListItem
            key={`${episode.itunes.season}${episode.itunes.episode}`}
            episode={episode}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default EpisodeList;
