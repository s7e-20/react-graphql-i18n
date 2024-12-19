import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/Login";
import { AccountPage } from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
}

export default App;
