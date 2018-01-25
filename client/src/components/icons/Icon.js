import React from 'react';

const icons = {
  'AA': require('../../images/AA.gif'),
  'AC': require('../../images/AC.png'),
  'AM': require('../../images/AM.png'),
  'AS': require('../../images/AS.png'),
  'B6': require('../../images/B6.png'),
  'CO': require('../../images/CO.png'),
  'DL': require('../../images/DL.png'),
  'F9': require('../../images/F9.png'),
  'HA': require('../../images/HA.png'),
  'KE': require('../../images/KE.jpeg'),
  'NK': require('../../images/NK.png'),
  'UA': require('../../images/UA.png'),
  'VX': require('../../images/VX.png'),
  'VS': require('../../images/VS.png'),
  'SU': require('../../images/SU.png'),
  'WN': require('../../images/WN.jpeg')

}

const Icon = props => (
  <img src={icons[props.icon]}>
  </img>
)

export default Icon; 