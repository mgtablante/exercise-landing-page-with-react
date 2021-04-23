import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export function Home() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron
					title="A Warm Welcome!"
					text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
					botton="Call to action!"
				/>

				<div className="cajas container d-flex">
					<Card
						title="Mascotas"
						text="los perros y los humanos han evolucionado conjuntamente, tanto en las culturas africanas y euroasiáticas, como en las que poblaron América y se mantuvieron sin contacto con aquellas hasta."
						botton="Find Out More!"
					/>
					<Card
						title="Mascotas"
						text="los perros y los humanos han evolucionado conjuntamente, tanto en las culturas africanas y euroasiáticas, como en las que poblaron América y se mantuvieron sin contacto con aquellas hasta."
						botton="Find Out More!"
					/>
					<Card
						title="Mascotas"
						text="los perros y los humanos han evolucionado conjuntamente, tanto en las culturas africanas y euroasiáticas, como en las que poblaron América y se mantuvieron sin contacto con aquellas hasta."
						botton="Find Out More!"
					/>
					<Card
						title="Mascotas"
						text="los perros y los humanos han evolucionado conjuntamente, tanto en las culturas africanas y euroasiáticas, como en las que poblaron América y se mantuvieron sin contacto con aquellas hasta."
						botton="Find Out More!"
					/>
				</div>
			</div>
		</>
	);
}
