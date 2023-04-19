const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDb = async()=>
{
    try {
            await mongoose.connect(db, {useNewUrlParser: true})
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = connectDb;
