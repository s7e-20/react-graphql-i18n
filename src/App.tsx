import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/Login";
import { AccountPage } from "./pages/Account";
import { AuthContext } from "./components/AuthProvider";

function App() {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={token ? <Navigate to={"/account"} state={{ from: location }} replace /> : <LoginPage />} />
      <Route path="/account" element={token ? <AccountPage /> : <Navigate to={"/"} state={{ from: location }} replace />} />
    </Routes>
  );
}

export default App;
