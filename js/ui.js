/**
 * UI - Funções de interface do usuário
 * Contém métodos para manipulação do DOM e renderização dos resultados
 */

const UI = {
    /**
     * Formata um número com separadores de milhar e decimais
     * @param {number} number - Número a ser formatado
     * @param {number} decimals - Número de casas decimais
     * @returns {string} Número formatado no padrão brasileiro
     */
    formatNumber: function(number, decimals = 2) {
        return number.toLocaleString('pt-BR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    },

    /**
     * Formata um valor como moeda brasileira (R$)
     * @param {number} value - Valor a ser formatado
     * @returns {string} Valor formatado como R$
     */
    formatCurrency: function(value) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    },

    /**
     * Mostra um elemento removendo a classe 'hidden'
     * @param {string} elementId - ID do elemento a ser mostrado
     */
    showElement: function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.remove('hidden');
        }
    },

    /**
     * Esconde um elemento adicionando a classe 'hidden'
     * @param {string} elementId - ID do elemento a ser escondido
     */
    hideElement: function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('hidden');
        }
    },

    /**
     * Rola a página até um elemento específico
     * @param {string} elementId - ID do elemento
     */
    scrollToElement: function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    /**
     * Renderiza os resultados principais da calculadora
     * @param {Object} data - Dados dos resultados
     * @returns {string} HTML completo dos resultados
     */
    renderResults: function(data) {
        const { origin, destination, distance, emission, mode, savings } = data;
        const modeData = CONFIG.TRANSPORT_MODES[mode];
        
        let html = `
            <div class="result-card">
                <div class="result-card__label">Rota</div>
                <div class="result-card__value">
                    <span>📍</span>
                    <span>${origin} → ${destination}</span>
                </div>
            </div>
            
            <div class="result-card">
                <div class="result-card__label">Distância</div>
                <div class="result-card__value">
                    <span>📏</span>
                    <span>${this.formatNumber(distance, 0)} km</span>
                </div>
            </div>
            
            <div class="result-card result-card--highlight">
                <div class="result-card__label">Emissão de CO₂</div>
                <div class="result-card__value">
                    <span class="result-card__icon">🌿</span>
                    <span>${this.formatNumber(emission)} kg</span>
                </div>
            </div>
            
            <div class="result-card">
                <div class="result-card__label">Meio de Transporte</div>
                <div class="result-card__value">
                    <span>${modeData.icon}</span>
                    <span>${modeData.label}</span>
                </div>
            </div>
        `;
        
        // Adiciona card de economia se o modo não for carro
        if (mode !== 'carro' && savings && savings.economizadoKg > 0) {
            html += `
                <div class="result-card result-card--highlight">
                    <div class="result-card__label">Economia vs Carro</div>
                    <div class="result-card__value">
                        <span class="result-card__icon">✅</span>
                        <span>${this.formatNumber(savings.economizadoKg)} kg</span>
                    </div>
                    <div class="result-card__subtext">
                        ${this.formatNumber(savings.porcentagem)}% menos emissões
                    </div>
                </div>
            `;
        }
        
        return html;
    },

    /**
     * Renderiza a comparação entre todos os modos de transporte
     * @param {Array} modesArray - Array de resultados de todos os modos
     * @param {string} selectedMode - Modo selecionado pelo usuário
     * @returns {string} HTML completo da comparação
     */
    renderComparison: function(modesArray, selectedMode) {
        // Encontra a maior emissão para usar como referência (100%)
        const maxEmission = Math.max(...modesArray.map(m => m.emission));
        
        let html = '';
        
        modesArray.forEach(modeData => {
            const modeConfig = CONFIG.TRANSPORT_MODES[modeData.mode];
            const isSelected = modeData.mode === selectedMode;
            
            // Determina a cor da barra baseada na porcentagem
            let barColorClass = 'comparison-item__bar-fill--green';
            if (modeData.percentageVsCarro > 100) {
                barColorClass = 'comparison-item__bar-fill--red';
            } else if (modeData.percentageVsCarro > 75) {
                barColorClass = 'comparison-item__bar-fill--orange';
            } else if (modeData.percentageVsCarro > 25) {
                barColorClass = 'comparison-item__bar-fill--yellow';
            }
            
            // Calcula largura da barra (mínimo 5% para visualização)
            const barWidth = Math.max(5, (modeData.emission / maxEmission) * 100);
            
            html += `
                <div class="comparison-item ${isSelected ? 'comparison-item--selected' : ''}">
                    <div class="comparison-item__header">
                        <div class="comparison-item__title">
                            <span>${modeConfig.icon}</span>
                            <span>${modeConfig.label}</span>
                        </div>
                        ${isSelected ? '<span class="comparison-item__badge">SELECIONADO</span>' : ''}
                    </div>
                    
                    <div class="comparison-item__stats">
                        <div class="comparison-item__stat">
                            <span class="comparison-item__stat-label">Emissão</span>
                            <span class="comparison-item__stat-value">
                                ${this.formatNumber(modeData.emission)} kg CO₂
                            </span>
                        </div>
                        <div class="comparison-item__stat">
                            <span class="comparison-item__stat-label">vs Carro</span>
                            <span class="comparison-item__stat-value">
                                ${this.formatNumber(modeData.percentageVsCarro)}%
                            </span>
                        </div>
                    </div>
                    
                    <div class="comparison-item__bar">
                        <div class="comparison-item__bar-fill ${barColorClass}" 
                             style="width: ${barWidth}%"></div>
                    </div>
                </div>
            `;
        });
        
        // Adiciona dica útil
        html += `
            <div class="comparison-tip">
                <strong>💡 Dica:</strong> 
                Escolher meios de transporte com menor emissão de CO₂ pode reduzir 
                significativamente seu impacto ambiental. Ônibus e bicicletas são 
                ótimas alternativas sustentáveis!
            </div>
        `;
        
        return html;
    },

    /**
     * Renderiza a seção de créditos de carbono
     * @param {Object} creditsData - Dados dos créditos de carbono
     * @returns {string} HTML completo dos créditos de carbono
     */
    renderCarbonCredits: function(creditsData) {
        const { credits, price } = creditsData;
        
        return `
            <div class="carbon-credits-content">
                <div class="credit-card">
                    <div class="credit-card__value">
                        ${this.formatNumber(credits, 4)}
                    </div>
                    <div class="credit-card__label">
                        Créditos de Carbono Necessários
                    </div>
                    <div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.9;">
                        1 crédito = 1000 kg CO₂
                    </div>
                </div>
                
                <div class="credit-card credit-price">
                    <div class="credit-card__label">Preço Estimado</div>
                    <div class="credit-price__value">
                        ${this.formatCurrency(price.average)}
                    </div>
                    <div class="credit-price__range">
                        (${this.formatCurrency(price.min)} - ${this.formatCurrency(price.max)})
                    </div>
                </div>
            </div>
            
            <div class="credit-card__info">
                <h3>O que são Créditos de Carbono?</h3>
                <p>
                    Créditos de carbono são certificados que representam uma tonelada de CO₂ 
                    que deixou de ser emitida na atmosfera. Eles são usados para compensar 
                    emissões de gases de efeito estufa através de projetos sustentáveis como 
                    reflorestamento, energia renovável e eficiência energética.
                </p>
                <button class="btn btn--success" style="margin-top: 1.5rem;">
                    🌱 Compensar Emissões
                </button>
            </div>
        `;
    },

    /**
     * Mostra estado de carregamento no botão
     * @param {HTMLElement} buttonElement - Elemento do botão
     */
    showLoading: function(buttonElement) {
        buttonElement.dataset.originalText = buttonElement.textContent;
        buttonElement.disabled = true;
        buttonElement.innerHTML = '<span class="spinner"></span> Calculando...';
    },

    /**
     * Remove estado de carregamento do botão
     * @param {HTMLElement} buttonElement - Elemento do botão
     */
    hideLoading: function(buttonElement) {
        buttonElement.disabled = false;
        buttonElement.textContent = buttonElement.dataset.originalText;
    }
};