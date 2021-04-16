
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", table=>{
    table.increments("project_id") // primary key
    table.string("project_name", 30).notNullable()
    table.string("project_description", 150)
    table.boolean("project_completed").defaultTo(0)
  })
  .createTable("resources", table=>{
      table.increments("resource_id")
      table.string("resource_name", 30).notNullable().unique()
      table.string("resource_description", 150)
  })
  .createTable("tasks", table=>{
      table.increments("task_id")
      table.string("task_description", 30).notNullable()
      table.string("task_notes", 150)
      table.boolean("task_completed").defaultTo(0)
      table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
  })
  .createTable("project_resources", table=>{
      table.increments("project_resource_id")
      table.integer("task_id")
        .unsigned()
        .notNullable()
        .references("task_id")
        .inTable("tasks")
      table.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
  })
    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")

};
