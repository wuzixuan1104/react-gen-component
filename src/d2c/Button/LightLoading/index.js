
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const LightLoading = ({ props }) => {
  return (
    <Div name="Size=Large, Device=iPhone X, Hierarchy=Primary, Appearance&State=Light - Loading" elId="d2c_6zlt4itsr" props={props}>
	<Div name="Group 18" elId="d2c_2nl9iihyf" props={props}>
		<Div name="*Button" elId="d2c_cglhf8osw" props={props}>
			<Div name="Active" elId="d2c_j295a08l6" props={props}>{get(props, 'd2c_j295a08l6.children') || 'Active'}</Div>
		</Div>
		<Div name="Rolling-1s-80px 1" elId="d2c_sfebcgdbl" props={props}>
			<Div name="Rectangle" elId="d2c_jewkrjm3t" props={props}></Div>
			<Div name="Oval" elId="d2c_k8qks2lxg" props={props}></Div>
		</Div>
	</Div>
</Div>
  );
};

export default LightLoading;
  