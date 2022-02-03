import React from "react";
import {
	NavLink,
} from "react-router-dom";
import './sideNav.css'

const SideNav = () => {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sb-sidenav sb-sidenav-light">
				<div className="sb-sidenav-menu">
					<div className="nav">
						<NavLink className="nav-link" to="/" exact>
							<span>Home</span>
						</NavLink>
						<NavLink className="nav-link" to="/sheet" exact>
							<span>DIM Conformed Carrier</span>
						</NavLink>
						<NavLink className="nav-link " to="/demo" exact>
							<span>Headings</span>
						</NavLink>
						<NavLink className="nav-link" to="/demo" exact>
							<span>Headings</span>
						</NavLink>
						<NavLink className="nav-link" to="/demo" exact>
							<span>Headings</span>
						</NavLink>
						<NavLink className="nav-link" to="/demo" exact>
							<span>Headings</span>
						</NavLink>
					</div>
				</div>
			</nav>
		</div>

	);
};

export default SideNav;
