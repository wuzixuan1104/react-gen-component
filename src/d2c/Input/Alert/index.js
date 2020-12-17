
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Alert = ({ props }) => {
  return (
    <Div name="Property 1=Text Field, Property 2=Icon - Alert" elId="d2c_bgyxebiwp" props={props}>
	<Div name="Frame 43" elId="d2c_mhu0x49pa" props={props}>
		<Div name="*Text Field" elId="d2c_bk5ef4vu9" props={props}>
			<Div name="Frame 3" elId="d2c_2j2z3yqtp" props={props}>
				<Div name="Frame 7" elId="d2c_oi7abqdbp" props={props}>
					<Div name="Text" elId="d2c_s5raj5zrb" props={props}>{get(props, 'd2c_s5raj5zrb.children') || 'Text'}</Div>
					<Div name="Chevron / 24/Down - Sm" elId="d2c_hn4per081" props={props}>
						<Div name="color" elId="d2c_z90g7pdpc" props={props}></Div>
					</Div>
				</Div>
				<Div name="divider" elId="d2c_j0ut2nddo" props={props}></Div>
			</Div>
		</Div>
		<Div name="Frame 44" elId="d2c_76pntv4xx" props={props}>
			<Div name="Alert Text" elId="d2c_viq1x9blg" props={props}>{get(props, 'd2c_viq1x9blg.children') || 'Alert Text'}</Div>
		</Div>
	</Div>
</Div>
  );
};

export default Alert;
  