import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            { id: 1, name: 'Moradia', description: 'Pagamento de contas da casa' },
            { id: 2, name: 'Moradia2', description: 'Pagamento de contas da casa' },
            { id: 3, name: 'Moradia3', description: 'Pagamento de contas da casa' },

        ];

        return { categories }
    }
}