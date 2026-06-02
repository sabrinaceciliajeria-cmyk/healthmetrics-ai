// COMPONENTE REUTILIZABLE DE KPIs
// Tarjeta visual para métricas clínicas del dashboard (HealthMetrics AI)

export default function MetricCard({ title, value, subtitle, icon }) {
  return (
    <div
      className="
        bg-gray-900 
        border border-gray-800 
        rounded-xl 
        p-4 
        hover:border-cyan-500 
        hover:scale-[1.03] 
        hover:-translate-y-1 
        transition-all 
        duration-200
      "
    >

      {/* HEADER */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{title}</span>
        <div className="text-cyan-400">{icon}</div>
      </div>

      {/* VALUE */}
      <div className="text-2xl font-bold text-white">
        {value}
      </div>

      {/* SUBTITLE */}
      {subtitle && (
        <div className="text-xs text-gray-500 mt-1">
          {subtitle}
        </div>
      )}

    </div>
  );
}