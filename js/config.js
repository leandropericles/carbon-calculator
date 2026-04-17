/**
 * Configurações globais da Calculadora EcoTrip
 * Contém fatores de emissão, modos de transporte e configurações de créditos de carbono
 */

const CONFIG = {
    /**
     * Fatores de emissão de CO2 por quilômetro para cada modo de transporte
     * Valores em kg de CO2 por km
     */
    EMISSION_FACTORS: {
        bicicleta: 0,
        carro: 0.12,
        ônibus: 0.089,
        caminhão: 0.96
    },

    /**
     * Metadados dos modos de transporte para exibição na interface
     */
    TRANSPORT_MODES: {
        bicicleta: {
            label: "Bicicleta",
            icon: "🚲",
            color: "#10b981"
        },
        carro: {
            label: "Carro",
            icon: "🚗",
            color: "#3b82f6"
        },
        ônibus: {
            label: "Ônibus",
            icon: "🚌",
            color: "#f59e0b"
        },
        caminhão: {
            label: "Caminhão",
            icon: "🚚",
            color: "#ef4444"
        }
    },

    /**
     * Configurações de créditos de carbono
     */
    CARBON_CREDIT: {
        KG_PER_CREDIT: 1000, // 1 crédito = 1000 kg CO2
        PRICE_MIN_BRL: 50,   // Preço mínimo por crédito
        PRICE_MAX_BRL: 150   // Preço máximo por crédito
    },

    /**
     * Preenche o datalist com as cidades disponíveis
     */
    populateDatalist: function() {
        const cities = RoutesDB.getAllCities();
        const datalist = document.getElementById('cities-list');
        
        // Limpa opções existentes
        datalist.innerHTML = '';
        
        // Cria opção para cada cidade
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            datalist.appendChild(option);
        });
    },

    /**
     * Configura o preenchimento automático da distância
     */
    setupDistanceAutofill: function() {
        const originInput = document.getElementById('origin');
        const destinationInput = document.getElementById('destination');
        const distanceInput = document.getElementById('distance');
        const manualCheckbox = document.getElementById('manual-distance');
        const helpText = document.getElementById('distance-help');

        /**
         * Tenta encontrar e preencher a distância automaticamente
         */
        const tryFillDistance = () => {
            const origin = originInput.value.trim();
            const destination = destinationInput.value.trim();

            if (origin && destination) {
                const distance = RoutesDB.findDistance(origin, destination);
                
                if (distance !== null) {
                    distanceInput.value = distance;
                    distanceInput.readOnly = true;
                    helpText.textContent = '✓ Distância encontrada automaticamente!';
                    helpText.classList.add('success');
                } else {
                    distanceInput.value = '';
                    helpText.textContent = 'Rota não encontrada. Insira a distância manualmente ou marque a caixa abaixo.';
                    helpText.classList.remove('success');
                }
            }
        };

        // Adiciona listeners para mudança nos campos de origem e destino
        originInput.addEventListener('change', tryFillDistance);
        destinationInput.addEventListener('change', tryFillDistance);

        // Listener para checkbox de distância manual
        manualCheckbox.addEventListener('change', function() {
            if (this.checked) {
                distanceInput.readOnly = false;
                distanceInput.focus();
                helpText.textContent = 'Digite a distância em quilômetros';
                helpText.classList.remove('success');
            } else {
                distanceInput.readOnly = true;
                tryFillDistance();
            }
        });
    }
};