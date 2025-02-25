'use client';
import { useState } from "react";

export default function AgendarConsulta() {
  const [nomePaciente, setNomePaciente] = useState("");
  const [nomeMedico, setNomeMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [mensagem, setMensagem] = useState("");

  const agendarConsulta = async (e) => {
    e.preventDefault();
    
    const novaConsulta = {
      paciente: nomePaciente,
      medico: nomeMedico,
      especialidade: especialidade,
      tipo: tipoConsulta,
    };

    try {
      const response = await fetch("https://api-clinica-2a.onrender.com/consultas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaConsulta),
      });

      if (response.ok) {
        setMensagem("Consulta agendada com sucesso!");
        setNomePaciente("");
        setNomeMedico("");
        setEspecialidade("");
        setTipoConsulta("");
      } else {
        setMensagem("Erro ao agendar consulta. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
      setMensagem("Erro ao agendar consulta. Tente novamente.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "rgb(124, 22, 22)" }}>Agendar Consulta</h1>
      <form onSubmit={agendarConsulta} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Nome do Paciente"
          value={nomePaciente}
          onChange={(e) => setNomePaciente(e.target.value)}
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          required
        />
        <input
          type="text"
          placeholder="Nome do Médico"
          value={nomeMedico}
          onChange={(e) => setNomeMedico(e.target.value)}
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          required
        />
        <input
          type="text"
          placeholder="Especialidade"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          required
        />
        <input
          type="text"
          placeholder="Tipo de Consulta"
          value={tipoConsulta}
          onChange={(e) => setTipoConsulta(e.target.value)}
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          required
        />
        <button type="submit" style={{
          width: "50%",
          height: "40px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "rgb(124, 22, 22)",
          color: "white",
          cursor: "pointer",
        }}>
          Agendar
        </button>
      </form>
      {mensagem && <p style={{ textAlign: "center", marginTop: "20px", color: "green" }}>{mensagem}</p>}
    </div>
  );
}

