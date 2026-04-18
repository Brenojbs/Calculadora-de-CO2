export const vehicles = {
  carro: {
    combustiveis: ["gasolina", "diesel", "eletrico"],
    consumo: { // km por litro (ou equivalente)
      gasolina: 12,
      diesel: 14,
      eletrico: 6 // km por kWh (simulado)
    }
  },
  caminhao: {
    combustiveis: ["diesel"],
    consumo: {
      diesel: 5
    }
  },
  onibus: {
    combustiveis: ["diesel"],
    consumo: {
      diesel: 3
    }
  },
  bicicleta: {
    combustiveis: [],
    consumo: {}
  }
};

export const emissionFactors = {
  gasolina: 2.31, // kg CO2 por litro
  diesel: 2.68,
  eletrico: 0.05 // por kWh (simplificado)
};