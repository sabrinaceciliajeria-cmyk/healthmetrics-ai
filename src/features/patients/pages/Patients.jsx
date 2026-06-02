// VISTA PRINCIPAL DEL MÓDULO CLÍNICO

import { useState } from "react";
import { mockPatients } from "../../../data/mockPatients";

export default function Patients() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Función para color de riesgo
  const getRiskColor = (risk) => {
    if (risk === "High") return "text-red-400";
    if (risk === "Medium") return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Patients</h1>
        <p className="text-gray-400 text-sm">
          Gestión clínica de pacientes
        </p>
      </div>

      {/* LISTA DE PACIENTES */}
      <div className="grid gap-3">

        {mockPatients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => setSelectedPatient(patient)}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 cursor-pointer hover:border-cyan-500 transition"
          >

            <div className="flex justify-between items-center">

              {/* INFO PACIENTE */}
              <div>
                <h2 className="font-semibold">{patient.name}</h2>
                <p className="text-sm text-gray-400">
                  {patient.age} years · {patient.condition}
                </p>
              </div>

              {/* RISK BADGE */}
              <div className={`text-sm font-medium ${getRiskColor(patient.risk)}`}>
                {patient.risk}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* PANEL DETALLE */}
      {selectedPatient && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">

          <h2 className="text-lg font-bold mb-3">
            Patient Detail
          </h2>

          <div className="space-y-1 text-sm text-gray-300">
            <p><span className="text-gray-500">Name:</span> {selectedPatient.name}</p>
            <p><span className="text-gray-500">Age:</span> {selectedPatient.age}</p>
            <p><span className="text-gray-500">Condition:</span> {selectedPatient.condition}</p>
            <p>
              <span className="text-gray-500">Risk:</span>{" "}
              <span className={getRiskColor(selectedPatient.risk)}>
                {selectedPatient.risk}
              </span>
            </p>
          </div>

        </div>
      )}

    </div>
  );
}