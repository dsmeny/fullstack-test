import { useRef } from 'react'
import './App.css'

function App() {
  const fnameRef = useRef<HTMLInputElement>(null)
  const lnameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)

  function onSubmitHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const firstName = fnameRef.current?.value || ''
    const lastName = lnameRef.current?.value || ''
    const age = ageRef.current?.value || 0

    console.log({ firstName, lastName, age })
  }

  return (
    <>
      <section id="center">
        <form id="input-form" onSubmit={onSubmitHandler}>
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
            <input
              id="lname"
              name="last"
              placeholder="last name"
              ref={lnameRef}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" name="age" placeholder="your age" ref={ageRef} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <section id="next-steps">
        <div id="docs"></div>
        <div id="social"></div>
      </section>
    </>
  )
}

export default App
