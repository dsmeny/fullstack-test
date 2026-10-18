import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { db } from './db.js'

const app = express()

const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', async (req, res) => {
  try {
    const result = await db.execute("SELECT 'hello from server' AS message")
    res.status(200).json({ message: result.rows[0].message })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database query failed' })
  }
})

app.post('/', (req, res) => {
  const body = req.body
  console.log('body: ', body)
  res.status(200).send({ messageBody: body })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
