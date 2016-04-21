import React from 'react';
import NavBar from './NavBar.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<NavBar />
				<h1>Login here!</h1>
				<form>
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
	}
});