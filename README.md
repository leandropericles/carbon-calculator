🌱 EcoTrip Calculator: Simulador de Impacto Ambiental para Viagens
Desafio de Projeto — DIO | Calculadora de Emissão de CO₂ com GitHub Copilot
Autor: Leandro Péricles Fabrício | Campus Expert DIO 15
Data: Março de 2026
📋 Índice
Contexto e Objetivos
Funcionalidades Principais
Estrutura do Projeto
Tecnologias Utilizadas
Como Usar
Fatores de Emissão
Impacto Ambiental
Licença

🎯 Contexto e Objetivos
Por que uma Calculadora de Emissão de CO₂?
A conscientização ambiental nunca foi tão crucial. Com o transporte sendo um dos maiores emissores de gases de efeito estufa, fornecer ferramentas que permitam às pessoas entenderem e compararem seu impacto ambiental é um passo fundamental para mudanças de comportamento sustentáveis.
Este projeto não é apenas um exercício técnico — é uma aplicação real que combina:
JavaScript moderno (ES6+) para lógica de negócios
HTML5 semântico para acessibilidade
CSS3 avançado (variáveis, Grid, Flexbox) para design responsivo
GitHub Copilot como acelerador de desenvolvimento
GitHub Actions para CI/CD automatizado
Objetivos de Aprendizagem
#
Objetivo
Resultado Esperado
1
Dominar manipulação de DOM com JavaScript
Criar interfaces interativas sem frameworks
2
Aplicar padrões de organização de código
Separar responsabilidades em módulos (config, data, calculator, UI, app)
3
Implementar cálculos complexos
Fatores de emissão, comparações percentuais, créditos de carbono
4
Desenvolver UI responsiva
Layout que funciona em mobile e desktop
5
Automatizar deploy com GitHub Actions
Publicação automática no GitHub Pages
6
Utilizar GitHub Copilot estrategicamente
Acelerar desenvolvimento mantendo qualidade
✨ Funcionalidades Principais
🎯 Core Features
Funcionalidade
Descrição
Status
Cálculo Automático de Distância
Banco de dados com 40+ rotas brasileiras preenche distância automaticamente
✅ Implementado
Comparação Multi-Modal
Compara 4 modos de transporte (Bicicleta, Carro, Ônibus, Caminhão)
✅ Implementado
Visualização Gráfica
Barras de progresso coloridas mostram impacto relativo
✅ Implementado
Créditos de Carbono
Calcula créditos necessários e estima preço para compensação
✅ Implementado
Interface Responsiva
Design adaptativo mobile-first
✅ Implementado
Loading State
Feedback visual durante processamento
✅ Implementado
🔧 Recursos Técnicos
Datalist Dinâmico: Preenchido automaticamente via JavaScript com cidades do banco de rotas
Validação de Formulário: Verifica campos obrigatórios e valores válidos
Tratamento de Erros: Try-catch para falhas de cálculo com mensagens amigáveis
Scroll Suave: Navegação automática para resultados após cálculo
BEM Naming: Convenção de nomenclatura CSS para manutenção
📁 Estrutura do Projeto
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
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md

