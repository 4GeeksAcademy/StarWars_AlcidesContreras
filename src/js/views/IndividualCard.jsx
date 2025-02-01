import React, {useEffect, useState } from "react";
import { useParams } from "react-router";

const IndividualCard = () =>{
    const [dataIndividual, setDataIndividual] = useState({})

    const {id} = useParams();



    useEffect(()=>{
        fetch('https://www.swapi.tech/api/people/' + id )
        .then(response => response.json())
        .then(data => {
            setDataIndividual(data.result.properties)
        })
    },[]);

    return (
        <>
            <main className="card card_individual">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <header className="cardIndividual_header">
                                <h1 className="card-title">{dataIndividual.name}</h1>
                            </header>
                            <section className="cardIndividual_description">
                                <p className="card-text">Height: {dataIndividual.height} </p>
                                <p className="card-text">Mass: {dataIndividual.mass}</p>
                                <p className="card-text">Hair Color: {dataIndividual.hair_color}</p>
                                <p className="card-text">Skin Color: {dataIndividual.skin_color}</p>
                                <p className="card-text">Eye Color: {dataIndividual.eye_color}</p>
                                <p className="card-text">Birth Year: {dataIndividual.birth_year}</p>
                                <p className="card-text">Gender: {dataIndividual.gender}</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )

};

export default IndividualCard;