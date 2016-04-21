import React from 'react';
import {Link} from 'react-router';
import user from './../models/user.js';
import $ from 'jquery';

const NavBar = React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({user: user});
		});
	},
	render: function() {
		if(this.state.user.get('id')) {
			return (
				<nav> 
					<Link to="/">Home</Link>
					<Link to="/dashboard">Dashboard</Link>
					<a href="#" onClick={this.logout}>Logout</a>
					<h1>YOOOOOO {this.state.user.get('firstName')}</h1>
				</nav>
			);
		} else {
			return (
				<nav>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</nav> 
			);
		}
	},
	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: 'auth/logout'
		});
	}
});

export default NavBar;