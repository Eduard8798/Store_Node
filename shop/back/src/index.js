require('dotenv').config()

const express = require('express')

const sequelize = require('../Bdate/db')

const models = require('../models/models')

const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('../routes/index')

const errorHandler = require('../middleware/ErrorHandingMiddleware')

const app = express()
const path = require('path')

app.use(cors())

app.use(express.json())
app.use(fileUpload({}))

app.use(express.static(path.join(__dirname, '../static')));
/*const staticPath = path.join(__dirname, '../static');
console.log('Static files served from:', staticPath);

// Настройка статики
app.use('/static', express.static(staticPath));*/


app.use('/api',router)

//Обраюотка ошибок , последний Middleware
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('Hello, World! This is the main page.');
});


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log("Info server");
    next();
});


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (error){
        console.log(error)
    }
}

const PORT = process.env.PORT || 5011

start();