Detalhamento dos Módulos JavaScript
Arquivo
Responsabilidade
Funções Principais
routes-data.js
Dados de rotas
getAllCities(), findDistance(origin, destination)
config.js
Configurações globais
populateDatalist(), setupDistanceAutofill()
calculator.js
Cálculos
calcularEmissao(), calcularTodosOsModos(), calcularEconomia(), calcularCreditosDeCarbono()
ui.js
Interface
renderResults(), renderComparison(), renderCarbonCredits(), utilitários de formatação
app.js
Orquestração
Event listeners, validação, fluxo de cálculo
🛠️ Tecnologias Utilizadas
Frontend
Tecnologia
Versão
Propósito
HTML5
5
Estrutura semântica e acessibilidade
CSS3
3
Estilização com variáveis CSS, Grid, Flexbox
JavaScript
ES6+
Lógica de negócios e manipulação de DOM
Ferramentas de Desenvolvimento
Ferramenta
Uso
GitHub Copilot
Autocomplete inteligente e geração de código
VS Code
Editor de código principal
GitHub Pages
Hospedagem estática gratuita
GitHub Actions
CI/CD automatizado
Padrões e Boas Práticas
BEM (Block Element Modifier): Nomenclatura CSS
Mobile-First: Design responsivo
IIFE (Immediately Invoked Function Expression): Encapsulamento
Separation of Concerns: Separação de responsabilidades
📖 Como Usar
Instalação Local
Clone o repositório:
bash
12
Abra no navegador:
bash
12
Ou acesse via GitHub Pages:
1
Passo a Passo de Utilização
Selecione Origem e Destino:
Digite o nome da cidade nos campos "Origem" e "Destino"
Use o autocomplete para cidades disponíveis no banco de dados
A distância será preenchida automaticamente
Ajuste a Distância (opcional):
Marque "Inserir distância manualmente" se necessário
Digite a distância em quilômetros
Escolha o Meio de Transporte:
🚲 Bicicleta (0 kg CO₂/km)
🚗 Carro (0.12 kg CO₂/km)
🚌 Ônibus (0.089 kg CO₂/km)
🚚 Caminhão (0.96 kg CO₂/km)
Calcule:
Clique em "Calcular Emissão"
Aguarde o processamento (1.5s)
Analise os Resultados:
Emissão de CO₂: Quantidade total emitida
Comparação: Visualize todos os modos lado a lado
Créditos de Carbono: Saiba quanto custaria compensar
📊 Fatores de Emissão
Por Modo de Transporte
Transporte
Emissão (kg CO₂/km)
Impacto Relativo
🚲 Bicicleta
0.000
Zero emissão
🚌 Ônibus
0.089
74% do carro
🚗 Carro
0.120
Base (100%)
🚚 Caminhão
0.960
800% do carro
Exemplo Prático
Rota: São Paulo → Rio de Janeiro (430 km)
Transporte
Emissão Total
Economia vs Carro
Bicicleta
0.00 kg
51.60 kg (100%)
Ônibus
38.27 kg
13.33 kg (25.8%)
Carro
51.60 kg
—
Caminhão
412.80 kg
-361.20 kg (-700%)
🌍 Impacto Ambiental
Créditos de Carbono
O que são?
Créditos de carbono representam 1 tonelada (1000 kg) de CO₂ que deixou de ser emitida na atmosfera através de projetos sustentáveis.
Como funciona a compensação?
Calcule sua emissão: Use a calculadora para saber quanto CO₂ sua viagem emite
Converta para créditos: Divida por 1000 (ex: 51.60 kg = 0.0516 créditos)
Estime o custo: Preço varia entre R$ 50-150 por crédito
Compense: Invista em projetos de reflorestamento, energia renovável ou eficiência energética
Exemplo de Compensação:
Viagem SP-RJ de carro: 51.60 kg CO₂
Créditos necessários: 0.0516
Custo estimado: R$ 5.16 (média de R$ 100/crédito)
Por que Compensar?
✅ Neutralidade de Carbono: Equilibre suas emissões
✅ Apoio a Projetos Sustentáveis: Financie iniciativas verdes
✅ Conscientização: Entenda seu impacto real
✅ Responsabilidade Corporativa: Empresas podem usar para relatórios ESG

📈 Resultados e Reflexões
O que Funcionou Muito Bem
✅ GitHub Copilot como Pair Programmer:
Geração rápida de código repetitivo (CRUD de rotas)
Sugestões precisas de funções de cálculo
Documentação automática via JSDoc
✅ Arquitetura Modular:
Separação clara de responsabilidades
Fácil manutenção e testes
Reutilização de funções utilitárias
✅ Design System com Variáveis CSS:
Consistência visual em todo o projeto
Facilidade para temas (dark mode futuro)
Manutenção simplificada
Desafios Encontrados
⚠️ Cálculo de Porcentagens:
Necessidade de tratamento para divisão por zero
Arredondamento preciso para 2 casas decimais
⚠️ Responsividade Mobile:
Grid de transporte: 4 colunas desktop → 2 colunas mobile
Ajuste de fontes e espaçamentos
⚠️ Banco de Rotas:
Coleta de distâncias reais entre cidades brasileiras
Normalização de nomes (acentos, abreviações)
Lições Aprendidas
💡 Prompts Eficientes para Copilot:
javascript
123
💡 Validação Progressiva:
Valide inputs antes de cálculos
Mensagens de erro amigáveis
Fallback para rotas não encontradas
💡 Performance:
setTimeout para simular loading (UX)
Renderização eficiente com template literals
Event delegation para múltiplos inputs
📝 Licença
Este projeto é open source e está disponível sob a licença MIT.
👨‍ Desenvolvedor
Leandro Péricles
Strategic Architecture & AI Consultant | Campus Expert DIO
🔗 LinkedIn: linkedin.com/in/leandropericles
📧 Email: contato@leandropericles.dev
🌐 Portfolio: leandropericles.dev
🙏 Agradecimentos
DIO e CI&T: Pela oportunidade de aprendizado
GitHub Copilot: Por acelerar o desenvolvimento e ensinar novas abordagens
Comunidade Open Source e Instrutores do Bootcamp: Pelas aulas, referências e inspirações
🌱 "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."
Provérbio Chinês
Projeto desenvolvido como parte do desafio de aprendizagem ativa da DIO | Março de 2026