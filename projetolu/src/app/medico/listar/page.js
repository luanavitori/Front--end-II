"use client";
import { useState, useEffect } from "react";

export default function ListarMedicos() {
  const [medicos, setMedicos] = useState([]);
  const [busca, setBusca] = useState("");
  const [medicosFiltrados, setMedicosFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then((response) => response.json())
      .then((data) => {
        const medicosOrdenados = data.sort((a, b) => a.id - b.id);
        setMedicos(medicosOrdenados);
        setMedicosFiltrados(medicosOrdenados);
      })
      .catch((error) => console.error("Erro ao buscar médicos:", error));
  }, []);

  const handleSearch = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);

    const filtrados = medicos.filter((medico) =>
      medico.nome.toLowerCase().includes(valorBusca.toLowerCase())
    );
    setMedicosFiltrados(filtrados);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "rgb(124, 22, 22)" }}>
        Lista de Médicos
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Buscar médico por nome"
          value={busca}
          onChange={handleSearch}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "40px",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      <div style={{ overflowX: "auto", marginTop: "20px" }}>
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
              <th style={styles.th}>Especialidade</th>
            </tr>
          </thead>
          <tbody>
            {medicosFiltrados.map((medico) => (
              <tr key={medico.id}>
                <td style={styles.td}>{medico.id}</td>
                <td style={styles.td}>{medico.nome}</td>
                <td style={styles.td}>{medico.telefone}</td>
                <td style={styles.td}>{medico.email}</td>
                <td style={styles.td}>{medico.especialidade}</td>
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

