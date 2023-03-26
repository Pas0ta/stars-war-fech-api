import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
	<nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning">
	  <div className="container">
		<Link to="/" className="navbar-brand">
		  Star Wars
		</Link>
		<button
		  className="navbar-toggler" 
		  type="button"
		  data-bs-toggle="collapse"
		  data-bs-target="#navbarNavDropdown"
		  aria-controls="navbarNavDropdown"
		  aria-expanded="false"
		  aria-label="Toggle navigation"
		>
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
		  <ul className="navbar-nav ms-auto">
			<li className="nav-item dropdown">
			  <a
				className="btn btn-primary"
				href="#"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			  >
				Favoritos
			  </a>
			  <ul className="dropdown-menu justify-content-between bg-secondary">
				{store.favs.map((item, index) => {
				  return (
					<li key={index} className="px-2">
					  {item.nombre}
					  <button
						className="btn btn-danger mx-4"
						onClick={() => actions.deleteFavs(item.nombre)}
					  >
						x
					  </button>
					</li>
				  );
				})}
			  </ul>
			</li>
		  </ul>
		</div>
	  </div>
	</nav>
  );
  
			}