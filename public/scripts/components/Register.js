import React from 'react';
import NavBar from './NavBar.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<NavBar />
				<h1>Register here!</h1>
				<form>
					<input
						type="text"
						placeholder="First name"
						ref="firstName" />
					<input
						type="text"
						placeholder="Last name"
						ref="lastName" />
					<input
						type="text"
						placeholder="Email"
						ref="email" />
					<input
						type="password"
						placeholder="Password"
						ref="password" />
					<button type="submit">Register</button>
				</form>
			</section>
		);
	}
});