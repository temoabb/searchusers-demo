import React, { useState, useEffect } from 'react'
import axios from 'axios'

const User = ({ match }) => {
  const [userData, setData] = useState(null)

  useEffect(() => {
    console.log('match', match)
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get(`https://api.github.com/users/${match.params.user}`)
      .then(response => {
        console.log("response data >", typeof response.data, response.data)
        setData(response.data)
      })
  }

  return (
    <div>
      {userData
        ? <img src={userData['avatar_url']} />
        : <h1>User not found!</h1>}

    </div>
  )
}




export default User