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

const NewPerson = () => {
  return(
    <div>
      <p>Add a person</p>
      <form action="/newPerson" method="post">
        <label for="name">Full Name: </label>
        <input type="text" id = "name" name="name"/><br></br>
        
        <label for="age">Age: </label>
        <input type="number" id="age" name="age"/> <br></br>

        <label for="job">Position: </label>
        <input type = "text" id = "job" name = "job"/><br></br>

        <label for="id">ID: </label>
        <input type = "number" id="id" name = "id"/><br></br>

        <input type = "reset" value = "reset"/>
        <input type="submit" value="Submit"></input>
      </form>

    </div>
  )
}

// const DelPerson = () => {
//   return(
//     <div>
//       <p>Enter the ID of the person you want removed from the database</p>
//       <form action="/delPerson" method="delete">
//         <label for="id">ID: </label>
//         <input type="number" id="id" name="id"/>
//         <input type="submit" value="Submit"/>
//       </form>
//     </div>
//   )
// }

function App() 
{
  const [currentTime, setCurrentTime] = useState(0)
  const [staff, setCurrentStaff] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [staffNum, setStaffNum] = useState(1)
  const [wantTime, setWantTime] = useState("")

  
  useEffect(() => {
      fetch("/staff" + staffNum).then(response => response.text().then(responseString => {
        setIsLoading(false)
        setCurrentStaff(responseString)
      }))
  }, [staffNum])




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Clock/>
      
        <NewPerson/>
        
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
