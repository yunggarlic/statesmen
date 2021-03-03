import React, { useEffect, useState } from 'react';
import { Container, makeStyles, Slide } from '@material-ui/core';
import stateMap from './utils/stateMap';

// am4core.useTheme(am4themes_animated);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '45rem',
  },
}));

const Map = (props) => {
  const { handleClick, selected } = props;
  const loaded = true;
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <svg viewBox="0 0 1080 625">
        {stateMap.map((stateData) => {
          return (
            <Slide key={stateData.id} in={loaded} mountOnEnter unmountOnExit>
              <path
                name={stateData.name}
                d={stateData.shape}
                stroke="#2f2f2f"
                strokeWidth="3px"
                style={{
                  cursor: 'pointer',
                  fill:
                    selected !==
                    stateData.name.replace(/[\s]/gi, '').toLowerCase()
                      ? '#9AC4E6'
                      : '#E68683',
                }}
                onClick={(event) => handleClick(event)}
                onMouseOver={(event) => {
                  event.target.style.fill = '#E68683';
                }}
                onMouseOut={(event) => {
                  event.target.style.fill =
                    selected !==
                    stateData.name.replace(/[\s]/gi, '').toLowerCase()
                      ? '#9AC4E6'
                      : '#E68683';
                }}
              />
            </Slide>
          );
        })}
      </svg>
    </Container>
  );
};

export default Map;
