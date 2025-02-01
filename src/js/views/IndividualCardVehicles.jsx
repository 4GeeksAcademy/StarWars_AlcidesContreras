import React, {useEffect, useState } from "react";
import { useParams } from "react-router";

const IndividualCardVehicles = () =>{
    const [dataIndividual, setDataIndividual] = useState({})

    const {id} = useParams();
    console.log(dataIndividual);

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/vehicles/' + id )
        .then(response => response.json())
        .then(data => {
            setDataIndividual(data.result.properties)
        });
    },[]);

    // "model": "TIE/sa bomber",
    // "vehicle_class": "space/planetary bomber",
    // "manufacturer": "Sienar Fleet Systems",
    // "cost_in_credits": "unknown",
    // "length": "7.8",
    // "crew": "1",
    // "passengers": "0",
    // "max_atmosphering_speed": "850",
    // "cargo_capacity": "none",
    // "consumables": "2 days",
    // "films": [],
    // "pilots": [],
    // "created": "2020-09-17T17:46:31.415Z",
    // "edited": "2020-09-17T17:46:31.415Z",
    // "name": "TIE bomber",
    // "url": "https://www.swapi.tech/api/vehicles/16"

    return (
            <main className="card card_individual">
                <div className="row g-0">
                    <div className="col-md-5 d-flex align-items-center">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <header className="cardIndividual_header">
                                <h1 className="card-title">{dataIndividual.name}</h1>
                            </header>
                            <section className="cardIndividual_description">
                                <p className="card-text">Model: {dataIndividual.model} </p>
                                <p className="card-text">Vehicle Class: {dataIndividual.vehicle_class}</p>
                                <p className="card-text">Manufacturer: {dataIndividual.manufacturer}</p>
                                <p className="card-text">Cost in Credits: {dataIndividual.cost_in_credits}</p>
                                <p className="card-text">Length: {dataIndividual.length}</p>
                                <p className="card-text">Crew: {dataIndividual.crew}</p>
                                <p className="card-text">Passengers: {dataIndividual.passengers}</p>
                                <p className="card-text">Max Atmosphering Speed: {dataIndividual.max_atmosphering_speed}</p>
                                <p className="card-text">Cargo Capacity: {dataIndividual.cargo_capacity}</p>
                                <p className="card-text">Consumables: {dataIndividual.consumables}</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
    );

};

export default IndividualCardVehicles;