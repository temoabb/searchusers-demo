import React from 'react'

const Main = ({ avatar_url, userGitHubURL, type, twitter_username, name, location }) => {
  return (
    <div className="main">
      <div className="avatarDiv">
        <img src={avatar_url} alt="avatar" />
      </div>
      <div className="personal">
        <a href={userGitHubURL} rel="noreferrer" target="_blank" >{name}</a>
        <p>Type: {type}</p>
        <p>Location: {location} </p>
        <p>Twitter username: {twitter_username}</p>
      </div>
    </div>
  )
}


export default Main