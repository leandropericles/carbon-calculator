/**
 * App - Inicialização e manipulação de eventos
 * Ponto de entrada principal da aplicação
 */

(function() {
    /**
     * Inicializa a aplicação quando o DOM estiver pronto
     */
    document.addEventListener('DOMContentLoaded', function() {
        // 1. Preenche o datalist com cidades
        CONFIG.populateDatalist();
        
        // 2. Configura preenchimento automático de distância
        CONFIG.setupDistanceAutofill();
        
        // 3. Obtém referência do formulário
        const form = document.getElementById('calculator-form');
        
        // 4. Adiciona listener de submit
        form.addEventListener('submit', handleFormSubmit);
        
        // 5. Log de inicialização
        console.log('✅ Calculadora EcoTrip inicializada!');
    });

    /**
     * Manipula o envio do formulário
     * @param {Event} event - Evento de submit
     */
    function handleFormSubmit(event) {
        // Previne envio padrão do formulário
        event.preventDefault();
        
        // Obtém valores do formulário
        const origin = document.getElementById('origin').value.trim();
        const destination = document.getElementById('destination').value.trim();
        const distance = parseFloat(document.getElementById('distance').value);
        const transportMode = document.querySelector('input[name="transporte"]:checked').value;
        
        // Validação das entradas
        if (!origin || !destination || !distance || distance <= 0) {
            alert('⚠️ Por favor, preencha todos os campos corretamente!\n\n' +
                  '• Origem e destino devem ser informados\n' +
                  '• Distância deve ser maior que zero');
            return;
        }
        
        // Obtém botão de submit
        const submitBtn = document.getElementById('submit-btn');
        
        // Mostra loading
        UI.showLoading(submitBtn);
        
        // Esconde resultados anteriores
        UI.hideElement('results');
        UI.hideElement('comparison');
        UI.hideElement('carbon-credits');
        
        // Simula processamento com delay
        setTimeout(function() {
            try {
                // Cálculos
                const emission = Calculator.calcularEmissao(distance, transportMode);
                const carEmission = Calculator.calcularEmissao(distance, 'carro');
                const savings = Calculator.calcularEconomia(emission, carEmission);
                const allModes = Calculator.calcularTodosOsModos(distance);
                const credits = Calculator.calcularCreditosDeCarbono(emission);
                const priceEstimate = Calculator.estimarPrecoCredito(credits);
                
                // Prepara dados para renderização
                const resultsData = {
                    origin: origin,
                    destination: destination,
                    distance: distance,
                    emission: emission,
                    mode: transportMode,
                    savings: savings
                };
                
                const creditsData = {
                    credits: credits,
                    price: priceEstimate
                };
                
                // Renderiza resultados
                document.getElementById('results-content').innerHTML = 
                    UI.renderResults(resultsData);
                
                document.getElementById('comparison-content').innerHTML = 
                    UI.renderComparison(allModes, transportMode);
                
                document.getElementById('carbon-credits-content').innerHTML = 
                    UI.renderCarbonCredits(creditsData);
                
                // Mostra seções
                UI.showElement('results');
                UI.showElement('comparison');
                UI.showElement('carbon-credits');
                
                // Rola para resultados
                UI.scrollToElement('results');
                
                // Esconde loading
                UI.hideLoading(submitBtn);
                
            } catch (error) {
                console.error('❌ Erro ao calcular emissões:', error);
                alert('⚠️ Ocorreu um erro ao calcular. Por favor, tente novamente.');
                UI.hideLoading(submitBtn);
            }
        }, 1500); // Delay de 1.5 segundos para simular processamento
    }
})();