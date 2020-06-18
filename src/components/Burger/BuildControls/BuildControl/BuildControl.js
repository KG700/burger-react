import React from 'react';

import classes from './buildControl.module.css'

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div classname={classes.Label}>{props.label}</div>
    <button className={classes.Less}>-</button>
    <button className={classes.More}>+</button>
  </div>
);

export default buildControl;
