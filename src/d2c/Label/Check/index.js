
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Check = ({ props }) => {
  return (
    <Div name="Lable Check / Group Item" elId="d2c_ngk0urgsl" props={props}>
	<Div name="Lable Check" elId="d2c_66yfjzjkx" props={props}>
		<Div name=" 24 / Radio_Checked" elId="d2c_v2nffiixq" props={props}>
			<Div name="Rectangle" elId="d2c_6wrnkzkbb" props={props}></Div>
			<Div name="Combined Shape" elId="d2c_574mhklyw" props={props}></Div>
		</Div>
		<Div name="文案" elId="d2c_wfcfbxs3e" props={props}>{get(props, 'd2c_wfcfbxs3e.children') || '文案'}</Div>
		<Div name="*Text Field" elId="d2c_ellw84qlf" props={props}>
			<Div name="*Text Field" elId="d2c_n3ibvbat8" props={props}>
				<Div name="Frame 2" elId="d2c_lysyte5p1" props={props}>
					<Div name="Frame 8" elId="d2c_vr7xg47th" props={props}>
						<Div name="* / Numeric + $ - Default" elId="d2c_3zb9czele" props={props}>
							<Div name="$" elId="d2c_c94bbwqgi" props={props}>{get(props, 'd2c_c94bbwqgi.children') || '$ '}</Div>
							<Div name="50" elId="d2c_342w3qn4z" props={props}>{get(props, 'd2c_342w3qn4z.children') || '50'}</Div>
						</Div>
						<Div name="Chevron / 24/Down - Sm" elId="d2c_7a3nesagf" props={props}>
							<Div name="color" elId="d2c_9a5vjc0ht" props={props}></Div>
						</Div>
					</Div>
					<Div name="divider" elId="d2c_3px0u20np" props={props}></Div>
				</Div>
			</Div>
		</Div>
		<Div name="文案" elId="d2c_7a978av4g" props={props}>{get(props, 'd2c_7a978av4g.children') || '文案'}</Div>
		<Div name="*Text Field" elId="d2c_5xfikwxct" props={props}>
			<Div name="*Text Field" elId="d2c_78mb6sedq" props={props}>
				<Div name="Frame 2" elId="d2c_5uwgx3u2r" props={props}>
					<Div name="Frame 8" elId="d2c_tv7c0me9h" props={props}>
						<Div name="* / Numeric + $ - Default" elId="d2c_f29j5tjaj" props={props}>
							<Div name="$" elId="d2c_z5mhgczgy" props={props}>{get(props, 'd2c_z5mhgczgy.children') || '$ '}</Div>
							<Div name="50" elId="d2c_g6fhbx0ub" props={props}>{get(props, 'd2c_g6fhbx0ub.children') || '50'}</Div>
						</Div>
						<Div name="Chevron / 24/Down - Sm" elId="d2c_irkuq497o" props={props}>
							<Div name="color" elId="d2c_9ggxtew9u" props={props}></Div>
						</Div>
					</Div>
					<Div name="divider" elId="d2c_pqnlenfvb" props={props}></Div>
				</Div>
			</Div>
		</Div>
		<Div name="文案" elId="d2c_vnsy3mkdx" props={props}>{get(props, 'd2c_vnsy3mkdx.children') || '文案'}</Div>
	</Div>
	<Div name="Help Text" elId="d2c_sl8jl6k1c" props={props}>
		<Div name="16 / Exclamation" elId="d2c_jtg0sjpzx" props={props}>
			<Div name="Rectangle" elId="d2c_d79gix54j" props={props}></Div>
			<Div name="Combined Shape" elId="d2c_xdvlgrta2" props={props}></Div>
		</Div>
		<Div name="Help Text" elId="d2c_6n5jwipfu" props={props}>{get(props, 'd2c_6n5jwipfu.children') || 'Help Text'}</Div>
	</Div>
</Div>
  );
};

export default Check;
  