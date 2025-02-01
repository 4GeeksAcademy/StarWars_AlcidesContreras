import React from "react";
import { useContext } from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { CardPeople } from "./CardPeople.jsx";
import { CardPlanets } from "./CardPlanets.jsx";
import { CardVehicles } from "./CardVehicles.jsx";

export const Home = () => {

	const {store} = useContext(Context)
	//console.log(store.StwPlanets);


	return(
		<main className="starWarsBlog">

			<div className="container_people">
				<header>
					<h1>Characters</h1>
				</header>
				<section className="col-12 StwPeoples">
					{
						store.StwPeople.map((character)=>{	
							return(
								<CardPeople urlCharacter={character.url} uidPeople={character.uid} key={character.uid}></CardPeople>
							)					
						})
					}	
				</section>
			</div>
			
			<div className="container_planets">
				<header>
					<h1>Planets</h1>
				</header>
				
				<section className="col-12 StwPlanets">
				{
						store.StwPlanets.map((planets)=>{
							return(
								<CardPlanets urlPlanets={planets.url} uidPlanets={planets.uid} key={planets.uid}></CardPlanets>
							)					
						})
					}
				</section>
			</div>	
			
			<div className="container_vehicles">
				<header>
					<h1>Vehicles</h1>
				</header>

				<section className="col-12 StwVehicles">
				{
						store.StwVehicles.map((vehicles)=>{
							return(
								<CardVehicles urlVehicles={vehicles.url} uidVehicles={vehicles.uid} key={vehicles.uid}></CardVehicles>
							)					
						})
					}
				</section>
			</div>
		</main>
	)
};
