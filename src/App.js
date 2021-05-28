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
  const [staff, setCurrentStaff] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [staffNum, setStaffNum] = useState(1)

    // useEffect(() => {
    //   fetch('/staff2')
    //       .then(response => {
    //         response.text().then(responseString => {
            
    //           setCurrentStaff(responseString)
    //           setIsLoading(false)
            
    //         })
    //   })
    // }, [])
    
    // const memberSearch = (props) => {
    //   fetch(`/staff${props}`).then(response => {
    //     response.text().then(responseString => {
    //       setCurrentStaff(responseString)
    //       setIsLoading(false)
    //     })
    //   })
    // }
  useEffect(() => {
      fetch("/staff" + staffNum).then(response => response.text().then(responseString => {
        setCurrentStaff(responseString)
        setIsLoading(false)
      }))
  }, [staffNum])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Clock/>
      
        <p>Which staff member would you like to pull up?</p>
        <button onClick = {() => setStaffNum(1)}>Member 1</button>
        <button onClick = {() => setStaffNum(2)}>Member 2</button>
        <button onClick = {() => setStaffNum(3)}>Member 3</button>
        
        <p>Staff Member: {isLoading ? "Loading..." : staff}</p>
        <p>{staffNum}</p>
      </header>
    </div>
  );
}

export default App;
