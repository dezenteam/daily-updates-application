import React from "react";
import { Chart } from "react-charts";

function MyChart() {
  const data = React.useMemo(() => [
    [
      [1, 10],
      [2, 20],
      [3, 10],
    ],
    [
      [1, 10],
      [2, 30],
      [3, 10],
    ],
    [
      [1, 10],
      [2, 50],
      [3, 10],
    ],
    [
      [1, 10],
      [2, 40],
      [3, 80],
    ],
  ]);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "right" },
    ],
    []
  );

  return (
    <nav class="navbar navbar-default">
      <div class="container">React Charts</div>
      <div
        style={{
          width: "70vw",
          height: "70vh",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          margin: "50px",
          padding: "20px",
          boxShadow: " 0 0 15px #ccccc"
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    </nav>
  );
}

export default MyChart;
