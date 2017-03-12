import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Dark High Templar' },
            { id: 12, name: 'Primal Roach' },
            { id: 13, name: 'Warmonger' },
            { id: 14, name: 'Siege Breaker' },
            { id: 15, name: 'DiamondBack' },
            { id: 16, name: 'Hammer Securities' },
            { id: 17, name: 'Brutalisk' },
            { id: 18, name: 'Spectre' },
            { id: 19, name: 'Death Head' },
            { id: 20, name: 'Colossus' }
        ];
        return { heroes };
    }
}
