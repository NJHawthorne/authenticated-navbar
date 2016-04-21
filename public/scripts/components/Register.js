import React from 'react';
import NavBar from './NavBar.js';
import $ from 'jquery';
import user from './../models/user.js';
import {hashHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},
	render: function() {
		return (
			<section>
				<NavBar />
				<h1>Register here!</h1>
				<form onSubmit={this.handleRegister}>
					<input
						type="text"
						placeholder="First name"
						ref="firstName" />
					<div></div>
					<input
						type="text"
						placeholder="Last name"
						ref="lastName" />
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>	
					<input
						type="text"
						placeholder="Email"
						ref="email" />
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					<input
						type="password"
						placeholder="Password"
						ref="password" />
					<div></div>
					<button type="submit">Register</button>
				</form>
			</section>
		);
	},
	handleRegister: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			headers: {
				Accept: 'application/json'
			},
			success: (newUser) => {
				this.state.user.set(newUser);
				hashHistory.push('/');
			},
			error: (err) => {
				this.setState({errors: err.responseJSON});
			}
		});
	}
});