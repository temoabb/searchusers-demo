import React from 'react'
// import { Link } from 'react-router-dom'
import ReposNames from './ReposNames'
import RealName from './RealName'
import './List.css'


const User = ({ avatar, name, type }) => {

  return (
    <div className="flex align_center">
      <div className="avatar_div cell flex align__center">
        <img className="avatar" src={avatar} alt={name} />
      </div>

      <RealName classname="name cell flex align__center" userName={name} />
      {/* name component here */}
      {/* <div className="name cell flex align__center">
        <Link to={`/domain/${name}`}>{name}</Link>
      </div> */}
      {/* ======================================= */}

      <div className="type cell flex align__center">{type}</div>

      <ReposNames userName={name} className="repos cell flex" />
    </div>
  )
}



export default User