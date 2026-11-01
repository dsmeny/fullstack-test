import { useRef } from 'react'

function Users({ user, deleteHandler }) {
  const { first_name: first, last_name: last, age, id } = user

  const firstRef = useRef(null)
  const lastRef = useRef(null)
  const ageRef = useRef(null)

  function handleUpdate() {}

  return (
    <li className="user-row">
      <div className="user-info">
        <input
          id="first"
          className="user-name"
          type="text"
          defaultValue={first}
          ref={firstRef}
          aria-label="First name"
          disabled={true}
        />
        <input
          id="second"
          className="user-name"
          type="text"
          defaultValue={last}
          ref={lastRef}
          aria-label="Last name"
          disabled={true}
        />
        <input
          id="age"
          className="user-meta"
          type="number"
          defaultValue={age}
          ref={ageRef}
          aria-label="Age"
          disabled={true}
        />
      </div>
      <div className="user-actions">
        <button type="button" className="btn-update" onClick={handleUpdate}>
          Update
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => {
            deleteHandler(id)
          }}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Users
