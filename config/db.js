


const mongoose = require('mongoose')


const url = process.env.DB_URL

mongoose.connect('mongodb+srv://test1:test1@cluster0.t7ucweb.mongodb.net/SMTP_SERVICES').then(() => {
    console.log("database connect".bgCyan.underline.bold)
}).catch((error) => {
    console.log('connectiong faild ' + error)
})
