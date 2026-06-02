// LOGIN - PANTALLA DE ACCESO SAAS
// Simula autenticación de sistema clínico

import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  // STATE - EMAIL INPUT
  const [email, setEmail] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // LOGIN ACTION
  const handleLogin = () => {
    login(email);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-950">

      {/* LOGIN CARD */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 w-80">

        <h1 className="text-xl font-bold mb-4">
          HealthMetrics AI
        </h1>

        <input
          className="w-full p-2 mb-3 bg-gray-800 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 text-black py-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}