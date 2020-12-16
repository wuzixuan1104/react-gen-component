
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Default = ({ props }) => {
  return (
    <Div name="Size=Block, Device=iPhone X, Hierarchy=Primary, Appearance&State=Light - Default" elId="d2c_j8j2w2j6o" props={props}>
	<Div name="Active" elId="d2c_wieofoukg" props={props}>{get(props, 'd2c_wieofoukg.children') || 'Active'}</Div>
</Div>
  );
};

export default Default;
  