import React from "react";
import "./App.scss";

import Card from "./components/Card";

import { MOCK_ASSETS_DATA } from "./mock";

export default () => {
	return (
		<div className="App">
			{MOCK_ASSETS_DATA.map(
				({ img, iconImg, title, time, distance, details, workouts }, i) => (
					<Card
						key={i}
						img={img}
						iconImg={iconImg}
						title={title}
						time={time}
						distance={distance}
						details={details}
						workouts={workouts}
					/>
				)
			)}
		</div>
	);
};
