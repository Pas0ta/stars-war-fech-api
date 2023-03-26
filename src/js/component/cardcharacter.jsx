import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardCharacters = (props) => {

  const {store, actions} = useContext(Context);

  return (
    <div className="container my-5">
    <div className="card d-flex" style={{ width: "400px" }}>
      <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id + ".jpg"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="d-flex justify-content-between">
        <Link to={"/singlecard/character/" + props.id} className="btn btn-outline-primary bg-black">
          more info!
        </Link>
        <button onClick={()=>actions.agregarFavs(props.name, props.id)} className="btn btn-outline-warning bg-warning">
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};