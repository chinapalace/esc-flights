import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function LoadingFlights(props) {
  return (
    <Content
      style={{
        backgroundColor: "#4bc8db",
        height: '100vh'
      }}
    >
      <div id="loading" style={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      }}>
        <h1
          style={{
            color: 'white',
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >Sorry no flights match your search. Please try again!</h1>
        <img style={{ position: 'relative' }} src={bkg} alt="" />
      </div>
    </Content>
  )
}

export default LoadingFLights;