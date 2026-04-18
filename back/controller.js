import { routes } from "./routes.js";
import { vehicles, emissionFactors } from "../front/config.js";

export function calculateCO2({ origem, destino, veiculo, combustivel }) {
  const route = routes.find(
    r => r.origem === origem && r.destino === destino
  );

  if (!route) {
    throw new Error("Rota não encontrada");
  }

  // Bicicleta
  if (veiculo === "bicicleta") {
    return {
      distancia: route.distancia,
      emissao: 0
    };
  }

  const consumo = vehicles[veiculo].consumo[combustivel];
  const fator = emissionFactors[combustivel];

  const emissao = (route.distancia / consumo) * fator;

  return {
    distancia: route.distancia,
    emissao: Number(emissao.toFixed(2))
  };
}

export function calculateAllVehicles(origem, destino, combustivel) {
  const vehicleDefaults = [
    { tipo: "carro", combustivel: combustivel },
    { tipo: "caminhao", combustivel: "diesel" },
    { tipo: "onibus", combustivel: "diesel" },
    { tipo: "bicicleta", combustivel: null }
  ];

  return vehicleDefaults.map(v => {
    const result = calculateCO2({
      origem,
      destino,
      veiculo: v.tipo,
      combustivel: v.combustivel
    });

    return {
      veiculo: v.tipo,
      emissao: result.emissao,
      distancia: result.distancia
    };
  });
}