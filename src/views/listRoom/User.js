import React from 'react'
// import { Link } from 'react-router-dom'
import ReposNames from './ReposNames'
import RealName from './RealName'
import './List.css'


const User = ({ avatar, name, type }) => {

  return (
    <div className="flex align-center">
      <div className="cell avatar-cell flex align-center">
        <img className="avatar-img" src={avatar} alt={name} />
      </div>
      {/* <div className="name cell flex align__center">RealNames here</div> */}
      <RealName userName={name} />

      <div className="cell type-cell flex align-center">{type}</div>

      <ReposNames userName={name} />
    </div>
  )
}



export default User