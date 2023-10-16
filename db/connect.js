const mongoose  = require('mongoose')

//const connectionString ='mongodb+srv://samoje:samoje@cluster0.jebu46o.mongodb.net/hadcova?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(url, {
        //YOU DONT NEED TO PASS ANY OPTION HERE SO FAR YOUR MONGOOSE => V6
    })
}

module.exports = connectDB