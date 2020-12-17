
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Disable = ({ props }) => {
  return (
    <Div name="Size=Block, Device=iPhone 8, Hierarchy=Secondary, Appearance&State=Light - Default" elId="d2c_bs5o7ukld" props={props}>
	<Div name="*Button" elId="d2c_o60ceks37" props={props}>
		<Div name="Active" elId="d2c_31358pbfl" props={props}>{get(props, 'd2c_31358pbfl.children') || 'Active'}</Div>
	</Div>
</Div>
  );
};

export default Disable;
  