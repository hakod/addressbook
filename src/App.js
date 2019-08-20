import React from "react";
import "./App.css";
import ProfileGrid from "./components/ProfileGrid";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { whileStatement } from "@babel/types";

const Links = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #afeeee;
  width: 1200px;
  position: fixed;
  left: 0;
  right: 0;
  top: -65px;
  margin: 5% auto;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Links>
            <NavLink
              style={{
                color: "white",
                background: "#FF6347",
                padding: "5px",
                margin: "10px",
                width: "90px",
                fontSize: "20px",
                textAlign: "center"
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                color: "white",
                background: "#FF6347",
                padding: "5px",
                margin: "10px",
                width: "90px",
                fontSize: "20px",
                textAlign: "center"
              }}
              to="/settings"
            >
              Settings
            </NavLink>
          </Links>
          <Route exact path="/" component={ProfileGrid} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  );
}

export default App;
