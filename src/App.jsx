import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import './index.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
