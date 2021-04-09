exports.up = async function(knex) {
    return await knex.schema
        .createTableIfNotExists('users', table => {
            table.increments()
            table.string('name').notNullable()
            table.string('email').notNullable()
            table.string('password').notNullable()
            table.timestamps(true, true)
        })
        .createTableIfNotExists('posts', table => {
            table.increments()
            table.integer('user_id').unsigned().notNullable()
            table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
            table.string('title').notNullable()
            table.text('body').notNullable()
            table.timestamps(true, true)
        })
        .createTableIfNotExists('tags', table => {
            table.increments()
            table.string('name').notNullable()
            table.timestamps(true, true)
        })
        .createTableIfNotExists('post_tag', table => {
            table.increments()
            table.integer('post_id').unsigned()
            table.foreign('post_id').references('id').inTable('posts').onDelete('CASCADE').onUpdate('CASCADE')
            table.integer('tag_id').unsigned()
            table.foreign('tag_id').references('id').inTable('tags').onDelete('CASCADE').onUpdate('CASCADE')
            table.timestamps(true, true)
        })
};

exports.down = async function(knex) {
    return await knex.schema
        .dropTableIfExists('post_tag')
        .dropTableIfExists('tags')
        .dropTableIfExists('posts')
        .dropTableIfExists('users')
};
