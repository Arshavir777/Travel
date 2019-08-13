import nodemailer from "nodemailer"

exports.sendMessage = async (data) => {

    let testAccount = await nodemailer.createTestAccount()
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: `${process.env.MAIL_UN}`,
            pass: `${process.env.MAIL_PW}`
        }
    });

    let info = await transporter.sendMail({
        from: `"${data.name}" 👻 <${data.email}>`,// sender address
        to: process.env.MAIL_UN, //process.env.SERVICE_MAIL,
        subject: data.subject,
        text: "Message from customer ✔",
        html: `<h4>${data.message}</h4>`
    })
        .then(res     => res)
        .catch(errors => errors)

}
