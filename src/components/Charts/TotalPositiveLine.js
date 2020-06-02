import React from "react";
import { Line } from "react-chartjs-2";
import { DATA } from "../../shared/data";

export default class TotalPositive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: DATA.map((d) => {
        return d.Date;
      }),
      data: DATA.map((d) => {
        return d.TotalPositive;
      }),
    };
  }
  render() {
    const state = {
      labels: this.state.labels,
      datasets: [
        {
          label: "TOTAL POSITIVE",
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: this.state.data,
        },
      ],
    };
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "TOTAL POSITIVE ",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "top",
              align: "end",
            },
          }}
        />
      </div>
    );
  }
}
