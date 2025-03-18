const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        trim:true,
    },
    message:{
        type: String,
        required: true,
    },
    commentedAt:{
        type: Date,
        default: Date.now
    }
});

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        minLength: 5,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        minLength: 50,
        trim: true,
    },
    auther: {
        type: String,
        trim: true,
    },
    tags: {
        type: [String],
        default : [],
    },
    category: {
        type: String,
        default: 'General',
        trim: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    comments: [CommentSchema]
});

BlogPostSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);