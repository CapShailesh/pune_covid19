import React from "react";
import { Bar } from "react-chartjs-2";
import { DATA } from "../../shared/data";

export default class DeceasedBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: DATA.map((d) => {
        return d.Date;
      }),
      data: DATA.map((d) => {
        return d.Dead;
      }),
    };
  }

  render() {
    const state = {
      labels: this.state.labels,
      datasets: [
        {
          label: "DECEASED",
          backgroundColor: "rgba(149, 165, 166, 1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: this.state.data,
        },
      ],
    };

    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "DECEASED",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "top",
              align: "end",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
