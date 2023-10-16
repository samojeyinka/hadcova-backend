//IMPORTED EXPRESS MODULE
const express = require('express');
//ASSIGNED INVOKED EXPRESS TO VARIABLE "APP"
const app = express();
//IMPORT THE ROUTER
const tasks = require('./routes/tasks');
//MIDDLEWARE THAT ALLOWS TO ACCESS REQ.BODY
 app.use(express.json())
//IMPORT THE DATABASE
const connectDB = require('./db/connect')
//IMPORT DOTENV
require('dotenv').config()
//IMPORT notFound 
const notFound = require('./middleware/notFound');
//IMPPORT ERROR HANDLER MIDDLEWARE
const errorHandlerMiddleware = require('./middleware/errorHandler');
//IMPORT CATEGORIES ROUTE
const categories = require('./routes/categories');
//IMPORT THE EACHCATEGORY ROUTE
const eachCategory = require('./routes/eachCategory');
const cors = require('cors');
app.use(cors());


app.use('/api/v1/tasks', tasks);
app.use('/api/v1/categories', categories);
app.use('/api/v1', eachCategory);

 
//ROUTES THAT DOES'NT EXIST
app.use(notFound); 
//ERROR HANDLER
app.use(errorHandlerMiddleware); 
//  ASSIGNED THE PORT ADDRESS NUMBER TO THE VARIABLE "PORT"
const port = process.env.PORT || 2500;

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        //LISTEN THE PORT 
        app.listen(port, console.log(`The server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}




startServer();

