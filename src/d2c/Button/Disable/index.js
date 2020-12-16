
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Disable = ({ props }) => {
  return (
    <Div name="Size=Block, Device=iPhone 8, Hierarchy=Secondary, Appearance&State=Light - Default" elId="d2c_3mguhaf4n" props={props}>
	<Div name="*Button" elId="d2c_77dt5i54u" props={props}>
		<Div name="Active" elId="d2c_0smoaar1f" props={props}>{get(props, 'd2c_0smoaar1f.children') || 'Active'}</Div>
	</Div>
</Div>
  );
};

export default Disable;
  