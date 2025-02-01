import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicles = ({urlVehicles, uidVehicles}) => {

      const{actions} = useContext(Context)
      const [dataVehicles,setDataVehicles] = useState({});  

      //console.log(urlVehicles);
      
     const sendDataVehicles = () => {
      actions.receiveDataPeople(dataVehicles.name)
    };

      const getVehicles = async () => {
        try {
            const response = await fetch(`${urlVehicles}`);
            const data = await response.json()
            setDataVehicles(data.result.properties)
        } catch (error) {
            
        }
      };

      useEffect(()=>{
        getVehicles();
      },[])
      


    return (
        <main className="card col-2" style={{width: "20em"}}>
            <header>
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uidVehicles}.jpg`} style={{height: "15em"}}className="card-img-top object-fit-cover border" alt="..."/>
            </header>

            <section className="card-body ">
              <h5 className="card-title text-warning">{dataVehicles.name}</h5>
              <p className="card-text">Model: {dataVehicles.model}</p>
              <p className="card-text">Manufacturer: {dataVehicles.manufacturer}</p>
              <p className="card-text">Vehicle Class: {dataVehicles.vehicle_class}</p>
            </section>

            <footer className="botones ">
              <Link to={`/individualcardvehicles/${uidVehicles}`}>
                <button className="btn btn-outline-warning">Learn More! </button>
              </Link> 
              <button type="button" class="btn btn-outline-warning"><span onClick={sendDataVehicles}><i className="fa-solid fa-heart"></i></span></button>
            </footer>
        </main>
    );
};