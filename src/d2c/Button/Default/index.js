
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Default = ({ props }) => {
  return (
    <Div name="Size=Block, Device=iPhone X, Hierarchy=Primary, Appearance&State=Light - Default" elId="d2c_guhrob77p" props={props}>
	<Div name="Active" elId="d2c_dz67lr059" props={props}>{get(props, 'd2c_dz67lr059.children') || 'Active'}</Div>
</Div>
  );
};

export default Default;
  