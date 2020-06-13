import React from 'react'
import './App.css'
function Header(props) {
    return (
    <div className="jumbotron">
  <h1 className="display-10">Joke App!</h1>
  {/* <TextField id="standard-basic" label="First Name" value={first} onChange={(e)=>e.setfirst(e.target.value)}/>
  <br/>
  <TextField id="standard-basic" label="Last Name" value={last} onChange={(e)=>e.setlast(e.target.value)}/>
  <hr className="my-4"/> */}
  <button className="btn btn-primary btn-lg" href="#" onClick={()=>props.jokecall()}>Click</button>
  
  <p>Click The Button To Fetch The Jokes✔️</p>
  </div>
       
    )
}

export default Header