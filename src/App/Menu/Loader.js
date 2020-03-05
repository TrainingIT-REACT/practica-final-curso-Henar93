import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function LinearQuery() {
  return (
    <div id="loader">
      <LinearProgress variant="query" />
      <h2>Cargando ...</h2>
      <LinearProgress variant="query"/>
    </div>
  );
}
