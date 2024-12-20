import React, { PropsWithChildren, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export function PreventionGuard({ children }: PropsWithChildren) {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const { i18n: {
    language: lang
  } } = useTranslation();

  if (token) {
    return <Navigate to={`/${lang}/account`} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};