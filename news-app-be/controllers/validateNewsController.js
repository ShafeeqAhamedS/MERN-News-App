const newsModel = require('../models/newsModel')

const getNewsID = async(request, response) => {
    const {newsID} = request.body
    try{
        const newsToBeEdited = await newsModel.findOne({newsID:newsID})
        response.status(200).json(newsToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getNewsID}