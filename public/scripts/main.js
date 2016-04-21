import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
	</Router>
);

render(
	router,
	document.querySelector('main')
);