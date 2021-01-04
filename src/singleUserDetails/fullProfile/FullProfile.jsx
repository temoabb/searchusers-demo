import React from 'react'
import { Link } from 'react-router-dom'
import UpperTier from './UpperTier.jsx'
import WorkInfo from './WorkInfo.jsx'

import './FullProfile.css'

// const details = []

const FullProfile = ({ className, login, avatar_url, type, name, location, twitter_username, public_repos, followers }) => {

  let userGitHubURL = `https://github.com/${login}`

  return (
    <div className={className}>
      <h1 className="noUser">USER NOT FOUND!</h1>
      <UpperTier
        avatar_url={avatar_url}
        userGitHubURL={userGitHubURL}
        name={name}
        location={location}
        twitter_username={twitter_username}
        type={type} />
      <WorkInfo
        public_repos={public_repos}
        login={login}
        followers={followers} />
      <h3 className="backToUsers" style={{ margin: '20px' }}><Link to="/domain">GO BACK</Link></h3>
    </div>
  )
}

export default FullProfile