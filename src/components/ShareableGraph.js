import React from "react";
import { Bar, defaults } from "react-chartjs-2";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { REST_DATA, REGION_AVG } from "../data/mock";

import ShareComponent from "./ShareComponent";

import "../common.css";
import "./css/ShareableGraph.css";

const COLORS = ["#28AFB0", "#19647E", "#37392E", "#D85E5E"];

defaults.global.defaultFontColor = "black";
defaults.global.defaultFontFamily = "Avenir";
defaults.global.defaultFontSize = 16;

const ShareableGraph = (props) => {
  const datasets = [
    {
      label: "Local Region Average",
      backgroundColor: COLORS[0],
      data: Object.values(REGION_AVG["Palo Alto"]),
    },
  ];
  for (const [idx, restaurant] of props.restaurants.entries()) {
    datasets.push({
      label: restaurant.name,
      backgroundColor: COLORS[(idx % 3) + 1],
      data: restaurant.roleWages.map((wage) =>
        parseFloat(wage.roleAvgWage.substring(1))
      ),
    });
  }
  const data = {
    labels: ["Waiter", "Line Cook", "Chef", "Greeter"],
    datasets: datasets,
  };
  return (
    <div className="graph-share">
      <div className="viz-type-holder">
        <div className="viz-type-label">Visualization Type</div>
        <Dropdown
          options={[
            "Wages by role | Compared to restaurants nearby",
            "Wages over time | Compared to restaurants nearby",
            "Wages by role | Compared to restaurants nationally",
            "Wages over time | Compared to restaurants nationally",
          ]}
          onChange={this._onSelect}
          value="Wages by role | Compared to restaurants nearby"
          placeholder="Select an option"
        />
      </div>
      <div
        className="main-graph"
        style={props.addMarginTop ? { marginTop: "50px" } : {}}
      >
        <Bar
          data={data}
          width={800}
          height={450}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Average Wage ($/hr)",
                  },
                  ticks: {
                    beginAtZero: true,
                    steps: 4,
                    stepValue: 10,
                    max: 40,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <ShareComponent />
    </div>
  );
};

export default ShareableGraph;
