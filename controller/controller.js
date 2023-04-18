const nodemailer = require("nodemailer")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({ path: path.resolve(__dirname, '../.env') });

exports.index = async (req, res) => {
    res.render("index", { title: "Home Page"})
}

exports.about = async (req, res) => {
    res.render("about", { title: "About Page"})
}

exports.contact = async (req, res) => {
    res.render("contact", { title: "Contact Page"})
}

exports.submit = async(req, res) => {
    const f_name = req.body.firstn;
    const l_name = req.body.lastn;
    const email = req.body.email;
    const phone = req.body.phone;
    const services = req.body.services;
    const message = req.body.message;

    const messages = `<h1>Appointment for ${services}</h1>
    <h2>Hello I'm ${f_name + l_name}</h2>
    <p>${message}</p>`;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS,
        },
      });
      const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: services,
        html: messages
      }
    transport.sendMail(mailOptions,function(error, info){
        if(error){
            console.log(error)
        }else{
            console.log("Email Sent: " + info.response)
        }
        res.redirect("/")
    })
}