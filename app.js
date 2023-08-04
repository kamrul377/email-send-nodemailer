


const express = require("express")
const app = express()
const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
require('./config/db')

app.get('/', (req, res) => {
    res.send('hello ')
})

app.use('/api/user', userRouter)




app.use((req, res, next) => {
    res.status(499).json({
        error: "client error"
    })
})
app.use((err, req, res, next) => {
    console.error('Global Error Handler:', err);
    res.status(500).json({ error: 'Something went wrong on the server.' });
});

module.exports = app

