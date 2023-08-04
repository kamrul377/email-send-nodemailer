

const app = require('./app')
require('dotenv').config()
const color = require('colors')



app.listen(process.env.PORT, () => {
    console.log(`running at http://localhost:${process.env.PORT}`.yellow.underline.bgGreen)
})