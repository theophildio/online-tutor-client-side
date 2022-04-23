import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cource.css";
import { addToDb } from "../../../LocalStorage/LocalStorage";

const Cource = ({ cource }) => {
	const { _id, image, title, details, fee } = cource;
	const navigate = useNavigate();

	const addToLocalStorage = (id) => {
		addToDb(id);
	};

	const navigateT0CourceDetail = (id) => {
		navigate(`/cource/${_id}`);
	};

	return (
		<div className="cource">
			<button className="navigate-detail" onClick={() => navigateT0CourceDetail(_id)}>
				<img src={image} alt="" />
				<h4>{title}</h4>
				<p>
					<small>{details}</small>
				</p>
				<h2>${fee}</h2>
			</button>
			<Link
				className="tutor-btn"
				to="/checkout"
				onClick={() => addToLocalStorage(_id)}
			>
				Enroll Now <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
			</Link>
		</div>
	);
};

export default Cource;
