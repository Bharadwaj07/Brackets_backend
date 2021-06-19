const nodemailer = require("nodemailer");

const sendMail = async(recipientList,message,subject) =>{
    const transporter = nodemailer.createTransport({
        // host: `${process.env.HOST}`,
        service: "Gmail",   
        // port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: `${process.env.EMAIL}`, // generated ethereal user
            pass:`${process.env.PASSWORD}`, // generated ethereal password
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    const info = await transporter.sendMail({
        from: `Brackets Application <${process.env.EMAIL}>`,
        to:recipientList,
        subject:subject,
        text:message,
    });

    return info;
}

module.exports = {
    sendMail
};
