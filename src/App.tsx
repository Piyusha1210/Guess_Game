import React from "react";
import Dashboard from "./components/Dashboard";
import Game from "./components/Game";

function App() {
  return (
    <div className="">
      <div className="bg-gray-50 flex h-screen">
        <Dashboard />
        <Game />
      </div>
    </div>
  );
}

export default App;
