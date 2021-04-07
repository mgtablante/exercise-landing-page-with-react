import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />

				<div className="cajas container d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
