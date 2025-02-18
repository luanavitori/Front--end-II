"use client";
import { useState, useEffect } from "react";

export default function ListarPaciente() {
  const [pacientes, setPacientes] = useState([]);
  const [busca, setBusca] = useState("");
  const [pacientesFiltrados, setPacientesFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
        setPacientesFiltrados(data);
      })
      .catch((error) => console.error("Erro ao buscar pacientes:", error));
  }, []);

  const handleSearch = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);

    const filtrados = pacientes.filter((paciente) =>
      paciente.nome.toLowerCase().includes(valorBusca.toLowerCase())
    );
    setPacientesFiltrados(filtrados);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ color: "rgb(124, 22, 22)", textAlign: "center" }}>
        Lista de Pacientes
      </h1>


      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Buscar paciente por nome"
          value={busca}
          onChange={handleSearch}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "20px",
            border: "1px solid #ccc",
          }}
        />
      </div>


      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "rgb(124, 22, 22)", color: "white" }}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nome</th>
              <th style={styles.th}>Telefone</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>CPF</th>
            </tr>
          </thead>
          <tbody>
            {pacientesFiltrados.map((paciente) => (
              <tr key={paciente.id}>
                <td style={styles.td}>{paciente.id}</td>
                <td style={styles.td}>{paciente.nome}</td>
                <td style={styles.td}>{paciente.telefone}</td>
                <td style={styles.td}>{paciente.email}</td>
                <td style={styles.td}>{paciente.cpf}</td>
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
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};
