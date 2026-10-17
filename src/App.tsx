import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import type { FormValues } from './types'

function App() {
  const [form, setForm] = useState<FormValues>({
    firstName: '',
    lastName: '',
    age: 0,
  })

  const onSubmitHandler = (formValues: FormValues) => {
    console.log(formValues)
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
