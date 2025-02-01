import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanets = ({urlPlanets, uidPlanets}) => {
	const {actions} = useContext(Context)

	const [dataPlanets,setDataPlanet] = useState({});

	//console.log(dataPlanets);

	const sendDataPlanets = () => {
		actions.receiveDataPeople(dataPlanets.name)
	};
	

	const getPlanets = async () =>{
		try {
			const response = await fetch(`${urlPlanets}`)
			const data = await response.json()
			
			setDataPlanet(data.result.properties)
		} catch (error) {
			
		}
	};

	useEffect(() =>{
		getPlanets();
	},[]);
	
	//console.log(uidPlanets);
	
	return (
		<>
			<main className="card col-2" style={{width: "20em"}}>
				<header>
					<img src={parseInt(uidPlanets) !== 1 ? `https://starwars-visualguide.com/assets/img/planets/${uidPlanets}.jpg` : "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"} className="card-img-top object-fit-cover border" alt="..."/>
				</header>

				<section className="card-body">
					<h5 className="card-title text-warning">{dataPlanets.name}</h5>
					<p className="card-text">Population: {dataPlanets.population} </p>
					<p className="card-text">Terrain: {dataPlanets.terrain} </p>
				</section>

				<footer className="botones">
					<Link to={`/individualcardplanets/${uidPlanets}`}>
						<button className="btn btn-outline-warning">Learn More! </button>
					</Link>
					<button type="button" class="btn btn-outline-warning"><span onClick={sendDataPlanets}><i className="fa-solid fa-heart"></i></span></button>
				</footer>
			</main>
		</>
	);
};

