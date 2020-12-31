import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './List.css'

const RealName = ({ userName }) => {

  const [realName, setRealName] = useState("")

  const getName = () => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(response => {
        setRealName(response.data.name)
      })
  }

  useEffect(getName, [])

  return (
    <div className="name-cell">
      <Link to={`/domain/${userName}`}>{realName}</Link>
    </div>
  )
}




export default RealName