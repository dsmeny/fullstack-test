import { useState, useEffect } from 'react'
import Form from './components/Form'
import './App.css'
import type { FormValues } from './types'
import Users from './components/Users'

const DB_URL = 'http://localhost:3001'

function App() {
  const [users, setUsers] = useState([])

  async function getDbUsers() {
    const response = await fetch(DB_URL)
    const dbUsers = await response.json()
    setUsers(dbUsers.message)
  }

  async function sendFormData(formdata: FormValues) {
    try {
      const response = await fetch(DB_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      })

      await response.json()

      getDbUsers()
    } catch (err) {
      console.error({ error: err })
    }
  }

  const onSubmitHandler = (formValues: FormValues) => {
    sendFormData(formValues)
  }

  useEffect(() => {
    getDbUsers()
  }, [])

  return (
    <>
      <section id="center">
        <div className="container">
          <div className="pane pane-form">
            <h2>Add user</h2>
            <Form onSubmitHandler={onSubmitHandler} />
          </div>
          <div className="pane pane-output">
            <h2>Users</h2>
            <ul className="user-list">
              {/* map users here: one <li className="user-row"> per user */}
              {users ? (
                users.map((u) => <Users user={u} key={u.id} />)
              ) : (
                <span>no users</span>
              )}
            </ul>
          </div>
        </div>
      </section>
      <section id="next-steps">
        <div id="docs"></div>
        <div id="social"></div>
      </section>
    </>
  )
}

export default App
