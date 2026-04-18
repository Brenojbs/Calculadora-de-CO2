import { routes } from "../back/routes.js";
import { vehicles } from "./config.js";
import { calculateAllVehicles } from "../back/controller.js";

const originSelect = document.getElementById("originSelect");
const destinationSelect = document.getElementById("destinationSelect");

const calculateBtn = document.getElementById("calculateBtn");
const resultsDiv = document.getElementById("results");

const origins = [...new Set(routes.map(r => r.origem))];


const vehicleSelect = document.getElementById("vehicleType");
const fuelSelect = document.getElementById("fuelType");

origins.forEach(origem => {
  const option = document.createElement("option");
  option.value = origem;
  option.textContent = origem;
  originSelect.appendChild(option);
});

originSelect.addEventListener("change", () => {
  const selectedOrigin = originSelect.value;
  resultsDiv.innerHTML = "";

  destinationSelect.innerHTML = "";
  destinationSelect.value = "";

  if (!selectedOrigin) {
    destinationSelect.disabled = true;
    destinationSelect.innerHTML = "<option>Selecione a origem primeiro</option>";
    return;
  }

  const filteredRoutes = routes.filter(r => r.origem === selectedOrigin);

  destinationSelect.disabled = false;

  filteredRoutes.forEach(route => {
    resultsDiv.innerHTML = "";

    const option = document.createElement("option");
    option.value = route.destino;
    option.textContent = route.destino;
    destinationSelect.appendChild(option);
  });
});

vehicleSelect.addEventListener("change", () => {
  const selected = vehicleSelect.value;
  const vehicle = vehicles[selected];
  resultsDiv.innerHTML = "";

  fuelSelect.innerHTML = "<option value=''>Selecione</option>";
  fuelSelect.value = "";
  
  if (!vehicle || vehicle.combustiveis.length === 0) {
    fuelSelect.disabled = true;
    fuelSelect.innerHTML = "<option>Não aplicável</option>";
    return;
  }

  fuelSelect.disabled = false;

  vehicle.combustiveis.forEach(fuel => {
    const option = document.createElement("option");
    option.value = fuel;
    option.textContent = fuel;
    fuelSelect.appendChild(option);
  });
});

calculateBtn.addEventListener("click", () => {
  const origem = originSelect.value;
  const destino = destinationSelect.value;
  const veiculo = vehicleSelect.value;
  const combustivel = fuelSelect.value !== "Não aplicável" ? fuelSelect.value : "gasolina" ;
  resultsDiv.innerHTML = "";

  // 🔒 Validação simples
  if (!origem || !destino || !veiculo || !combustivel) {
    showError("Preencha todos os campos");
    return;
  }
  try {

    resultsDiv.innerHTML = "<p>Calculando...</p>";

    setTimeout(() => {
      const results = calculateAllVehicles(origem, destino, combustivel);
      renderComparison(results);
    }, 500);

  } catch (error) {
    alert(error.message);
  }
});

function renderComparison(results) {
  results.sort((a, b) => a.emissao - b.emissao);

  const best = results[0];
  const worst = results[results.length - 1];

  resultsDiv.innerHTML = results.map(r => {
    let badge = "";
    let className = "card";

    if (r.veiculo === best.veiculo) {
      badge = "🌱 Mais ecológico";
      className += " best";
    } else if (r.veiculo === worst.veiculo) {
      badge = "🔥 Mais poluente";
      className += " worst";
    }

    return `
      <div class="${className}">
        <h3>${r.veiculo.toUpperCase()}</h3>
        <p>${badge}</p>
        <p>Distância: ${r.distancia} km</p>
        <p>Emissão: <strong>${r.emissao} kg CO₂</strong></p>
      </div>
    `;
  }).join("");
}

function showError(message) {
  const results = document.querySelector("#results");
  results.innerHTML = `
    <div class="error-state">
      ⚠️ ${message}
    </div>
  `;
}
