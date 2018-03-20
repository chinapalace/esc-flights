import React from 'react';
import imgUrl from './ticketart.png';

const style = {
  root: {
    backgroundImage: 'url(' + imgUrl + ')',
    width: '40%',
    bottom: '0px',
    left: '0px',
    zIndex: 1,
    height: '100vh',
  },
  background: {
    backgroundColor: '#b68cea',
  },
};

const Background = () => (
  <div style={style.background}>
    <div style={style.root}>
    </div>
  </div>
);

export default Background;