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


const NewPerson2 = () => {
  return(
    <div className = "flex-container">
      <div className = "inputFields">
        <h3>ID</h3>
        <h3>Name</h3>
        <h3>Position</h3>
        <h3>Age</h3>
      </div>

      <div className = "Input-Area">
        <form action="/newPerson" method = "post" className = "actualInput">
          <input type="number" id="id" name="id"/> <br></br>

          <input type="text" id="name" name="name"/> <br></br>

          <input type="text" id="position" name="position"/> <br></br>

          <input type="number" id="age" name="age"/>

          <div className = "submission">
          <button type = "submit" value="subimt">Submit</button>
          <button type = "reset" value = "reset">Reset</button>
        </div>

        </form>
      </div>
    </div>
  )
}

const SearchPerson = () => {
  const [name, setName] = React.useState('')
  const [empty, setEmpty] = React.useState(true)

  const handleSearch = (name) => {
    setName(name)
    if(name === '')
    {
      setEmpty(true)
      console.log('empty')
    }
    else
    {
      setEmpty(false)
      console.log('not empty')
    }
  }
  React.useEffect(() => {

  }, [])

  return(
    <div>
      <input type="text" name="name" placeholder = "Enter name here" onChange = {(event) => handleSearch(event.target.value)}></input>
      {/* {empty ? 
      (<Empty/>) : 
      (<NotEmpty name = {name}/>) 
      } */}
      <Empty/>
    </div>
  )
}
const Empty = () => {
  const [listOfStaff, setListOfStaff] = React.useState([])
  React.useEffect(() => 
  {
    fetch('/allPeople').then(response => response.text().then(res => console.log(res)))
   
  }, 
  [])
  return(
    // listOfStaff.map((row) => <li>{row}</li>)    
    <h1>Hi</h1>
  )
}
const NotEmpty = (name) => {

}



function App() 
{
  const [currentTime, setCurrentTime] = useState(0)
  const [staff, setCurrentStaff] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [staffNum, setStaffNum] = useState(1)
  const [wantTime, setWantTime] = useState("")

  

  return (
    <div className="App">
      <header className="App-header">
          <SearchPerson/>
          <NewPerson2/>
      </header>
    </div>
  );
}

export default App;
