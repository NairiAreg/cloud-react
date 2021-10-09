import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>

      <div className="d-flex flex-column align-items-center">
        <input type="text" name="movieName" />
        <input type="text" name="review" />
      </div>
    </div>
  )
}

export default App
