import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			<a className="navbar-brand" href="#">
				StartBoostrap
			</a>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a className="nav-link" href="#about">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#services">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#portfolio">
						Services
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
