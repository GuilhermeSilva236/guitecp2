import Venda from '#models/venda';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class VendaSeeder extends BaseSeeder {
  public async run() {
  
    await Venda.createMany([
      {
        clientes_id: 101, 
        funcionarios_id: 201,
        dt_vendas: new Date(2024, 4, 14), 
        total_valor: 1500.00 
      },
      
      {
        clientes_id: 102, 
        funcionarios_id: 202, 
        dt_vendas: new Date(2024, 4, 15), 
        total_valor: 2800.00 
      },
      {
        clientes_id: 103, 
        funcionarios_id: 203, 
        dt_vendas: new Date(2024, 4, 16), 
        total_valor: 800.00 
      }
    ])
  }
}
