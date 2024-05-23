const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
    {
        newsTitle : {
            type:String,
            required:true
        },
        newsID :{
            type:String,
            required:true,
            unique:true,
            index: true
        },
        newsArticle : {
            type:String,
            required:true
        },
        newsAuthor : {
            type:String,
            required:true
        },
        newsLocation: {
            type: String,
            required: true
          },
        newsCategory: {
            type: String,
            enum: ['Sports','Politics', 'Cinema','Economics'],
            required: true
          }
    },
    {
        collection : 'news'
    }
)

module.exports = mongoose.model('news', newsSchema)