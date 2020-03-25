import React from 'react';
// import './home-layout.css';
import { Grid } from './style';

export default function Layout(props) {
  const { children } = props;

  return <Grid>{children}</Grid>;
}
