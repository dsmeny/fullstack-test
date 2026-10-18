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

app.post('/', async (req, res) => {
  const { firstName, lastName, age } = req.body ?? {}

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'first name and last name required' })
  }
  try {
    const result = await db.execute({
      sql: `INSERT INTO users (first_name, last_name, age) 
            VALUES(?,?,?) 
            RETURNING id, first_name, last_name, age, created_at`,
      args: [firstName, lastName, age],
    })
    res.status(201).send({ message: result.rows[0] })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database query failed' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
