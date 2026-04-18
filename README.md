# 🌍 Calculadora de Emissão de CO₂ por Transporte

Aplicação frontend em JavaScript puro que simula o cálculo de emissão de CO₂ baseado em rotas e diferentes tipos de transporte, com comparação automática entre veículos e ranking de impacto ambiental.

Projeto desenvolvido com foco em **arquitetura simples, separação de responsabilidades e experiência de usuário (UX)**, evoluindo para um modelo próximo de aplicação real.

---

## 🚀 Demonstração

👉 GitHub Pages:  
https://brenojbs.github.io/Calculadora-de-CO2/

---

## 🎯 Objetivo do Projeto

O objetivo da aplicação é permitir que o usuário:

- Escolha uma **origem e destino**
- Selecione um **tipo de veículo**
- Escolha um **tipo de combustível (quando aplicável)**
- Calcule a **emissão estimada de CO₂**
- Compare automaticamente diferentes meios de transporte
- Visualize um **ranking de opções mais sustentáveis**

---

## 🧠 Funcionalidades

### ✅ Cálculo de CO₂
- Baseado na distância entre rotas
- Baseado no tipo de veículo
- Baseado no tipo de combustível
- Fórmula de emissão simulada

---

### 🚗 Comparação entre veículos
A aplicação calcula automaticamente:

- Carro
- Caminhão
- Ônibus
- Bicicleta (emissão zero)

E gera um ranking de impacto ambiental.

---

### 🏆 Ranking automático
- 🥇 Melhor opção (menor emissão)
- 🥈 Segunda melhor
- 🥉 Terceira opção
- 🔥 Pior opção destacada

---

### ⚡ UX dinâmica
- Loading simulado durante cálculo
- Atualização dinâmica de selects (origem → destino)
- Feedback de erro amigável
- Cards responsivos com resultado

---

## ⚙️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- AI Agent 
- GitHub Pages
- GitHub Actions (CI/CD)

---

## 🧮 Regra de Cálculo

A emissão é calculada com base em:
emissao = (distancia / consumo) * fator_emissao


### Exceções:
- 🚲 Bicicleta → emissão zero
- ⚡ Elétrico → cálculo baseado em consumo energético (kWh)

---

## 🔄 CI/CD (Deploy Automático)

O projeto possui pipeline automatizado com GitHub Actions:

### Fluxo:
1. Push na branch `main`
2. GitHub Actions executa workflow
3. Gera artefato do projeto
4. Publica automaticamente no GitHub Pages

---

## 📦 Exemplo de Funcionalidade

### Entrada:
- Origem: Lisboa
- Destino: Porto
- Veículo: Carro
- Combustível: Gasolina

### Saída:
- Distância: 313 km
- Emissão: X kg CO₂
- Ranking comparativo entre veículos

---

## 🧠 Aprendizados Técnicos

Este projeto reforça:

- Manipulação de DOM puro
- Estruturação de lógica de negócio
- Simulação de backend com JS
- Consumo de dados dinâmicos
- Pipeline CI/CD com GitHub Actions
- Organização de projeto para deploy real

---

## 👨‍💻 Autor

Desenvolvido por **Breno JBS**

LinkedIn: https://www.linkedin.com/in/breno-jbs/
