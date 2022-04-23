import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToDb } from "../../../../LocalStorage/LocalStorage";
import "./CourceDetail.css";

const CourceDetails = () => {
	const { courceId } = useParams();
	const [cource, setCource] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/cource/${courceId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCource(data));
	}, []);

	const addToLocalStorage = (id) => {
		addToDb(id);
	};

	return (
		<div className="cource-detail-container">
			<h2>Cource Details of <span>{cource.title}</span></h2>
			<div className="cource-detail">
				<div className="cource-img">
					<img src={cource.image} alt="" />
				</div>
				<div className="cource-info">
					<h4>{cource.title}</h4>
					<p>{cource.details}</p>
					<h4 style={{marginBottom: '20px'}}>
						<small>Fee: ${cource.fee}</small>
					</h4>
					<Link
						className="tutor-btn"
						to="/checkout"
						onClick={() => addToLocalStorage(cource._id)}
					>
						Enroll Now <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourceDetails;
