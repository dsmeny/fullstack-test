import { useState, useEffect } from 'react'
import Form from './components/Form'
import './App.css'
import type { FormValues } from './types'

async function sendFormData(formdata: FormValues) {
  const response = await fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formdata),
  })

  await response.json()
}

function App() {
  const [form, setForm] = useState<FormValues | null>(null)

  useEffect(() => {
    if (form) {
      sendFormData(form)
    }
  }, [form, setForm])

  const onSubmitHandler = (formValues: FormValues) => {
    setForm({ ...formValues })
  }

  return (
    <>
      <section id="center">
        <Form onSubmitHandler={onSubmitHandler} />
      </section>
      <section id="next-steps">
        <div id="docs"></div>
        <div id="social"></div>
      </section>
    </>
  )
}

export default App
