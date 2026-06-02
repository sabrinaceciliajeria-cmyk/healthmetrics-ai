// DASHBOARD PRO - PANEL PRINCIPAL DEL SISTEMA CLÍNICO
// Versión mejorada con jerarquía visual, estado en vivo y KPI principal destacado

import { motion } from "framer-motion";
import MetricCard from "../../../components/ui/MetricCard";

export default function Dashboard() {

  // MOCK DATA - KPIs PRINCIPALES
  const metrics = [
    {
      title: "Actividad clínica",
      value: "87%",
      subtitle: "Monitoreo en tiempo real",
    },
    {
      title: "Riesgo promedio",
      value: "Medium",
      subtitle: "Basado en datos simulados",
    },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm">
          Overview general del sistema clínico
        </p>
      </motion.div>

      {/* LIVE STATUS BAR - SISTEMA EN TIEMPO REAL */}
      <div className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-3">

        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-green-400">Live monitoring active</span>
        </div>

        <span className="text-xs text-gray-500">
          Updated just now
        </span>
      </div>

      {/* HERO KPI - FOCO PRINCIPAL */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">

        <p className="text-gray-400 text-sm">
          Pacientes activos
        </p>

        <h2 className="text-4xl font-bold text-white mt-1">
          128
        </h2>

        <p className="text-sm text-cyan-400 mt-1">
          +12 esta semana
        </p>

      </div>

      {/* KPI CARDS SECUNDARIOS */}
      <div className="grid md:grid-cols-2 gap-4">
        {metrics.map((m, i) => (
          <MetricCard
            key={i}
            title={m.title}
            value={m.value}
            subtitle={m.subtitle}
          />
        ))}
      </div>

      {/* ACTIVITY FEED */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h2 className="text-sm font-semibold mb-3">
          Recent Activity
        </h2>

        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Paciente Juan Pérez actualizado (glucosa ↑)</li>
          <li>• Nueva medición registrada automáticamente</li>
          <li>• Alerta leve: presión arterial elevada</li>
          <li>• Sistema de monitoreo ejecutado</li>
        </ul>
      </div>

      {/* GRAPH PLACEHOLDER */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center">

        <h2 className="text-sm font-semibold mb-2">
          Clinical Trends
        </h2>

        <p className="text-gray-500 text-sm">
          Gráfico clínico (próxima iteración con datos reales simulados)
        </p>

      </div>

    </div>
  );
}