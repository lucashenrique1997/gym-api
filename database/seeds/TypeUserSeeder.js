'use strict'

/*
|--------------------------------------------------------------------------
| TypeUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class TypeUserSeeder {
  async run () {
    await Database.table('type_users').insert({name: 'Administrador'});
    await Database.table('type_users').insert({name: 'Colaborador'});
    await Database.table('type_users').insert({name: 'Cliente'});
  }
}

module.exports = TypeUserSeeder
