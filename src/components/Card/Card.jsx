import React, { useState } from "react";

export const Card = ({
	img,
	iconImg,
	title,
	time,
	distance,
	details,
	workouts
}) => {
	const [select, onSelect] = useState(false);
	return (
		<div
			className={`card ${select ? "active" : ""}`}
			onClick={() => onSelect(b => !b)}
		>
			<div className="card-img">
				<img src={img} alt="" />
				{workouts && (
					<div className="card-img-overlay">
						<div>{workouts}</div>
						<div>Workouts</div>
					</div>
				)}
			</div>
			<div className="card-info">
				<div className="card-info-header">
					<div className="card-info-header-title">{title}</div>
					<div className="card-info-header-icon">
						<img src={iconImg} alt="" />
					</div>
				</div>
				<div className="card-info-detail">
					{time && `⏱  ${time}`} {distance && `👟  ${distance}`}
				</div>
				<div className={`card-info-btn ${select ? "show" : "hide"}`}>
					View Details
				</div>
			</div>
		</div>
	);
};
