import React from "react";
import NavBar from "./Components/NavBar";
import DashBoard from "./Components/DashBoard";
import VerticalNavBar from "./Components/VerticalNavBar";
import "./styles.css"; // Ensure this import is present

export default function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <div className="main-content">
        <VerticalNavBar />
        <DashBoard />
      </div> */}
    </div>
  );
}
