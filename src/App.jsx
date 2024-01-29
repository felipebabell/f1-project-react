import "./styles.css";
import DataGrid from "./DataGrid";
import React, { useEffect, useState } from "react";

const parseCsv = (text) => {
  const result = {
    header: [],
    data: [],
  };
  const [header, ...content] = text.split("\n");
  result.header = header.split(",");
  content.forEach((item) => {
    result.data.push(item.split(","));
  });
  console.log(result);
  return result;
};

export default function App() {
  const [csv, setCsv] = useState(null);
  useEffect(() => {
    fetch("/lap_times.csv")
      .then((r) => r.text())
      .then((text) => {
        setCsv(parseCsv(text));
      });
  }, []);
  return (
    <div className="F1">
      <DataGrid csv={csv} />
    </div>
  );
}
