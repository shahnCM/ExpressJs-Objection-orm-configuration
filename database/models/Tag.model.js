const { Model } = require ('objection')

class Tag extends Model {
    static get tableName() {
        return 'tags'
    }

    static get relationMappings () {
        const Post = require ('./Post.model')
        return {
            posts: {
                relation: Model.ManyToManyRelation,
                modelClass: Post,
                join: {
                    from: 'tags.id',
                    through: {
                        // post_tag is the join table.
                        from : 'post_tag.tag_id',
                        to   : 'post_tag.post_id'
                    },
                    to: 'posts.id'
                }
            }
        }    
    }    

}

module.exports = Tag