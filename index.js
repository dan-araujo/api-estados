import express from "express";
import {
  buscarEstados,
  buscarEstadosPorId,
  buscarEstadoPorNome,
} from "./servicos/servico.js";

const app = express();

app.get("/estados", (req, res) => {
  const nomeEstado = req.query.buscar;
  const resultado = nomeEstado
    ? buscarEstadoPorNome(nomeEstado)
    : buscarEstados();
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhum estado encontrado" });
  }
});

// :idsigla - Parâmetro com valor dinâmico para o endpoint
app.get("/estados/:idsigla", (req, res) => {
  const estado = buscarEstadosPorId(req.params.idsigla);

  if (estado) {
    res.json(estado);
  } else if (isNaN(parseInt(req.params.idsigla))) {
    res.status(404).send({ erro: "Requisição inválida" });
  } else {
    res.status(404).send({ erro: "Estado não encontrado" });
  }
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});
