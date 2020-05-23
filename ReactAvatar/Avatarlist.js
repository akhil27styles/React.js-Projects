import React from 'react'
// import Avatar from './Avatar'
import './Avatar.css'

const Avatarlist=(props)=>{
    return(
        <div className="avatarstyle">
            <div className="contain">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
    <h1>{props.name}</h1>
    <p>{props.work}</p>
    </div>
    </div>
    )
}
export default Avatarlist;