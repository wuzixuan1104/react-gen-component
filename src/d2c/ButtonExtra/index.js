
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const ButtonExtra = ({ props }) => {
  return (
    <Div name="Size=Block, Device=iPhone X, Hierarchy=Primary - Outline, Appearance&State=Light - Active" elId="d2c_k8c3mni92" props={props}>
	<Div name="*Button" elId="d2c_vcajvhsnb" props={props}>
		<Div name="Active" elId="d2c_t2lo67qiz" props={props}>{get(props, 'd2c_t2lo67qiz.children') || 'Active'}</Div>
	</Div>
</Div>
  );
};

export default ButtonExtra;
  