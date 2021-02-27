import React, { useEffect, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import stateMap from './utils/stateMap';

// am4core.useTheme(am4themes_animated);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60rem',
  },
}));

const Map = (props) => {
  const { handleClick, selected } = props;
  const classes = useStyles();
  console.log(stateMap[1].name);
  console.log(selected===stateMap[1].name)
  return (
    <Container className={classes.root}>
      <svg viewBox="-100 -50 1080 650">
        {stateMap.map((stateData) => (
          <path
            name={stateData.name}
            d={stateData.shape}
            stroke="#2f2f2f"
            strokeWidth="3px"
            key={stateData.id}
            style={{
              cursor: 'pointer',
              fill: selected !== stateData.name ? '#9AC4E6' : '#E68683' ,
            }}
            onClick={(event) => handleClick(event)}
            onMouseOver={(event) => {
              event.target.style.fill = '#E68683';
            }}
            onMouseOut={(event) => {
              event.target.style.fill = selected !== stateData.name ? '#9AC4E6' : '#E68683';
            }}
          />
        ))}
      </svg>
    </Container>
  );
};

export default Map;
