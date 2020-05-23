import React, { Component } from 'react';
import Avatarlist from './Avatarlist';
import './Avatar.css'

    class Avatar extends Component{
     constructor(){
         super();
         this.state={
             name:"My first React project"
            
         }
     }
     handle(){
         this.setState({
             name:"Have sucessfully created React.js project"
         })
     }
    
        render(){
            const setstyle={
             backgroundColor:'skyblue',

            }
            const arraylist=[
                {
                id:1,
                name:"Akhil", 
                work:"React.js developer"
                },
                {
                    id:2, 
                    name:"Ghanshyam", 
                    work:"Tester"
                },
                {
                    id:3 ,
                    name:"Harsh Kedai" ,
                    work:"Android Developer"
                },
                {
                    id:4 ,
                    name:"Dhananjay Yadav",
                    work:"Full stack Developer"
                }
            ]
            const card=arraylist.map((avavtarcard,i)=>{
                return  <Avatarlist key={i}id={arraylist[i].id} name={arraylist[i].name}  work={arraylist[i].work} />
            })
            return(
                <div className="mainpage">
                <h1 style={setstyle}>{this.state.name}{}</h1>
              {card}
              <br></br>
             <button onClick={()=>this.handle()}>CHANGE</button>
             </div>
            )
        }
    }

export default Avatar;