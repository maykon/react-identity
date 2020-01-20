import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';

const MyRoute = () => <h1>Teste</h1>;
const Login = () => <h1>Login</h1>;

export const Routes = (
	<Switch>
		<Route exact={true} path="/signin-oidc" component={MyRoute} />
		<Route exact={true} path="/logout" component={MyRoute} />
		<Route exact={true} path="/logout/callback" component={MyRoute} />
		<Route exact={true} path="/:lng(en|es|de|fr|pt|it)/register/:form?" component={MyRoute} />
		<Route exact={true} path="/silentrenew" component={MyRoute} />
		<PrivateRoute path="/private" component={MyRoute} />
		<PrivateRoute path="/dashboard" component={MyRoute} />
		<Route exact={true} path="/login" component={Login} />

		<Route path="/" component={MyRoute} />
	</Switch>
);
