import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './List.css'

const GetReposNames = ({ userName }) => {

  const [reposNames, setReposNames] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        let newArr = [];
        console.log(response.data)
        if (response.data.length) {
          response.data[0]['name'] ? newArr.push(response.data[0]['name']) : newArr.push('-')
          response.data[1] !== undefined && response.data[1]['name'] ? newArr.push(response.data[1]['name']) : newArr.push('-')
          response.data[2] !== undefined && response.data[2]['name'] ? newArr.push(response.data[2]['name']) : newArr.push('-')
        } else {
          newArr = ['-', '-', '-']
        }
        setReposNames(newArr)
      })
  }, [userName])

  return (
    <div className='repo-cell'>
      <p>{reposNames[0]}</p>
      <p>{reposNames[1]}</p>
      <p>{reposNames[2]}</p>
    </div>
  )
}



export default GetReposNames