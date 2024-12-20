import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import { Login as LoginPage } from "./features/auth/routes/Login";
import { Account as AccountPage } from "./features/account/routes/Account";
import { PreventionGuard } from "./components/PreventionGuard";
import { AuthGuard } from "./components/AuthGuard";
import { LanguageOutlet } from "./components/LanguageOutlet";

function App() {
  const location = useLocation();
  const { i18n: {
    language: lang
  } } = useTranslation();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${lang ?? 'en'}`} state={{ from: location }} replace />}
      />
      <Route
        path={"/:lang"}
        element={<LanguageOutlet />}
      >
        <Route
          index
          element={<PreventionGuard><LoginPage /></PreventionGuard>}
        />
        <Route
          path="account"
          element={<AuthGuard><AccountPage /></AuthGuard>}
        />
      </Route>
      
    </Routes>
  );
}

export default App;
