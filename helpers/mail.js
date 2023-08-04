


const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "mdkamrulislam9810@gmail.com",
        pass: 'rxnypehvuphehixc'
    }
});


const sendEmail = async (mailData) => {

        await transporter.sendMail({
        from: "mdkamrulislam9810@gmail.com",
        to: mailData.email,
        subject: mailData.subject, // Subject line
        html: mailData.html,
    }).then(() => {
        console.log("send success")
    }).catch((error) => {
        console.log(error)
    })

    return

}

module.exports = sendEmail