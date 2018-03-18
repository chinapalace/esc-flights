import React from 'react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#b68cea',
  },

  font: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Quicksand',
    letterSpacing: '4px',
    fontWeight: '100',
    fontSize: '60px',
    marginTop: '30px',
    marginBottom: '-5px',
    paddingRight: '150px',
    paddingLeft: '150px',
    textShadow: '1px 2px grey',
  },
  fontTwo: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Quicksand',
    // textShadow: '1px 1px black',
    lineHeight: '30px',
    fontWeight: '5',
    paddingRight: '300px',
    paddingLeft: '300px',
  },
};

const Header = () => (
  <div style={styles.root}>
    <h1 style={styles.font}>Explore new destinations</h1>
    <h2 style={styles.fontTwo}>Find your favorite destination and organize your trip in just a few minutes.</h2>
  </div>
);

export default Header;