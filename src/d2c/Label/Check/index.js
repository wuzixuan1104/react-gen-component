
import React from 'react';
import Div from 'd2c/Div';
import get from 'd2c/methods/get';
import './style.css';

const Check = ({ props }) => {
  return (
    <Div name="Lable Check / Group Item" elId="d2c_mzhc2fs0o" props={props}>
	<Div name="Lable Check" elId="d2c_rct3cmw4n" props={props}>
		<Div name=" 24 / Radio_Checked" elId="d2c_zvsad3t1l" props={props}>
			<Div name="Rectangle" elId="d2c_kmf1r0bqf" props={props}></Div>
			<Div name="Combined Shape" elId="d2c_fyo2txvty" props={props}></Div>
		</Div>
		<Div name="文案" elId="d2c_goxyj6g4k" props={props}>{get(props, 'd2c_goxyj6g4k.children') || '文案'}</Div>
		<Div name="*Text Field" elId="d2c_an2olzl82" props={props}>
			<Div name="*Text Field" elId="d2c_s5zdrbw3w" props={props}>
				<Div name="Frame 2" elId="d2c_6lwfhc89i" props={props}>
					<Div name="Frame 8" elId="d2c_zc11zg9j0" props={props}>
						<Div name="* / Numeric + $ - Default" elId="d2c_lae53z38j" props={props}>
							<Div name="$" elId="d2c_6njwm3s0v" props={props}>{get(props, 'd2c_6njwm3s0v.children') || '$ '}</Div>
							<Div name="50" elId="d2c_46506wo1r" props={props}>{get(props, 'd2c_46506wo1r.children') || '50'}</Div>
						</Div>
						<Div name="Chevron / 24/Down - Sm" elId="d2c_gzo6csx4p" props={props}>
							<Div name="color" elId="d2c_snuitftc3" props={props}></Div>
						</Div>
					</Div>
					<Div name="divider" elId="d2c_wowrslyf5" props={props}></Div>
				</Div>
			</Div>
		</Div>
		<Div name="文案" elId="d2c_y3ef38u5l" props={props}>{get(props, 'd2c_y3ef38u5l.children') || '文案'}</Div>
		<Div name="*Text Field" elId="d2c_7r3rlz5qe" props={props}>
			<Div name="*Text Field" elId="d2c_xps61xd8q" props={props}>
				<Div name="Frame 2" elId="d2c_1ljhviqq5" props={props}>
					<Div name="Frame 8" elId="d2c_q0j8mpz1i" props={props}>
						<Div name="* / Numeric + $ - Default" elId="d2c_z65l8dlfc" props={props}>
							<Div name="$" elId="d2c_mv8ex3nz1" props={props}>{get(props, 'd2c_mv8ex3nz1.children') || '$ '}</Div>
							<Div name="50" elId="d2c_jhi161mdq" props={props}>{get(props, 'd2c_jhi161mdq.children') || '50'}</Div>
						</Div>
						<Div name="Chevron / 24/Down - Sm" elId="d2c_rlh5dksbf" props={props}>
							<Div name="color" elId="d2c_4k2bi5f8h" props={props}></Div>
						</Div>
					</Div>
					<Div name="divider" elId="d2c_seykiy0j1" props={props}></Div>
				</Div>
			</Div>
		</Div>
		<Div name="文案" elId="d2c_s6meq8x6k" props={props}>{get(props, 'd2c_s6meq8x6k.children') || '文案'}</Div>
	</Div>
	<Div name="Help Text" elId="d2c_h1x3oh3lj" props={props}>
		<Div name="16 / Exclamation" elId="d2c_6li9p2ccs" props={props}>
			<Div name="Rectangle" elId="d2c_lrpkj5iew" props={props}></Div>
			<Div name="Combined Shape" elId="d2c_uaugec1jd" props={props}></Div>
		</Div>
		<Div name="Help Text" elId="d2c_lc0ge9i8b" props={props}>{get(props, 'd2c_lc0ge9i8b.children') || 'Help Text'}</Div>
	</Div>
</Div>
  );
};

export default Check;
  