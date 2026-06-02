// ANALYTICS - MÓDULO DE ANÁLISIS CLÍNICO
// Visualización de datos médicos simulados mediante gráficos (HealthMetrics AI)

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// DATA SIMULADA DE GLUCOSA
const glucoseData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 132 },
  { day: "Wed", value: 128 },
  { day: "Thu", value: 140 },
  { day: "Fri", value: 135 },
];

// DATA SIMULADA DE PRESIÓN ARTERIAL
const bloodPressureData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 125 },
  { day: "Wed", value: 130 },
  { day: "Thu", value: 128 },
  { day: "Fri", value: 135 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-gray-400 text-sm">
          Clinical data visualization and trends
        </p>
      </div>

      {/* GRID DE GRÁFICOS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* GLUCOSE CHART */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 w-full">

          <h2 className="font-semibold mb-4">
            Glucose Levels
          </h2>

          {/* CONTENEDOR FIJO PARA RECHARTS */}
          <div className="w-full h-[320px] min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={glucoseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#22d3ee" />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* BLOOD PRESSURE CHART */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 w-full">

          <h2 className="font-semibold mb-4">
            Blood Pressure
          </h2>

          {/* CONTENEDOR FIJO PARA RECHARTS */}
          <div className="w-full h-[320px] min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bloodPressureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#f59e0b" />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

      {/* INSIGHTS */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">

        <h2 className="font-semibold mb-2">
          Clinical Insight
        </h2>

        <p className="text-gray-400 text-sm">
          Patient glucose levels show mild upward trend.
          Recommend dietary adjustment and follow-up monitoring.
        </p>

      </div>

    </div>
  );
}