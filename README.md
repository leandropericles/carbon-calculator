# 🌱 EcoTrip Calculator: Simulador de Impacto Ambiental

> **Desafio de Projeto — DIO | Calculadora de Emissão de CO₂ com GitHub Copilot**

**Autor:** Leandro Péricles Fabrício | Campus Expert DIO

---

## 📋 Sobre o Projeto

Calculadora interativa que simula emissões de CO₂ em viagens, permitindo comparar diferentes meios de transporte e calcular créditos de carbono para compensação ambiental.

### Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Design responsivo com variáveis CSS
- **JavaScript (ES6+)** — Lógica de negócios e DOM
- **GitHub Copilot** — Desenvolvimento assistido por IA
- **GitHub Actions** — Deploy automatizado

---

## ✨ Funcionalidades

- ✅ Cálculo automático de distância entre 40+ cidades brasileiras
- ✅ Comparação entre 4 modos de transporte (Bicicleta, Carro, Ônibus, Caminhão)
- ✅ Visualização gráfica das emissões de CO₂
- ✅ Cálculo de créditos de carbono para compensação
- ✅ Interface responsiva (mobile e desktop)
- ✅ Loading state e tratamento de erros

---

## 📁 Estrutura do Projeto

```
carbon-calculator/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── routes-data.js
│   ├── config.js
│   ├── calculator.js
│   ├── ui.js
│   └── app.js
├── .github/workflows/deploy.yml
└── README.md
```

---

## 🚀 Como Usar

### Acesso Online

Acesse diretamente pelo GitHub Pages:
🔗 [https://leandropericles.github.io/carbon-calculator/](https://leandropericles.github.io/carbon-calculator/)

### Instalação Local

```bash
git clone https://github.com/leandropericles/carbon-calculator.git
cd carbon-calculator
```

Abra o arquivo `index.html` no navegador.

### Passo a Passo

1. **Selecione Origem e Destino** — Use o autocomplete
2. **Escolha o Transporte** — Bicicleta 🚲, Carro 🚗, Ônibus 🚌 ou Caminhão 🚚
3. **Clique em Calcular** — Veja os resultados
4. **Compare** — Analise emissões entre diferentes modais
5. **Compense** — Calcule créditos de carbono necessários

---

## 📊 Fatores de Emissão

| Transporte | Emissão (kg CO₂/km) |
|---|---|
| 🚲 Bicicleta | 0.000 |
| 🚌 Ônibus | 0.089 |
| 🚗 Carro | 0.120 |
| 🚚 Caminhão | 0.960 |

### Exemplo: São Paulo → Rio de Janeiro (430 km)

| Modal | Emissão | Redução |
|---|---|---|
| 🚗 Carro | 51,60 kg CO₂ | — |
| 🚌 Ônibus | 38,27 kg CO₂ | 25,8% menos |
| 🚲 Bicicleta | 0 kg CO₂ | 100% menos |

---

## 🌍 Créditos de Carbono

### O que são?

> **1 crédito = 1.000 kg de CO₂** compensados através de projetos sustentáveis.

### Como compensar

1. Calcule sua emissão na calculadora
2. Converta para créditos (divida por 1.000)
3. Invista em projetos de reflorestamento ou energia renovável

**Exemplo:** Viagem SP → RJ de carro emite **51,60 kg CO₂** = **0,0516 créditos** (custo estimado: R$ 5,16)

---

## 🛠️ Módulos JavaScript

| Arquivo | Responsabilidade |
|---|---|
| `routes-data.js` | Banco de dados de rotas brasileiras |
| `config.js` | Configurações e fatores de emissão |
| `calculator.js` | Funções de cálculo |
| `ui.js` | Renderização e manipulação da interface |
| `app.js` | Inicialização e event listeners |

---

## 📈 Resultados e Aprendizados

### ✅ O que Funcionou Bem

- **GitHub Copilot:** Acelerou desenvolvimento com sugestões precisas
- **Arquitetura Modular:** Separação clara de responsabilidades
- **Design System:** Variáveis CSS facilitaram manutenção

### ⚠️ Desafios

- Coleta de distâncias reais entre cidades
- Responsividade mobile do grid de transporte
- Arredondamento preciso de cálculos

### 💡 Lições Aprendidas

- Prompts específicos geram código melhor
- Validação progressiva evita erros
- UX com loading state melhora experiência

---

## 📝 Licença

**MIT License** — Projeto open source para fins educacionais.

---

## 👨‍💻 Desenvolvedor

**Leandro Péricles**
Strategic Architecture & AI Consultant | Campus Expert DIO
[Linkedin](https://linkedin.com/in/leandropericles)


---

## 🙏 Agradecimentos

- **DIO e CI&T** — Pela oportunidade de aprendizado
- **GitHub Copilot** — Por acelerar o desenvolvimento
- **Comunidade Open Source** — Pelas referências e inspirações
- **Instrutores: - Pelas aulas e dicas

---

> 🌱 *"O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."*
>
> — Provérbio Chinês
