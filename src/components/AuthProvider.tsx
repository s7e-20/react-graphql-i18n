import React, { ReactNode, createContext, useState } from 'react';

type TokenType = string | null;

export interface IAuthContext {
    token: TokenType;
    updateToken: (newToken: TokenType) => void;
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

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
}
