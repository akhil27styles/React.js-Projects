import React, { useEffect,useState } from 'react'
import Header from './Header'
import axios from 'axios';
import './App.css'
function App() {
const [joke, setjoke] = useState("loading");
const jokecall=()=>{
  axios.get(`http://api.icndb.com/jokes/random?firstName=john&amp;lastName=Doe`).then(response=>{
    console.log(response.data.value.joke)
    setjoke(response.data.value.joke)
    })
}

useEffect(()=>{
jokecall();
},[])
  return (
    <div>
      <Header jokecall={jokecall}/>
<h2>{joke}😜😝 </h2> 

    </div>
  )
}

export default App
