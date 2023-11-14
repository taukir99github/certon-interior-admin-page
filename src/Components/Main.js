import React, { useState } from "react";
import Header from "../Components/Header/Header";
import SideComponent from "./SideComponent";
import Form from "../Components/Form/Form";
import Form2 from "../Components/Form2/Form2";
import Project from "../Components/Project/Project";
import "./Main.css";
import "./SideComponents.css";

const Main = () => {
  const [tab, setTab] = useState("Project"); // Set the default tab to "Project"

  return (
    <div>
      <Header />

      <div className="main-body">
        <div className="hero-sec">
          <div className="side">
            <div className="wrapper">
              <div className="card1" onClick={() => setTab("Project")}>
                <p>Projects</p>
              </div>
              <div style={{ height: "10px" }}></div>
              <div className="card1" onClick={() => setTab("Notification")}>
                <p>Notification</p>
              </div>
              <div style={{ height: "10px" }}></div>
              <div className="card1" onClick={() => setTab("Add")}>
                <p>Add Projects</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            {tab === "Add" ? (
              <div>
                <div className="form">
                  <Form />
                </div>
                <div className="forms2">
                  <Form2 />
                </div>
              </div>
            ) : tab === "Project" ? (
              <div>
                <Project />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
