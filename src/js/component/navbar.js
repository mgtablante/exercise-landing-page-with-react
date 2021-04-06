import React from "react";

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			<a className="navbar-brand" href="#">
				Boostrap
			</a>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="#about">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#services">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#portfolio">
						Portfolio
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#contact">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
