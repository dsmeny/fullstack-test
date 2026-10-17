import { useRef } from 'react'
import type { FormValues } from '../types'

interface FormProps {
  onSubmitHandler: (values: FormValues) => void
}

function Form({ onSubmitHandler }: FormProps) {
  const fnameRef = useRef<HTMLInputElement>(null)
  const lnameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)

  function submitHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const firstName = fnameRef.current?.value || ''
    const lastName = lnameRef.current?.value || ''
    const age = Number(ageRef.current?.value) || 0

    const formValues = {
      firstName,
      lastName,
      age,
    }

    onSubmitHandler(formValues)
  }

  return (
    <form id="input-form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="first">First name</label>
        <input
          id="fname"
          name="first"
          placeholder="first name"
          ref={fnameRef}
        />
      </div>
      <div>
        <label htmlFor="last">Last name</label>
        <input id="lname" name="last" placeholder="last name" ref={lnameRef} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input id="age" name="age" placeholder="your age" ref={ageRef} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form
