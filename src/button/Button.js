import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'


const Button = ({ text, address, isDisabled }) => {
  return (
    <Link to={address}>
      <button disabled={isDisabled} className="button">
        {text}
      </button>
    </Link>

  )
}





export default Button