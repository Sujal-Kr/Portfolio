import express from 'express';

import registerMail from './mail.js'

const app = express()

const PORT =  8080

app.post("/",registerMail)
app.listen(PORT,()=>{
    console.log("Listening on port " + PORT)
})