const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String
    },
    thumbnail: {
        type: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    meta: {
        votes: {
            type: Number
        }
    }
});

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    permissions: {
        type: String
    },
    bio: {
        type: String
    },
    facebook_url: {
        type: String
    },
    twitter_url: {
        type: String
    },
    linkedin_url: {
        type: String
    },
    instagram_url: {
        type: String
    },
    images: {
        small: {
            type: String
        },
        medium: {
            type: String
        },
        large: {
            type: String
        }
    },
    articles: [ArticleSchema],
    meta: {
        rank: {
            type: Number
        },
        favorites: {
            type: Number
        },
        signup_date: {
            type: Date,
            default: Date.now
        }
    }
})

const User = mongoose.model('users', UserSchema);
module.exports = User;