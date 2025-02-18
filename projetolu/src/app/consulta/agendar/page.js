"use client";
import { useState, useEffect } from "react";

export default function AgendarConsulta() {
  const [consultas, setConsultas] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [selectedConsulta, setSelectedConsulta] = useState(null);
  const [formData, setFormData] = useState({
    medicoId: "",
    pacienteId: "",
    tipo: "",
    data: "",
    horario: ""
  });

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/consultas")
      .then(response => response.ok ? response.json() : [])
      .then(data => setConsultas(Array.isArray(data) ? data : [data]));

    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));

    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);

  const handleSelectChange = (e) => {
    const consultaSelecionada = consultas.find(consulta => consulta.id === Number(e.target.value));
    setSelectedConsulta(consultaSelecionada);
    if (consultaSelecionada) {
      setFormData({
        medicoId: consultaSelecionada.medicoId,
        pacienteId: consultaSelecionada.pacienteId,
        tipo: consultaSelecionada.tipo,
        data: consultaSelecionada.data || "",
        horario: consultaSelecionada.horario || ""
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados da consulta atualizados");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Editar Consulta</h1>
      
      <div style={styles.selectWrapper}>
        <label style={styles.label}>Selecione uma Consulta:</label>
        <select onChange={handleSelectChange} style={styles.input}>
          <option value="">Selecione uma Consulta</option>
          {consultas.map(consulta => (
            <option key={consulta.id} value={consulta.id}>
              {`Consulta #${consulta.id}`}
            </option>
          ))}
        </select>
      </div>

      {selectedConsulta && (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.selectWrapper}>
            <label style={styles.label}>Médico:</label>
            <select name="medicoId" value={formData.medicoId} onChange={handleChange} style={styles.input}>
              <option value="">Selecione um Médico</option>
              {medicos.map(medico => (
                <option key={medico.id} value={medico.id}>{medico.nome}</option>
              ))}
            </select>
          </div>

          <div style={styles.selectWrapper}>
            <label style={styles.label}>Paciente:</label>
            <select name="pacienteId" value={formData.pacienteId} onChange={handleChange} style={styles.input}>
              <option value="">Selecione um Paciente</option>
              {pacientes.map(paciente => (
                <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
              ))}
            </select>
          </div>

          <div style={styles.selectWrapper}>
            <label style={styles.label}>Tipo de Consulta:</label>
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              style={styles.input}
              placeholder="Ex: Rotina, Especialista"
            />
          </div>

          <div style={styles.row}>
            <div style={styles.selectWrapper}>
              <label style={styles.label}>Data:</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.selectWrapper}>
              <label style={styles.label}>Horário:</label>
              <input
                type="time"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <button type="submit" style={styles.button}>Salvar Alterações</button>
        </form>
      )}
    </div>
  );
}


const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  },
  title: {
    textAlign: "center",
    color: "rgb(124, 22, 22)",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  selectWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px"
  },
  button: {
    backgroundColor: "rgb(124, 22, 22)",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "0.3s"
  }
};
