const { response } = require('express');
const nodemailer = require('nodemailer');
let _STATUSCODE = 200;


exports.addContactForm = (req, res, next) => {
    let params = Object.assign(req.params, req.body);
    addContactForm(params).then((result) => {
        res.status(_STATUSCODE).json(result);
    });
};

function addContactForm(objParam) {
    console.log(objParam);

    return new Promise((resolve, issue) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'websupport@alupac.com',
                pass: 'Alu@12345' //Replace with your email password
            }
        });

        const mailOptions = {
            from: objParam.uemail, //Replace with your email address
            to: 'shiv@spakcomm.com, ajay@spakcomm.com', //Replace with the recipient's email address
            subject: 'Alupac Enquiry',
            html: `
                <b>Name:</b> ${objParam.uname}, <br />
                <b>Email:</b> ${objParam.uemail}, <br />
                <b>Location:</b> ${objParam.Location}, <br />
                <b>Company:</b> ${objParam.companyname}, <br />
                <b>Commment:</b> ${objParam.comment}, <br />
                 `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                issue(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info.response);
            }
        });
    });



};