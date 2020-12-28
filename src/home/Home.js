import React from 'react'
import './Home.css'

import logo from '../assets/octocat.png'
// import socialite from '../assets/socialite.png'

import Button from '../button/Button'

const Home = () => {

  return (
    <div className="homeroom">
      <div className="description">
        <img className="octocat" src={logo} alt="lovely github octocat png" />
        <h1>gitfolio</h1>
      </div>
      <p>find GitHub users</p>
      <Button isDisabled={false} text="EXPLORE USERS" address="/domain" />

    </div>
  )
}




export default Home