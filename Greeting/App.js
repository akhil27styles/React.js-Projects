import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
   
  render() { 
   
    let t=new Date();
    t=t.getHours();
    let name='';
    const style={
      
    }
       if( t>=6 && t<12){
      
          name='Good Morning';
          style.color='green';
       }
       else if(t>=12 && t<=17){
   
           name='Good Afternoon';
           style.color='red';
       }
      else  if(t>17 && t<=20){
   
           name='Good Evening';
           style.color='blue';
       
       }
       else{
   
           name='Good Night';
           style.color='indianred';
       
       }
     
    return (
      <div className="content">
        <h2 >Hello Sir ,&nbsp;<span style={style}>{name}</span></h2>
      </div>
    )
  }
}



