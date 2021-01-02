import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetOrganizationName = ({ userName }) => {
  const [orgsDetails, setOrgsDetails] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/orgs`)
      .then(response => {
        // console.log('response data', response.data)
        let details = {
          url: response.data[0].avatar_url,
          orgName: response.data[0].login,
          href: `https://github.com/${response.data[0].login}`
        }
        setLoading(false)
        setOrgsDetails(details)
      })
      .catch(error => {
        setLoading(false)
      })
  }, [userName])

  return (
    <div className="findings">

      {!loading && orgsDetails &&
        <div className='organization'>
          <div className='orgImageDiv'>
            <img src={orgsDetails.url} alt="organization avatar" />
          </div>
          <a href={orgsDetails.href} target="_blank" rel="noreferrer">{orgsDetails.orgName}</a>
        </div>
      }

      {!loading && !orgsDetails && "No Organization!"}
    </div>
  )
}




export default GetOrganizationName