/**
 * RoutesDB - Database de rotas brasileiras com distâncias
 * Objeto global contendo dados de rotas e métodos auxiliares
 */

const RoutesDB = {
    /**
     * Array de objetos de rota contendo origem, destino e distância em quilômetros
     * Cada rota representa uma conexão comum entre cidades brasileiras
     */
    routes: [
        // Conexões Principais entre Capitais
        { origin: "São Paulo, SP", destination: "Rio de Janeiro, RJ", distanceKm: 430 },
        { origin: "São Paulo, SP", destination: "Brasília, DF", distanceKm: 1015 },
        { origin: "Rio de Janeiro, RJ", destination: "Brasília, DF", distanceKm: 1148 },
        { origin: "São Paulo, SP", destination: "Belo Horizonte, MG", distanceKm: 586 },
        { origin: "Rio de Janeiro, RJ", destination: "Belo Horizonte, MG", distanceKm: 434 },
        { origin: "São Paulo, SP", destination: "Curitiba, PR", distanceKm: 408 },
        { origin: "São Paulo, SP", destination: "Porto Alegre, RS", distanceKm: 1120 },
        { origin: "São Paulo, SP", destination: "Salvador, BA", distanceKm: 1962 },
        { origin: "São Paulo, SP", destination: "Recife, PE", distanceKm: 2660 },
        { origin: "São Paulo, SP", destination: "Fortaleza, CE", distanceKm: 3120 },
        { origin: "Rio de Janeiro, RJ", destination: "Salvador, BA", distanceKm: 1650 },
        { origin: "Brasília, DF", destination: "Goiânia, GO", distanceKm: 209 },
        { origin: "Curitiba, PR", destination: "Florianópolis, SC", distanceKm: 300 },
        { origin: "Curitiba, PR", destination: "Porto Alegre, RS", distanceKm: 711 },
        { origin: "Florianópolis, SC", destination: "Porto Alegre, RS", distanceKm: 476 },
        { origin: "Salvador, BA", destination: "Recife, PE", distanceKm: 839 },
        { origin: "Recife, PE", destination: "Fortaleza, CE", distanceKm: 800 },
        { origin: "Fortaleza, CE", destination: "Natal, RN", distanceKm: 537 },
        { origin: "Belo Horizonte, MG", destination: "Brasília, DF", distanceKm: 741 },
        { origin: "Manaus, AM", destination: "Brasília, DF", distanceKm: 3490 },
        
        // Rotas Regionais - Estado de São Paulo
        { origin: "São Paulo, SP", destination: "Campinas, SP", distanceKm: 95 },
        { origin: "São Paulo, SP", destination: "Santos, SP", distanceKm: 72 },
        { origin: "São Paulo, SP", destination: "Sorocaba, SP", distanceKm: 87 },
        { origin: "São Paulo, SP", destination: "Ribeirão Preto, SP", distanceKm: 313 },
        { origin: "São Paulo, SP", destination: "São José dos Campos, SP", distanceKm: 94 },
        { origin: "Campinas, SP", destination: "Ribeirão Preto, SP", distanceKm: 233 },
        { origin: "Santos, SP", destination: "São José dos Campos, SP", distanceKm: 145 },
        
        // Rotas Regionais - Estado do Rio de Janeiro
        { origin: "Rio de Janeiro, RJ", destination: "Niterói, RJ", distanceKm: 13 },
        { origin: "Rio de Janeiro, RJ", destination: "Petrópolis, RJ", distanceKm: 68 },
        { origin: "Rio de Janeiro, RJ", destination: "Cabo Frio, RJ", distanceKm: 140 },
        { origin: "Rio de Janeiro, RJ", destination: "Angra dos Reis, RJ", distanceKm: 151 },
        { origin: "Rio de Janeiro, RJ", destination: "Volta Redonda, RJ", distanceKm: 133 },
        
        // Rotas Regionais - Minas Gerais
        { origin: "Belo Horizonte, MG", destination: "Ouro Preto, MG", distanceKm: 100 },
        { origin: "Belo Horizonte, MG", destination: "Juiz de Fora, MG", distanceKm: 268 },
        { origin: "Belo Horizonte, MG", destination: "Uberlândia, MG", distanceKm: 555 },
        { origin: "Belo Horizonte, MG", destination: "Montes Claros, MG", distanceKm: 422 },
        
        // Rotas Regionais - Sul
        { origin: "Porto Alegre, RS", destination: "Pelotas, RS", distanceKm: 247 },
        { origin: "Curitiba, PR", destination: "Londrina, PR", distanceKm: 385 },
        { origin: "Florianópolis, SC", destination: "Joinville, SC", distanceKm: 130 },
        { origin: "Curitiba, PR", destination: "Ponta Grossa, PR", distanceKm: 115 },
        
        // Rotas Regionais - Nordeste
        { origin: "Salvador, BA", destination: "Feira de Santana, BA", distanceKm: 103 },
        { origin: "Recife, PE", destination: "Caruaru, PE", distanceKm: 133 },
        { origin: "Fortaleza, CE", destination: "Juazeiro do Norte, CE", distanceKm: 542 },
        { origin: "Natal, RN", destination: "Mossoró, RN", distanceKm: 278 },
        
        // Rotas Regionais - Centro-Oeste
        { origin: "Brasília, DF", destination: "Caldas Novas, GO", distanceKm: 170 },
        { origin: "Goiânia, GO", destination: "Anápolis, GO", distanceKm: 53 },
        { origin: "Brasília, DF", destination: "Cuiabá, MT", distanceKm: 2057 }
    ],

    /**
     * Obtém todas as cidades únicas do banco de rotas
     * @returns {Array<string>} Array ordenado de nomes de cidades únicas
     */
    getAllCities: function() {
        // Cria um Set para armazenar cidades únicas
        const citiesSet = new Set();

        // Extrai cidades de origem e destino
        this.routes.forEach(route => {
            citiesSet.add(route.origin);
            citiesSet.add(route.destination);
        });

        // Converte Set para Array e ordena alfabeticamente
        return Array.from(citiesSet).sort();
    },

    /**
     * Encontra a distância entre duas cidades
     * Busca bidirecionalmente (origem->destino e destino->origem)
     * @param {string} origin - Nome da cidade de origem
     * @param {string} destination - Nome da cidade de destino
     * @returns {number|null} Distância em quilômetros se encontrada, null caso contrário
     */
    findDistance: function(origin, destination) {
        // Normaliza entradas: remove espaços e converte para minúsculas
        const normalizedOrigin = origin.trim().toLowerCase();
        const normalizedDestination = destination.trim().toLowerCase();

        // Busca rota em ambas as direções
        const route = this.routes.find(r => {
            const routeOrigin = r.origin.toLowerCase();
            const routeDestination = r.destination.toLowerCase();

            // Verifica se a rota corresponde em qualquer direção
            return (routeOrigin === normalizedOrigin && routeDestination === normalizedDestination) ||
                   (routeOrigin === normalizedDestination && routeDestination === normalizedOrigin);
        });

        return route ? route.distanceKm : null;
    }
};