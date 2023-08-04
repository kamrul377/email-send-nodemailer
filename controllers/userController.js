const sendEmail = require("../helpers/mail");
const { token } = require("../helpers/token");

const { User } = require("../models/userModel");
const clientUrl = "http://localhost:3002"


const processRegister = async (req, res) => {
    const { name, email, password } = req.body;

    const existUser = await User.exists({ email })

    if (existUser) {
        res.status(401).json({
            message: "user already exists.",
        })
        return
    }
    const newToken = token({ name, email, password }, "secretkey", {
        expiresIn: "1m"
    })


    const mailData = {
        email: email, // list of receivers
        subject: "Activate your account.",// plain text body
        html: ` 
            <h1> HI ${name} </h1>
            <h2> To activate your account click here..</h2>
            <a href="${clientUrl}/api/user/activate/${newToken}"> Click here </a>
        `, // html body

    }

     await sendEmail(mailData)

    res.status(201).json({
        message: `plesse check your email....your email is ${email}`
    })

}


module.exports = {
    processRegister
}