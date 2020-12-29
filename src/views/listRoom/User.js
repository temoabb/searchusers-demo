import React from 'react'
// import { Link } from 'react-router-dom'
import ReposNames from './ReposNames'
import RealName from './RealName'
import './List.css'


const User = ({ avatar, name, type }) => {

  return (
    <div className="info-row">

      {/* avatar */}
      <div className="cell avatar-cell flex align-center">
        <img className="avatar-img" src={avatar} alt={name} />

      </div>
      {/* name */}
      <RealName userName={name} />

      {/* type */}
      <div className="type-cell cell flex align-center">{type}</div>

      {/* repos */}
      <ReposNames userName={name} />
    </div>
  )
}

export default User


{/* <div className="name-cell cell flex align-center">RealNames here</div> */ }
{/* <div className="repos-cell cell flex align-center">ReposNames here</div> */ }