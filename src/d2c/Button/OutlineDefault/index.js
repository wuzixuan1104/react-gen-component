
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const OutlineDefault = ({ props }) => {
  return (
    <Div name="Size=Block, Device=iPhone X, Hierarchy=Primary - Outline, Appearance&State=Light - Default" elId="d2c_yr2kugvrf" props={props}>
	<Div name="*Button" elId="d2c_7bwx76ojw" props={props}>
		<Div name="Active" elId="d2c_9mki3gufb" props={props}>{get(props, 'd2c_9mki3gufb.children') || 'Active'}</Div>
	</Div>
</Div>
  );
};

export default OutlineDefault;
  