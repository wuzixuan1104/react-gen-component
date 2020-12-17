
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const LightActive = ({ props }) => {
  return (
    <Div name="Size=Large, Device=iPhone X, Hierarchy=Primary, Appearance&State=Light - Active" elId="d2c_t6jqpe3pv" props={props}>
	<Div name="*Button" elId="d2c_qauj3z7ph" props={props}>
		<Div name="Active" elId="d2c_kbwcextvj" props={props}>{get(props, 'd2c_kbwcextvj.children') || 'Active'}</Div>
	</Div>
</Div>
  );
};

export default LightActive;
  