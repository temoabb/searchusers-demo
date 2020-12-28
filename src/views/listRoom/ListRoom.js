import React from 'react'
import User from './User'
import './List.css'

const Listroom = ({ data, amount, repos }) => {
  return (
    <div className="listroom">
      <div className="flat">
        <div className="flat-first">AVATAR</div>
        <div className="flat-second">NAME</div>
        <div className="flat-third">TYPE</div>
        <div className="flat-fourth"> FIRST 3 REPOS</div>
      </div>
      {data.map(item => <User
        key={item.id}
        avatar={item['avatar_url']}
        name={item['login']}
        type={item['type']}
      />)}

    </div>
  )
}


export default Listroom