import Funcionario from '#models/funcionario';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class FuncionarioSeeder extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        nome: 'Mariana Santos',
        cpf: '123.456.789-00',
        cargo: 'Diretora de Vendas',
        salario: 7000.00,
      },
      {
        nome: 'Gabriel Lima',
        cpf: '987.654.321-00',
        cargo: 'Engenheiro de Software',
        salario: 6000.00,
      },
      {
        nome: 'Carolina Oliveira',
        cpf: '111.222.333-44',
        cargo: 'Analista de Marketing',
        salario: 4500.00,
      }
    ])
  }
}
