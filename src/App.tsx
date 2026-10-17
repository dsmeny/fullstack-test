import { useState, useEffect } from 'react'
import Form from './components/Form'
import './App.css'
import type { FormValues } from './types'

function sendFormData() {
  console.log('send form data')
}

function App() {
  const [form, setForm] = useState<FormValues | null>(null)

  useEffect(() => {
    if (form) {
      sendFormData()
    }
  }, [form, setForm])

  const onSubmitHandler = (formValues: FormValues) => {
    console.log(formValues)
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
