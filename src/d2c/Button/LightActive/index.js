
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const LightActive = ({ props }) => {
  return (
    <Div name="Size=Large, Device=iPhone X, Hierarchy=Primary, Appearance&State=Light - Active" elId="d2c_8dwnpsrnk" props={props}>
	<Div name="*Button" elId="d2c_a0d4ulv4r" props={props}>
		<Div name="Active" elId="d2c_sx11fu4gv" props={props}>{get(props, 'd2c_sx11fu4gv.children') || 'Active'}</Div>
	</Div>
</Div>
  );
};

export default LightActive;
  