import React from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = React.useCallback(() => {
    localStorage.removeItem("token");

    navigate("/");
  }, [navigate]);

  return { logout };
};
