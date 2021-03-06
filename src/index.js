import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (req, res) => res.status(200).send({text: 'hello'}))

app.listen(process.env.PORT || 9001)
