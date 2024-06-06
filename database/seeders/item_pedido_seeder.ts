import ItemPedido from '#models/item_pedido';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class ItemPedidoSeeder extends BaseSeeder {
  public async run() {
    await ItemPedido.createMany([
      {
        produtos_id: 101, 
        pedidos_id: 201, 
        quantidade: '2',
        preco_unitario: 50.00
      },
      {
        produtos_id: 102, 
        pedidos_id: 201, 
        quantidade: '1',
        preco_unitario: 20.00
      },
      {
        produtos_id: 103, 
        pedidos_id: 202, 
        quantidade: '3',
        preco_unitario: 150.00
      }
    ])
  }
}
