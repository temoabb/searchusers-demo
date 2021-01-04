import React from 'react'
import Button from '../button/Button.jsx'
import './Home.css'
import logo from '../assets/octocat.png'


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