
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const LightLoading = ({ props }) => {
  return (
    <Div name="Size=Large, Device=iPhone X, Hierarchy=Primary, Appearance&State=Light - Loading" elId="d2c_jfsm1avvd" props={props}>
	<Div name="Group 18" elId="d2c_57bdnkv1u" props={props}>
		<Div name="*Button" elId="d2c_2l4anveyw" props={props}>
			<Div name="Active" elId="d2c_ox6ocgykz" props={props}>{get(props, 'd2c_ox6ocgykz.children') || 'Active'}</Div>
		</Div>
		<Div name="Rolling-1s-80px 1" elId="d2c_g3bjkmgx4" props={props}>
			<Div name="Rectangle" elId="d2c_y77pjdvro" props={props}></Div>
			<Div name="Oval" elId="d2c_49yze0hlf" props={props}></Div>
		</Div>
	</Div>
</Div>
  );
};

export default LightLoading;
  