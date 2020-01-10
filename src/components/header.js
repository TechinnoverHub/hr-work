import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "./logo.svg";

export default class header extends Component {
	render() {
		return (
			<div>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
			</div>
		);
	}
}
