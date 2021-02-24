import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import stateMap from './utils/stateMap';

// am4core.useTheme(am4themes_animated);

const Map = (props) => {
  const {handleClick} = props;
  return (
    <Container id="map">
      <svg viewBox="-100 -50 1080 650">
        {stateMap.map((stateData) => (
          <path
            name={stateData.name}
            d={stateData.shape}
            stroke="#fff"
            strokeWidth="1px"
            key={stateData.id}
            style={{ cursor: 'pointerd', fill: '#87BDDC' }}
            onClick={(event => handleClick(event))}
            onMouseOver={event => {
              event.target.style.fill='#083E80'
            }}
            onMouseOut={event => {
              event.target.style.fill = '#87BDDC'
            }}
          />
        ))}
      </svg>
    </Container>
  );
};

export default Map;
