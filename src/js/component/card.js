import React from "react";

//create your first component
export function Card() {
	return (
		<div className="card" style={{ width: "35rem", height: "35rem" }}>
			<img
				className="card-img-top"
				src="https://www.nationalgeographic.com.es/medio/2020/09/30/coronavirus-en-mascotas_4c25d45a_960x768.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">Mascotas</h5>
				<p className="card-text text-center">
					Hasta ahora no se ha demostrado que los animales domésticos
					puedan transmitir el virus a los humanos, pero tampoco se
					han hecho tests generalizados a las mascotas.
				</p>
				<a
					href="buttonCard"
					className="btn btn-primary"
					rel="noopener noreferrer">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
