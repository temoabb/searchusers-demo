import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'


const Button = ({ text, address, isDisabled, onClick }) => {
  return (
    <Link to={address}>
      <button onClick={onClick} disabled={isDisabled} className="button">
        {text}
      </button>
    </Link>

  )
}





export default Button