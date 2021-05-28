import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'



// const Clock = () => {
//   const [time, setTime] = useState(Date())
//   return(
//     {time}
//   )
// }
function App() 
{
  const [currentTime, setCurrentTime] = useState(0)
  const [staff, setCurrentStaff] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  console.log(staff)
useEffect(() => {
  fetch('/staff2')
      .then(response => {
        response.text().then(responseString => {
         
          setCurrentStaff(responseString)
          setIsLoading(false)
         
        })
  })
}, [])
    
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <p>The current time is {currentTime}</p> */}
        
        <p>Staff Member 1: {isLoading ? "Loading..." : staff}</p>
      </header>
    </div>
  );
}

export default App;
