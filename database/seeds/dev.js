
exports.seed = async function(knex) {
  // await knex.raw('TRUNCATE TABLE "users" CASCADE') 
  // await knex.raw('TRUNCATE TABLE "posts" CASCADE')
  // await knex.raw('TRUNCATE TABLE "tags" CASCADE')
  // await knex.raw('TRUNCATE TABLE "post_tag" CASCADE')

  // Deletes ALL existing entries
  await knex('users').del()
    .then(async function () {
      // Inserts seed entries
      await knex('users').insert([
        {id: 1, name:"User One",   email: 'user@one.email', password: '123'},
        {id: 2, name:"User Two",   email: 'user@two.email', password: '123'},
        {id: 3, name:"User Three", email: 'user@three.email', password: '123'}
      ])

      // Inserts seed entries
      await knex('posts').insert([
        {id: 1, title: 'title One of User One',   body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 1},
        {id: 2, title: 'title One of User Two',   body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 2},
        {id: 3, title: 'title One of User Three', body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 3},
        {id: 4, title: 'title Two of User One',   body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 1},
        {id: 5, title: 'title Two of User Two',   body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 2},
        {id: 6, title: 'title Two of User Three', body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 3},
        {id: 7, title: 'title Three of User One',   body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 1},
        {id: 8, title: 'title Three of User Two',   body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 2},
        {id: 9, title: 'title Three of User Three', body: "asd sdljfk kks sisf llskdfjlsi skdjsk lskjfkll dkslfj", user_id: 3}
      ])

      await knex('tags').insert([
        {id: 1, name: 'RED'},
        {id: 2, name: 'GREEN'},
        {id: 3, name: 'BLUE'}
      ])

      await knex('post_tag').insert([
        {id: 1, post_id:1, tag_id:1},
        {id: 2, post_id:1, tag_id:2},
        {id: 3, post_id:1, tag_id:3},
        {id: 4, post_id:2, tag_id:1},
        {id: 5, post_id:2, tag_id:2},
        {id: 6, post_id:2, tag_id:3},
        {id: 7, post_id:3, tag_id:1},
        {id: 8, post_id:3, tag_id:2},
        {id: 9, post_id:3, tag_id:3},
      ])

      
    })
}
