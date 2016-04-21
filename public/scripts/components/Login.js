import React from 'react';
import NavBar from './NavBar.js';
import $ from 'jquery';
import user from './../models/user.js';
import {hashHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	render: function() {
		return (
			<section>
				<NavBar />
				<h1>Login here!</h1>
				<form onSubmit={this.handleLogin}>
					<input
						type="text"
						placeholder="email"
						ref="email" />
					<input
						type="password"
						placeholder="password"
						ref="password" />
					<button type="submit">Login</button>
				</form>
			</section>
		);
	},
	handleLogin: function(e) {
		e.preventDefault();
		$.ajax({
			url: 'auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			headers: {
				Accept: 'application/json'
			},
			success: (login) => {
				this.state.user.set(login);
				hashHistory.push('/');
			},
			error: (err) => {
				this.setState({error: err.responseJSON});
			}
		});
	}
});