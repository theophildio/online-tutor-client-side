import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./AddedCource.css";

const AddedCource = ({cource}) => {
	const {image, title, fee} = cource;
	
	return (
		<div>
			<div className="cource-details">
				<div className="cource-img">
					<img src={image} alt="" />
				</div>
				<div className="cource-infos">
					<div className="infos">
						<p>{title}</p>
						<p>
							<>${fee}</>
						</p>
					</div>
					<div className="remove-btn">
						<FontAwesomeIcon className="remove-icon" icon={faTrash}></FontAwesomeIcon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddedCource;
