"use client";
import { useState, useEffect } from "react";

export default function CadastroConsulta() {
  const [pacientes, setPacientes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [formData, setFormData] = useState({
    paciente: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    tipo: ""
  });
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };
    
    if (name === "medico") {
      const selectedMedico = medicos.find(medico => medico.id === Number(value));
      updatedFormData.especialidade = selectedMedico ? selectedMedico.especialidade : "";
    }
    
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmado(true);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "rgb(124, 22, 22)" }}>Cadastro de Consulta</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", marginTop: "20px" }}
      >
        <select
          name="paciente"
          value={formData.paciente}
          onChange={handleChange}
          required
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        >
          <option value="">Selecione um Paciente</option>
          {pacientes.map(paciente => (
            <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
          ))}
        </select>

        <select
          name="medico"
          value={formData.medico}
          onChange={handleChange}
          required
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        >
          <option value="">Selecione um Médico</option>
          {medicos.map(medico => (
            <option key={medico.id} value={medico.id}>{medico.nome}</option>
          ))}
        </select>

        <input
          type="text"
          name="especialidade"
          value={formData.especialidade}
          readOnly
          placeholder="Especialidade"
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        >
          <option value="Plano de saúde ou Particular">Plano de saúde ou Particular?</option>
          <option value="Plano de saúde">Plano de saúde</option>
          <option value="Particular">Particular</option>
        </select>

        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <input
          type="time"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
          required
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            backgroundColor: "rgb(124, 22, 22)",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Confirmar Consulta
        </button>
      </form>

      {confirmado && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "green", fontWeight: "bold" }}>
          Consulta cadastrada com sucesso!
        </p>
      )}
      
    </div>
  );
}
