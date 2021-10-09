import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App container">
      <h1>CRUD Application</h1>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <input type="text" name="movieName" className='form-control w-50' placeholder='Movie Name' />
        <input type="text" name="review" className='form-control w-50' placeholder='Review' />

        <button className='btn btn-success mt-3'>Submit</button>
      </div>
    </div>
  )
}

export default App
