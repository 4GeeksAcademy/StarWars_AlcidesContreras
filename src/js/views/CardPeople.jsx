import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { Link } from "react-router-dom";

export const CardPeople = ({urlCharacter, uidPeople}) => {
	const [dataPeople, SetDataPeople] = useState([{}])
	const {actions } = useContext(Context)

	const sendDataPeople = () => {
		actions.receiveDataPeople(dataPeople.name)
	};

	//localStorage.setItem('pepito', 'pepito')


	//const saveDataStorage = localStorage.setItem('storagePeople', JSON.stringify(dataPeople))
	//console.log(dataPeople);
	
	const getPeople = async () => {
		try {
			const response = await fetch(`${urlCharacter}`);
			const data = await response.json();
			SetDataPeople(data.result.properties)	
		} catch (error) {}
	};	


	useEffect(() =>{
		getPeople();
		// const getDataLocalStorage = JSON.parse(localStorage.getItem("storagePeople"))
		// console.log(getDataLocalStorage);			
		// SetDataPeople(getDataLocalStorage);
	},[])

	
	return (
		<>
			<main className="card col-2" style={{width: "20em"}}>
				<header >
					<img src={`https://starwars-visualguide.com/assets/img/characters/${uidPeople}.jpg`} className="card-img-top object-fit-cover border" alt="..."/>
				</header>

				<section className="card-body ">
					<h5 className="card-title text-warning">{dataPeople.name}</h5>
					<p className="card-text">Gender: {dataPeople.gender}</p>
					<p className="card-text">Hair color: {dataPeople.hair_color}</p>
					<p className="card-text">Eye color: {dataPeople.eye_color}</p>
				</section>

				<footer className="botones ">
					<Link to={`/individualcard/${uidPeople}`}>
						<button className="btn btn-outline-warning">Learn More! </button>
					</Link>
					<button type="button" class="btn btn-outline-warning"><span onClick={sendDataPeople}><i className="fa-solid fa-heart"></i></span></button>
				</footer>
			</main>
		</>
	);
};
