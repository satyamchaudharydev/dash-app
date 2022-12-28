import React from "react";
import style from "../style.module.scss";
import Select from "react-select";
import Plot from "react-plotly.js";

function CompareData({ data, options, graphType = "bar" }) {
  return (
    <div className={style.compare_data}>
      <Select
        className={style.compare_data_dropdown}
        placeholder="Select"
        options={options}
        isMulti
      ></Select>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: graphType,
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
      />
    </div>
  );
}

export default CompareData;
