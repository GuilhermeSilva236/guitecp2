import Fornecedor from '#models/fornecedore';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class FornecedorSeeder extends BaseSeeder {
  public async run() {
  
    await Fornecedor.createMany([
      {
        nome: 'Metalúrgica Ferraz',
        endereco: 'Rua das Indústrias, 123',
        telefone: '(11) 1234-5678',
        email: 'contato@metalurgicaferraz.com.br',
        cnpj: '12.345.678/0001-90', 
      },
      {
        nome: 'Química Industrial S.A.',
        endereco: 'Avenida dos Produtos Químicos, 456',
        telefone: '(21) 9876-5432',
        email: 'contato@quimicaindustrial.com.br',
        cnpj: '98.765.432/0001-21'
      },
      {
        nome: 'Cerâmica Santana Ltda.',
        endereco: 'Parque Cerâmico, 789',
        telefone: '(31) 2345-6789',
        email: 'contato@ceramicasantana.com.br',
        cnpj: '45.678.901/0001-34'
      }
    ]);
  }
}
