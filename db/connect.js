const mongoose  = require('mongoose')



const connectDB = (url) => {
    return mongoose.connect(url, {
        //YOU DONT NEED TO PASS ANY OPTION HERE SO FAR YOUR MONGOOSE => V6
    })
}

module.exports = connectDB