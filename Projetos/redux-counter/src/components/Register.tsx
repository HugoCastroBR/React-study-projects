import React from 'react';
import Header from './Header';
import { Fragment } from 'react';
import Page from './page';
import { FormStyled } from './Login';

const Register = () => {
	return (
		<Fragment>
			<Header />
			<Page align={"center"} justify={"center"}>
				<FormStyled action="">
					<input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
					<input type="text" placeholder="Password" />
                    <input type="text" placeholder="Repeat the password" />
                    
					<div>
						<button>Entrar</button>
						<button>Registrar</button>
					</div>
                    <span>Error</span>
				</FormStyled>
			</Page>
		</Fragment>
	);
};

export default Register;