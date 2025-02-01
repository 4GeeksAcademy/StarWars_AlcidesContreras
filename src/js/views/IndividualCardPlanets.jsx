import React, {useEffect, useState } from "react";
import { useParams } from "react-router";

const IndividualCardPlanets = () =>{
    const [dataIndividual, setDataIndividual] = useState({})

    const {id} = useParams();
    console.log(dataIndividual);

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/planets/' + id )
        .then(response => response.json())
        .then(data => {
            setDataIndividual(data.result.properties)
        })
    },[]);

    return (
            <main className="card card_individual">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={id != 1 ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"} className="card-img-top object-fit-cover border" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <header className="cardIndividual_header">
                                <h1 className="card-title">{dataIndividual.name}</h1>
                            </header>
                            <section className="cardIndividual_description">
                                <p className="card-text">Diameter: {dataIndividual.diameter} </p>
                                <p className="card-text">Rotation Period: {dataIndividual.rotation_period}</p>
                                <p className="card-text">Orbital Period: {dataIndividual.orbital_period}</p>
                                <p className="card-text">Gravity: {dataIndividual.gravity}</p>
                                <p className="card-text">Population: {dataIndividual.population}</p>
                                <p className="card-text">Climate: {dataIndividual.climate}</p>
                                <p className="card-text">Terrain: {dataIndividual.terrain}</p>
                                <p className="card-text">Surface Water: {dataIndividual.surface_water}</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
    );

};

export default IndividualCardPlanets;