import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send({ message: 'ok' })
})

app.post('/', (req, res) => {
  const body = req.body
  console.log('body: ', body)
  res.status(200).send({ messageBody: body })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
