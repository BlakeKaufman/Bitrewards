import React from "react";
import LoadHome from "./routs/home/index";
import LoadDashboard from "./routs/dashboard/index";
import LoadPayouts from "./routs/payouts/index";
import LoadLeaderboard from "./routs/leaderboard/index";
// import LoadIndex from "./routs/index/index";

import "./index.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/Home" element={<LoadHome />} />
      <Route path="/Dashboard" element={<LoadDashboard />} />
      <Route path="/Payouts" element={<LoadPayouts />} />
      <Route path="/Leaderboard" element={<LoadLeaderboard />} />
    </Routes>
  );
}

export default App;
