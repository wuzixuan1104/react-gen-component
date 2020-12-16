
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Alert = ({ props }) => {
  return (
    <Div name="Property 1=Text Field, Property 2=Icon - Alert" elId="d2c_m9iiin3di" props={props}>
	<Div name="Frame 43" elId="d2c_hbxdp1ayw" props={props}>
		<Div name="*Text Field" elId="d2c_mx1rgbmlq" props={props}>
			<Div name="Frame 3" elId="d2c_wtwp2enfs" props={props}>
				<Div name="Frame 7" elId="d2c_uf8sv5nnd" props={props}>
					<Div name="Text" elId="d2c_4wf5w8khj" props={props}>{get(props, 'd2c_4wf5w8khj.children') || 'Text'}</Div>
					<Div name="Chevron / 24/Down - Sm" elId="d2c_5q11it9y8" props={props}>
						<Div name="color" elId="d2c_zz5nk5kbz" props={props}></Div>
					</Div>
				</Div>
				<Div name="divider" elId="d2c_zhaqp3cg8" props={props}></Div>
			</Div>
		</Div>
		<Div name="Frame 44" elId="d2c_gnzrpw2z5" props={props}>
			<Div name="Alert Text" elId="d2c_knp32a545" props={props}>{get(props, 'd2c_knp32a545.children') || 'Alert Text'}</Div>
		</Div>
	</Div>
</Div>
  );
};

export default Alert;
  