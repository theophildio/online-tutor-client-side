import React from "react";
import "./AboutMe.css";
import Theo from "../../images/theo-tutor.png";
import Cources from "../Cources/Cources";
import Ratings from "../Home/Ratings/Ratings";

const AboutMe = () => {
	return (
		<div className="about">
			<h2>About Me</h2>
			<hr />
			<div className="about-me">
				<div className="image">
					<img src={Theo} alt="Theophil Dio" />
				</div>
				<div className="details">
					<h3>My Story</h3>
					<p>
						I am <span>Theophil Dio,</span> work as a Front-End Developer. I am
						proficient in HTML5, CSS3, JavaScript, and React. I've also worked
						on projects that used HTML5, CSS3, Javascript, React, and WordPress.
						I am an expert in CSS frameworks like Bootstrap and Tailwind. Firebase Authentication is one of my best skills.
					</p>
					<p>
						My only goal is to get a job as a MERN-Stack Developer in a good company. For this reason, I have been learning JavaScript and React regularly to achive my goal for 4 months. Next steps is to start learning and complete MongoDB, Express.js and Node.js.
					</p>
					<p>
						I will always be open to new challenges, have a learning attitude,
						and be able to balance my work and personal lives. In my opinion,
						great design is the outcome of teamwork between designers,
						developers, and stakeholders, who pool their knowledge and efforts.
					</p>
				</div>
			</div>
			<Cources></Cources>
		</div>
	);
};

export default AboutMe;
