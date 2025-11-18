import React from 'react'

function RegistrationForm() {
  return (
    <form style={{maxWidth: "200px", display: "inline-grid", padding: "20px"}}> 
      <h2>Register</h2>
      <label>Name</label>
      <input />

      <label>Email</label>
      <input />

      <label>Password</label>
      <input />

      <label>Confirm Password</label>
      <input />

      <button style={{margin: "25px"}}>Submit</button>
    </form>
  )
}

export default RegistrationForm
