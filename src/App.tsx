import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import { Login as LoginPage } from "./features/login/Page";
import { Account as AccountPage } from "./features/account/Page";
import { PreventionGuard } from "./components/PreventionGuard";
import { AuthGuard } from "./components/AuthGuard";
import { LanguageOutlet } from "./components/LanguageOutlet";

function App() {
  const { i18n: {
    language: lang
  } } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${lang ?? 'en'}`} replace />}
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
    </BrowserRouter>
  );
}

export default App;
