import React from "react";
import PropTypes from "prop-types";
//create your first component
export function Card(props) {
	return (
		<div className="card" style={{ width: "35rem", height: "35rem" }}>
			<img
				className="card-img-top"
				src="https://www.nationalgeographic.com.es/medio/2020/09/30/coronavirus-en-mascotas_4c25d45a_960x768.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.text}</p>
				<div className="d-flex justify-content-center">
					<button className="btn btn-primary">{props.botton}</button>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	botton: PropTypes.string
};
