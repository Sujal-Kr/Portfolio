import  nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()
import mailGen from 'mailgen';

const config = {
    host: 'smtp.gmail.com',
    port:587,
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASS
    }
}

const transporter = nodemailer.createTransport(config);

const mailGenerator = new mailGen({
    theme:"default",
    product:{
        name:"Prortfolio_Sujal ",
        link:"https://mailgen.js"
    }
})



const registerMail = async (req, res)=>{
    console.log(req.body);
    const {name,mail,msg}=req.body
    // Body of the email request
    let email = {
        body:{
            name:name,
            intro: `Yoo What is Up.You Got a mail from nigger ${mail} regarding ${msg}`,
        }
    }

    

    let emailBody = mailGenerator.generate(email)
    

    const message = {
        from:process.env.EMAIL,
        to:email,
        subject : "Appointment",
        html:emailBody
    }

    

    // Send Mail
    try{

        const info = await transporter.sendMail(message)
        console.log(info.messageId)
        res.status(200).json({success:true,message:info.messageId})

    }
    catch(err){
        console.error(err.message)
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

export default registerMail