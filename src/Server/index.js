import express from 'express'
import cors from 'cors'
import registerMail from './mail.js'

const app = express()
app.use(cors())
app.use(express.json())
const PORT =  8000

app.post("/",registerMail)
app.listen(PORT,()=>{
    console.log("Listening on port " + PORT)
})