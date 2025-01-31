import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class cliete extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare nome: string
  @column()
  declare endereco: string
  @column()
  declare telefone: string
  @column()
  declare email: string
  @column()
  declare cpf: string
  @column()
  declare data_de_nascimento: Date


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}