import estados from "../dados/estados.js";

export const buscarEstados = () => {
    return estados;
}

export const buscarEstadoPorNome = (nomeEstado) => {
    return estados.filter((estado) =>
      estado.nome.toLowerCase().includes(nomeEstado.toLowerCase())
    );
  };

  export const buscarEstadosPorId = (id) => {
    const idEstado = parseInt(id);
    return estados.find(e => e.id === idEstado);
  }