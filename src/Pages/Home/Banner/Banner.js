import React from "react";
import "./Banner.css";
import Tutor from "../../../images/theo-tutor.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
	return (
		<section className="banner">
			<div className="banner-content">
				<div className="left-area">
					<img src={Tutor} alt="" />
				</div>
				<div className="right-area">
					<h2>Qualified Online Tuition</h2>
					<h1>Tutor</h1>
					<hr />
					<p>
						I can tutor your child and ensure they remain proficient in their
						core subjects, and enjoy learning along the way. I am a time served
						and qualified teaching professional, and I'm ready now to help.
					</p>
					<Link to="/cources" className="tutor-btn">
						Get Tuition <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Banner;
