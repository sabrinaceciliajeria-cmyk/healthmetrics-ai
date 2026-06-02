// AUTH CONTEXT - GESTIÓN DE SESIÓN SIMULADA
// Maneja login/logout y estado global del usuario

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // STATE - USUARIO LOGUEADO
  const [user, setUser] = useState(null);

  // LOGIN SIMULADO
  const login = (email) => {
    setUser({
      name: "Dr. Smith",
      role: "doctor",
      email,
    });
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// HOOK - USO DEL AUTH
export const useAuth = () => useContext(AuthContext);