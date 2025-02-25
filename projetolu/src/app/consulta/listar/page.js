'use client';
import { useState, useEffect } from "react";

export default function ListarConsulta() {
  const [consultas, setConsultas] = useState([]);
  const [buscaPaciente, setBuscaPaciente] = useState("");
  const [buscaMedico, setBuscaMedico] = useState("");
  const [consultasFiltradas, setConsultasFiltradas] = useState([]);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/consultas")
      .then((response) => response.json())
      .then((data) => {
        const consultasOrdenadas = data.sort((a, b) => a.id - b.id);
        setConsultas(consultasOrdenadas);
        setConsultasFiltradas(consultasOrdenadas);
      })
      .catch((error) => console.error("Erro ao buscar consultas:", error));
  }, []);

  useEffect(() => {
    const filtradas = consultas.filter(
      (consulta) =>
        consulta.paciente.toLowerCase().includes(buscaPaciente.toLowerCase()) &&
        consulta.medico.toLowerCase().includes(buscaMedico.toLowerCase())
    );
    setConsultasFiltradas(filtradas);
  }, [buscaPaciente, buscaMedico, consultas]);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "rgb(124, 22, 22)" }}>Lista de Consultas</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Buscar paciente por nome"
          value={buscaPaciente}
          onChange={(e) => setBuscaPaciente(e.target.value)}
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
          type="text"
          placeholder="Buscar médico por nome"
          value={buscaMedico}
          onChange={(e) => setBuscaMedico(e.target.value)}
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
      </div>
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
          <thead>
            <tr style={{ backgroundColor: "rgb(124, 22, 22)", color: "white" }}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Médico</th>
              <th style={styles.th}>Especialidade</th>
              <th style={styles.th}>Paciente</th>
              <th style={styles.th}>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {consultasFiltradas.map((consulta) => (
              <tr key={consulta.id}>
                <td style={styles.td}>{consulta.id}</td>
                <td style={styles.td}>{consulta.medico}</td>
                <td style={styles.td}>{consulta.especialidade}</td>
                <td style={styles.td}>{consulta.paciente}</td>
                <td style={styles.td}>{consulta.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  th: {
    padding: "12px",
    textAlign: "left",
    borderBottom: "none", 
  },
  td: {
    padding: "10px",
    borderBottom: "none", 
  },
};
