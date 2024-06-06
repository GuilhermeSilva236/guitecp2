import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Cliete from '#models/cliete'
import Funcionario from '#models/funcionario'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'


export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientes_id: number

  @column()
  declare funcionarios_id: number

  @belongsTo(() => Cliete, {
    foreignKey: 'clientes_id', 
  })
  declare cliente: BelongsTo<typeof Cliete>

  @belongsTo(() => Funcionario, {
    foreignKey: 'funcionarios_id', 
  })
  declare funcionario: BelongsTo<typeof Funcionario>

  @column()
  declare dt_vendas: Date

  @column()
  declare total_valor: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}