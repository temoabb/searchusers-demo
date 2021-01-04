import React from 'react'
import GetReposNames from '../../exhibitionUsers/showRoom/GetReposNames'
import GetOrganizationName from './GetOrganizationName'

const WorkInfo = ({ login, followers, public_repos }) => {
  return (
    <div className="workInfo">
      <div>
        <div className="specifics">PUBLIC REPOS</div>
        <div className="findings">{public_repos}</div>
      </div>
      <div>
        <div className="specifics">FIRST 3 PUBLIC REPOS</div>
        <GetReposNames userName={login} />
      </div>
      <div>
        <div className="specifics">FOLLOWERS</div>
        <div className="findings">{followers}</div>
      </div>
      <div>
        <div className="specifics">ORGANIZATION</div>
        <GetOrganizationName userName={login} />
      </div>
    </div>
  )
}


export default WorkInfo