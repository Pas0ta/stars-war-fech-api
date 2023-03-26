import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CardCharacters } from "../component/cardcharacter.jsx";
import { CardPlanets } from "../component/cardplanet.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";
import { Context } from "../store/appContext";


export const Cards = () => {

  const { store, actions } = useContext(Context);

  return (
    <div id="Cards" className="d-flex flex-column ">
      <h2 className="text-danger px-2 mx-auto w-25 mt-5">Charters</h2>
      <div className="d-flex flex-row ">
        {store.personajes && store.personajes.length > 0
          ? store.personajes.map((item) => (
            <CardCharacters key={item.uid} id={item.uid} name={item.name} />
          )) : null}
      </div>
      <h2 className="text-danger px-2 mx-auto w-25 mt-5">Planets</h2>
      <div className="d-flex flex-row ">
        {store.planetas && store.planetas.length > 0
          ? store.planetas.map((item) => (
            <CardPlanets key={item.uid} name={item.name} id={item.uid} />
          )) : null}

      </div>
      <h2 className="text-danger px-2 mx-auto w-25 mt-5">Vehicles</h2>
      <div className="d-flex flex-row ">
        {store.vehiculos && store.vehiculos.length > 0
          ? store.vehiculos.map((item) => (
            <CardVehicles key={item.uid} name={item.name} id={item.uid} />
          )) : null}

      </div>
    </div>
  );
};