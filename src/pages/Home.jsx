import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h3>
        <div>
          Welcome to Home Page! 
        </div>
        <div>
          New User?
        </div>
      <Link to="/register">Click Here to Register</Link>
      </h3>
    </div>
  )
}

export default Home
