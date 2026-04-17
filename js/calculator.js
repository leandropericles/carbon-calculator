/**
 * Calculadora de Emissões de CO2
 * Contém todas as funções de cálculo para a calculadora EcoTrip
 */

const Calculator = {
    /**
     * Calcula a emissão de CO2 para uma distância e modo de transporte específicos
     * @param {number} distanceKm - Distância em quilômetros
     * @param {string} transportMode - Modo de transporte (bicicleta, carro, ônibus, caminhão)
     * @returns {number} Emissão de CO2 em kg, arredondada para 2 casas decimais
     */
    calcularEmissao: function(distanceKm, transportMode) {
        const emissionFactor = CONFIG.EMISSION_FACTORS[transportMode];
        const emission = distanceKm * emissionFactor;
        return Math.round(emission * 100) / 100;
    },

    /**
     * Calcula a emissão para todos os modos de transporte
     * @param {number} distanceKm - Distância em quilômetros
     * @returns {Array} Array de objetos com emissões de cada modo, ordenado por emissão
     */
    calcularTodosOsModos: function(distanceKm) {
        const results = [];
        
        // Calcula emissão para cada modo
        for (const mode in CONFIG.EMISSION_FACTORS) {
            const emission = this.calcularEmissao(distanceKm, mode);
            const carEmission = this.calcularEmissao(distanceKm, 'carro');
            
            // Calcula porcentagem em relação ao carro
            let percentageVsCarro = 0;
            if (carEmission > 0) {
                percentageVsCarro = (emission / carEmission) * 100;
            }
            
            results.push({
                mode: mode,
                emission: emission,
                percentageVsCarro: Math.round(percentageVsCarro * 100) / 100
            });
        }
        
        // Ordena por emissão (menor para maior)
        results.sort((a, b) => a.emission - b.emission);
        
        return results;
    },

    /**
     * Calcula a economia de CO2 em comparação com o carro
     * @param {number} emission - Emissão do modo selecionado
     * @param {number} baseEmission - Emissão do carro (base)
     * @returns {Object} Objeto com kg economizados e porcentagem
     */
    calcularEconomia: function(emission, baseEmission) {
        const savedKg = baseEmission - emission;
        const percentage = (savedKg / baseEmission) * 100;
        
        return {
            economizadoKg: Math.round(savedKg * 100) / 100,
            porcentagem: Math.round(percentage * 100) / 100
        };
    },

    /**
     * Calcula quantos créditos de carbono são necessários para compensar a emissão
     * @param {number} emissionKg - Emissão em kg de CO2
     * @returns {number} Número de créditos necessários (arredondado para 4 casas decimais)
     */
    calcularCreditosDeCarbono: function(emissionKg) {
        const credits = emissionKg / CONFIG.CARBON_CREDIT.KG_PER_CREDIT;
        return Math.round(credits * 10000) / 10000;
    },

    /**
     * Estima o preço dos créditos de carbono
     * @param {number} credits - Número de créditos
     * @returns {Object} Objeto com preço mínimo, máximo e médio
     */
    estimarPrecoCredito: function(credits) {
        const minPrice = credits * CONFIG.CARBON_CREDIT.PRICE_MIN_BRL;
        const maxPrice = credits * CONFIG.CARBON_CREDIT.PRICE_MAX_BRL;
        const avgPrice = (minPrice + maxPrice) / 2;
        
        return {
            min: Math.round(minPrice * 100) / 100,
            max: Math.round(maxPrice * 100) / 100,
            average: Math.round(avgPrice * 100) / 100
        };
    }
};