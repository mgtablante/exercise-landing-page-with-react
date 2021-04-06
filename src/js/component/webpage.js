import React from "react";

//create your first component
export class WebPage extends React.Component {
	render() {
		return (
			<div>
				<Home />
				<Navbar />
				<Card />
			</div>
		);
	}
}
