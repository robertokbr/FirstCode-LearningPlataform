import Knex from 'knex';

export async function up(knex:Knex){
return knex.schema.createTable('classes_schedule', table=>{
  table.increments('id').primary();
  table.decimal('cost').notNullable();
  table.string('subject').notNullable();
  table.integer('user_id')
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');


})
}

export async function down( knex:Knex){
return knex.schema.dropTable('classes_schedule');
}
