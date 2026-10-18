import 'dotenv/config'
import { createClient } from '@libsql/client'

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = process.env

if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
  throw new Error(
    'Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN in server/.env',
  )
}

export const db = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
})

await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    first_name TEXT NOT NULL, 
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`)
