import React from 'react'
import GetReposNames from './GetReposNames.jsx'
import RealName from './GetRealName.jsx'
import './PigmentUsers.css'


const UserShortInfo = ({ formation, avatar, name, type }) => {
  return (

    <div className={formation}>
      <div className="avatar-cell">
        <img className="avatar-img" src={avatar} alt={name} />
      </div>
      <RealName userName={name} />
      <div className="type-cell">{type}</div>
      <GetReposNames userName={name} />
    </div>

  )
}

export default UserShortInfo
