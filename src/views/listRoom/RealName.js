import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RealName = ({ userName, classname }) => {
  const [realName, setRealName] = useState("")
  // const [reposNames, setReposNames] = useState([])


  // const getNameAndRepos = () => {
  //   const nameData = axios.get(`https://api.github.com/users/${userName}`)
  //   const reposData = axios.get(`https://api.github.com/users/${userName}/repos`)

  //   axios.all([nameData, reposData])
  //     .then(axios.spread((...allData) => {
  //       const userRealName = nameData.data.name
  //       const userReposNames = [reposData.data[0]['name'], reposData.data[1]['name']. reposData.data[2]['name']]

  //       setRealName(userRealName)
  //       setReposNames(userReposNames)
  //     }))
  // }

  const getName = () => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(response => {
        setRealName(response.data.name)
        console.log("response.data.name", response.data.name)
        console.log("realname", realName)
      })
  }

  useEffect(getName, [])

  return (
    <div className={classname}>
      <Link to={`/domain/${userName}`}>{realName}</Link>
    </div>
  )
}




export default RealName