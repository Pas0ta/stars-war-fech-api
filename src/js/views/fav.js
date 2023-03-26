import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = ({ favorites }) => {
    const { store } = useContext(Context);
  
    return (
      <>
        <h1>Favorites List</h1>
        <ul>
          {store.favs.map((item, index) => (
            <li key={index}>{item.nombre}</li>
          ))}
        </ul>
      </>
    );
  };
  
