import { useState, } from 'react'


import './App.css'
import axios from 'axios'

function App() {
  const [comments, setComments] = useState([])
  const title = 'Welcome to the Commentes'
  const handleClick = (e) => {
    console.log(e)
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments (response.data)
      })
      .catch ((error) => {
        console.log(error)
      })
  }

  return (
    <>
    <div className='container'>
      <div className='header'>
        <h1> {title}</h1>
      </div>
      <div className='button'>
        <button className='button-click' onClick={handleClick}>Lunch</button>
      </div>
      <div className='content-comments'>
        <div className='mesages'>

        </div>
        
      </div>
    </div>
    
     
    </>
  )
}

export default App
