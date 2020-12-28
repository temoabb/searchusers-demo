import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ReposNames = ({ userName, className }) => {

  const [reposNames, setReposNames] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        let newArr = []
        response.data[0] ? newArr.concat(response.data[0]['name']) : newArr.concat(' ')
        response.data[1] ? newArr.concat(response.data[1]['name']) : newArr.concat(' ')
        response.data[2] ? newArr.concat(response.data[2]['name']) : newArr.concat(' ')
        setReposNames(newArr)
      })
  }, [])

  return (
    <div className={className}>
      <p>{reposNames[0]}</p>
      <p>{reposNames[1]}</p>
      <p>{reposNames[2]}</p>
    </div>
  )
}



export default ReposNames