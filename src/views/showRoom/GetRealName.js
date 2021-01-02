import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './List.css'

const RealName = ({ userName }) => {

  const [realName, setRealName] = useState("")

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(response => {
        setRealName(response.data.name)
      })
  }, [userName])


  return (
    <div className="name-cell">
      <Link to={`/domain/${userName}`}>{realName}</Link>
    </div>
  )
}




export default RealName