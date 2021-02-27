import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Typography,
} from '@material-ui/core';
import ContactlessIcon from '@material-ui/icons/Contactless';
import InfoIcon from '@material-ui/icons/Info';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactlessIcon />}
      />
      <BottomNavigationAction label="About" value="about" icon={<InfoIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
