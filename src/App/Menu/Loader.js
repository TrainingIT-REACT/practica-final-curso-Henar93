import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LinearQuery() {
  const classes = useStyles();

  return (
    <div id="loader" className={classes.root}>
      <LinearProgress variant="query" />
      <h2>Cargando ...</h2>
      <LinearProgress variant="query"/>
    </div>
  );
}
