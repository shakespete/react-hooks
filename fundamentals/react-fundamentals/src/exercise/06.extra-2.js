// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  const [isValid, setIsValid] = useState(true)

  const handleChange = e => {
    const {value} = e.target
    const valid = value === value.toLowerCase()

    setIsValid(valid)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.username.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChange} />
        {isValid ? null : (
          <div
            role="alert"
            style={{color: 'red', fontSize: '12px', marginLeft: '80px'}}
          >
            'Username must be lower case'
          </div>
        )}
      </div>
      <button type="submit" disabled={!Boolean(isValid)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
