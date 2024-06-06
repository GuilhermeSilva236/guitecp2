import Cliente from '#models/cliete';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {
        nome: 'Ana Souza',
        endereco: 'Rua das Palmeiras, 456',
        telefone: '(11) 98765-1234',
        email: 'ana.souza@email.com',
        cpf: '987.654.321-00',
        data_de_nascimento: new Date(1988, 3, 15)
      },
      {
        nome: 'Pedro Costa',
        endereco: 'Avenida Central, 789',
        telefone: '(21) 99876-5432',
        email: 'pedro.costa@email.com',
        cpf: '123.456.789-10',
        data_de_nascimento: new Date(1995, 8, 20)
      },
      {
        nome: 'Mariana Oliveira',
        endereco: 'Praça das Flores, 123',
        telefone: '(31) 98765-4321',
        email: 'mariana.oliveira@email.com',
        cpf: '456.789.123-20',
        data_de_nascimento: new Date(1980, 5, 10)
      }
    ]);
  }
}
