import "./App.css";
import React from "react";
import { useReducer } from "react";
import DeveloperList from "./components/DeveloperList";
import DeveloperForm from "./components/DeveloperForm";
import { Developer } from "./components/Developer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {

  const [devOps, dispatch] = useReducer (Developer, []);

  return (
    
    
      <div className="App" style={{ margin: "3% 4%", backgroundColor: "#cac9c9" }}>
        <Navbar bg="dark" variant="dark" />
        <DeveloperForm  dispatch={ dispatch } />
        <DeveloperList dispatch={ dispatch } devOps={devOps} />
        
      </div>
    
  );
}

export default App;
