import React, { ReactNode, createContext, useState } from 'react';
import { jwtDecode } from "jwt-decode";

type TokenType = string | null;

export interface IAuthContext {
    token: TokenType;
    updateToken: (newToken: TokenType) => void;
    userId: string | null;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(localStorage.getItem("token") ?? null);
  const updateToken = (newToken: TokenType) => {
    if (newToken) {
        localStorage.setItem("token", newToken);
    } else {
        localStorage.removeItem("token");
    }
    setToken(newToken);
  }

  let decodedToken: { id: string } | null = null;
  try {
    if (token) {
      decodedToken = jwtDecode(token);
    }
  } catch (error) {
    console.error("Failed to decode token", error, token);
  }
  const userId = decodedToken?.id ?? null;

  return (
    <AuthContext.Provider value={{ token, updateToken, userId }}>
      {children}
    </AuthContext.Provider>
  );
}
