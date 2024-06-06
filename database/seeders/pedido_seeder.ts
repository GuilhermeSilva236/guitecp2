import Pedido from '#models/pedido';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class PedidoSeeder extends BaseSeeder {
  public async run() {
   
    await Pedido.createMany([
      {
        clientes_id: 101, 
        dt_pedido: new Date(2024, 4, 6), 
        status: 'Processando'
      },
      {
        clientes_id: 102, 
        dt_pedido: new Date(2024, 4, 7), 
        status: 'Enviado'
      },
      {
        clientes_id: 103, 
        dt_pedido: new Date(2048, 4, 8),  
        status: 'Entregue'
      }
    ])
  }
}
