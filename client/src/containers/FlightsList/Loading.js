import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

export default function Loading(props) {
  return (
    <div
      style={{
        paddingTop: '45vh'
      }}>
      <CircularProgress size={50} />
    </div>
  )
}