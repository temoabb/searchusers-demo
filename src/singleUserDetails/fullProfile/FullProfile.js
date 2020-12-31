import React from 'react'
import { Link } from 'react-router-dom'

import './FullProfile.css'

const FullProfile = ({ className, login, avatar_url, type, name, location, twitter_username, public_repos, followers }) => {

  let userGitHubURL = `https://github.com/${login}`

  return (
    <div className={className}>
      <h1 className="noUser">USER NOT FOUND!</h1>
      <div className="main">
        <div className="avatarDiv">
          <img src={avatar_url} alt="avatar" />
        </div>
        <div className="personal">
          <a href={userGitHubURL} target="_blank" >{name}</a>
          <p>Type: {type}</p>
          <p>Location: {location} </p>
          <p>Twitter username: {twitter_username}</p>
        </div>
      </div>
      <div className="workInfo">
        <p>REPOS</p>
        <p>COMPANY</p>
        <p>Public repos: {public_repos}</p>
        <p>Followers: {followers} </p>
      </div>
      <Link to="/domain"><h2>BACK TO MOST ACTIVE USERS</h2></Link>
    </div>
  )
}




export default FullProfile