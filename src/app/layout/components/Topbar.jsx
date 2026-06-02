// TOPBAR - BARRA SUPERIOR DEL SAAS
// Muestra información del usuario y acciones rápidas (logout)

import { useAuth } from "../../../context/AuthContext";

export default function Topbar() {

  // AUTH - USUARIO LOGUEADO
  const { user, logout } = useAuth();

  return (
    <div className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950">

      {/* LEFT - INFO SISTEMA */}
      <div>
        <h2 className="text-sm text-gray-400">
          HealthMetrics AI
        </h2>
      </div>

      {/* RIGHT - USER SECTION */}
      <div className="flex items-center gap-4">

        {/* USER INFO */}
        <div className="text-right">
          <p className="text-sm font-semibold">
            {user?.name || "Guest"}
          </p>
          <p className="text-xs text-gray-400">
            {user?.role || "No role"}
          </p>
        </div>

        {/* AVATAR */}
        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
          {user?.name ? user.name.charAt(0) : "G"}
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={logout}
          className="text-xs px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
}