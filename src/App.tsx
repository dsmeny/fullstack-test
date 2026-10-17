import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <form id="input-form">
          <div>
            <label>First name</label>
            <input id="fname" name="first" placeholder="first name" />
          </div>
          <div>
            <label>Last name</label>
            <input id="lname" name="last" placeholder="last name" />
          </div>
          <div>
            <label>Age</label>
            <input id="age" name="age" placeholder="your age" />
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
