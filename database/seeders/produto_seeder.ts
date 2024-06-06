import Produto from '#models/produto';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class ProdutoSeeder extends BaseSeeder {
  public async run() {
    await Produto.createMany([
      {
        nome: 'Smartphone XYZ',
        descricao: 'Smartphone com tela de 6 polegadas e câmera de alta resolução',
        preco: 1500.00,
        quantidade: '100'
      },
      {
        nome: 'Notebook ABC',
        descricao: 'Notebook ultrabook com processador Intel Core i7 e SSD de 512GB',
        preco: 2500.00,
        quantidade: '50'
      },
      {
        nome: 'Fone de Ouvido Bluetooth',
        descricao: 'Fone de ouvido sem fio com cancelamento de ruído e bateria de longa duração',
        preco: 200.00,
        quantidade: '30'
      }
    ])
  }
}
