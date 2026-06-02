// INTELLIGENCE - MÓDULO DE INSIGHTS CLÍNICOS SIMULADOS
// Simula análisis de IA médica con alertas, recomendaciones y resúmenes de pacientes

export default function Intelligence() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Intelligence</h1>
        <p className="text-gray-400 text-sm">
          AI-generated clinical insights and risk analysis
        </p>
      </div>

      {/* AI SUMMARY CARD */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">

        <h2 className="text-lg font-semibold mb-2">
          Clinical AI Summary
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed">
          The system detected moderate risk patterns in 3 patients.
          Recommended follow-up within 7 days for cardiovascular monitoring.
        </p>

      </div>

      {/* ALERTS SECTION */}
      <div className="space-y-3">

        <h2 className="text-lg font-semibold">
          Risk Alerts
        </h2>

        {/* ALERT 1 */}
        <div className="bg-red-900/20 border border-red-800 rounded-xl p-4">
          <p className="font-medium text-red-400">
            High Risk Patient Detected
          </p>
          <p className="text-sm text-gray-400">
            María González shows elevated glucose levels over last 3 readings.
          </p>
        </div>

        {/* ALERT 2 */}
        <div className="bg-yellow-900/20 border border-yellow-800 rounded-xl p-4">
          <p className="font-medium text-yellow-400">
            Monitoring Required
          </p>
          <p className="text-sm text-gray-400">
            Juan Pérez blood pressure trending upward.
          </p>
        </div>

      </div>

      {/* INSIGHTS GRID */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Prediction Model</h3>
          <p className="text-sm text-gray-400">
            87% accuracy in risk classification based on simulated data.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Trend Analysis</h3>
          <p className="text-sm text-gray-400">
            Cardiovascular risk trends increasing in elderly group.
          </p>
        </div>

      </div>

    </div>
  );
}