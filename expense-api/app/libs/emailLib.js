
'use strict';

const nodemailer = require('nodemailer');


let sendEmail = (sendEmailOptions) => {

    let account = {
        user: 'vnagasravani1998@gmail.com',
        pass: 'sravani1998' 
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: account.user, 
            pass: account.pass 
        }
    });

    let mailOptions = {
        from: sendEmailOptions.from,
        to: sendEmailOptions.to, // list of receivers
        subject: sendEmailOptions.subject, // Subject line
        html: sendEmailOptions.html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('errror while sending email  '+error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

let sendMails = (groupDetails , apiResponse)=>{
    for(let group of groupDetails.groupMembers)
    {
        let emailOptions = {
            from: 'expenseManagement@gmail.com',
            to: group.email,
            subject: 'notification',
            html: `<p>Hi ${group.userName}</p> <br> <p>The expense ${apiResponse.data.expenseName}  ${apiResponse.message} </p>
            <br> <br>
            From<br>
            Expense Management team`
        }
     sendEmail(emailOptions);
        
    }
}

module.exports = {
    sendEmail: sendEmail,
    sendMails:sendMails
  }
