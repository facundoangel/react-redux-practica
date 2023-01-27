import React from "react";
import TaskContainer from "./components/container/taskContainer";
import "./style.css";
import Pattern from "./assets/pattern.png";
import FilterContain from "./components/container/filterContain";

export default function App() {
  return (
    <div
      style={{ position: "relative", minHeight: "98vh", overflow: "hidden" }}
    >
      <img
        style={{
          height: "100vh",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: -1,
        }}
        src={Pattern}
        alt="imagen-fondo"
      />
      <TaskContainer />
      <FilterContain />
    </div>
  );
}
