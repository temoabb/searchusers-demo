import React from 'react'
import UserShortInfo from './UserShortInfo'
import GreenFlat from './GreenFlat'
import './PigmentUsers.css'

const UsersDisplay = ({ roomstyle, showflat, data, formation }) => {
  return (
    <div className={roomstyle}>
      <GreenFlat className={showflat} />
      {data.map(item => <UserShortInfo
        formation={formation}
        key={item.id}
        avatar={item['avatar_url']}
        name={item['login']}
        type={item['type']} />)}

    </div>
  )
}


export default UsersDisplay