import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FullProfile from './fullProfile/FullProfile'
import './fullProfile/FullProfile.css'



const UserInDetails = ({ match }) => {
  const [userData, setData] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${match.params.user}`)
      .then(response => {
        if (response.data) {
          setData(response.data)
          setLoading(false)
        }
      })
      .catch(error => {
        setLoading(false)
      })
  }, [match])


  return (
    <div className="figuresContainer">
      {loading && <div className="waiting"><h1>Wait.. we're searching...</h1></div>}

      {!loading && userData && <FullProfile
        className="gotData"
        login={userData.login}
        avatar_url={userData.avatar_url}
        type={userData.type}
        name={userData.name}
        location={userData.location}
        twitter_username={userData.twitter_username}
        public_repos={userData.public_repos}
        followers={userData.followers} />}

      {!loading && !userData && <FullProfile className="noData" />}
    </div>
  )
}




export default UserInDetails