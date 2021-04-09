const { Model } = require ('objection')

class Post extends Model {
    static get tableName() {
        return 'posts'
    }

    static get relationMappings () {
        const Tag = require ('./Tag.model')
        const User = require ('./User.model')
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from:   'posts.user_id',
                    to:     'users.id'
                }
            },

            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'posts.id',
                    through: {
                        // post_tag is the join table.
                        from : 'post_tag.post_id',
                        to   : 'post_tag.tag_id'
                    },
                    to: 'tags.id'
                }
            }
        }        
    }

}

module.exports = Post