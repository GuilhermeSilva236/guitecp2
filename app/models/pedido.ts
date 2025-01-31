import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cliete from './cliete.js'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientes_id: number

  @belongsTo(() => Cliete, {
    foreignKey: 'clientes_id', 
  })
  declare cliente: BelongsTo<typeof Cliete>


  @column()
  declare dt_pedido: Date

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}