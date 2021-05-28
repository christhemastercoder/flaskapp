import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'



const Clock = () => {
  
  const [time, setTime] = useState(Date())

  useEffect(() => {
    setInterval(() => {
      setTime(Date())
    }, 1000)
  }, [])

  return(
    <p>{time}</p>
  )
}


function App() 
{
  const [currentTime, setCurrentTime] = useState(0)
  const [staff, setCurrentStaff] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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

        <Clock/>
      
        <p>Which staff member would you like to pull up?</p>
        <button>Member 1</button>
        <button>Member 2</button>
        <button>Member 3</button>
        
        <p>Staff Member 1: {isLoading ? "Loading..." : staff}</p>
      </header>
    </div>
  );
}

export default App;
