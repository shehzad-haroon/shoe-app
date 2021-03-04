import React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'white',
    width: 10%0,
    textAlign:'center'
  },
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default-gray" textAlign="center" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
            <p className="shoe">Shoe Store</p>
            <Link to="/">
          <Tab label="Home" /></Link> 
          <Link to="/about">
          <Tab label="About"/></Link>
          <Link to="/product">
          <Tab label="Products"/></Link>
        </Tabs>
      </AppBar>
    </div>
  );
}
