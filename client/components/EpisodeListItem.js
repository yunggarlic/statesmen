import React from 'react';

const EpisodeListItem = (props) => {
  const {
    episode: { title, contentSnippet, pubDate, itunes },
  } = props;
  return (
    <div className="episodeItem">
      <h2>{title}</h2>
      <p>{contentSnippet}</p>
      <p>{pubDate}</p>
      <p>
        Season: {itunes.season} Episode: {itunes.episode}
      </p>
    </div>
  );
};

export default EpisodeListItem;
