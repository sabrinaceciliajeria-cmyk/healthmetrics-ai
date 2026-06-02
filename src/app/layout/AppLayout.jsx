// LAYOUT GLOBAL - ESTRUCTURA PRINCIPAL DEL SAAS
// Define sidebar, navegación y contenedor de páginas

import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Topbar from "./components/Topbar";

export default function AppLayout() {

  // STATE - CONTROL SIDEBAR MÓVIL
  const [open, setOpen] = useState(false);

  // NAV STYLE - ESTADO ACTIVO
  const linkStyle = ({ isActive }) =>
    `block py-2 px-2 rounded transition ${
      isActive
        ? "bg-gray-800 text-cyan-400"
        : "text-gray-300 hover:text-cyan-400"
    }`;

  return (
    <div className="flex h-screen bg-gray-950 text-white">

      {/* SIDEBAR */}
      <aside
        className={`w-64 bg-gray-900 border-r border-gray-800 p-4
        ${open ? "block" : "hidden"} md:block`}
      >

        {/* BRAND */}
        <h1 className="font-bold text-lg mb-6">
          HealthMetrics AI
        </h1>

        {/* NAV */}
        <nav className="space-y-2 text-sm">

          <NavLink to="/" className={linkStyle}>
            Dashboard
          </NavLink>

          <NavLink to="/patients" className={linkStyle}>
            Patients
          </NavLink>

          <NavLink to="/analytics" className={linkStyle}>
            Analytics
          </NavLink>

          <NavLink to="/intelligence" className={linkStyle}>
            Intelligence
          </NavLink>

        </nav>
      </aside>

      {/* MAIN WRAPPER */}
      <div className="flex-1 flex flex-col">

      <Topbar />

        {/* CONTENT */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}