import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import Dashboard from "../../features/dashboard/pages/Dashboard";
import Patients from "../../features/patients/pages/Patients";
import Analytics from "../../features/analytics/pages/Analytics";
import Intelligence from "../../features/intelligence/pages/Intelligence";

import Login from "../../features/auth/pages/Login";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* APP PROTEGIDA */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="intelligence" element={<Intelligence />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}