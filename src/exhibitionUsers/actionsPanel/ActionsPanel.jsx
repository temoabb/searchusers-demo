import React from 'react'
import Button from '../../button/Button.jsx'
import logo from '../../assets/group-users.svg'

import './ActionsPanel.css'

const ActionsPanel = ({ amount, searched, isDisabled, nextCondition, toggleHandler, handleInputValueChange, onClick }) => {
  return (
    <div className="panel">
      <div className="amount">
        <img src={logo} alt="users-group" />
        <p>{amount} most active GitHub users </p>
      </div>
      <div className="search-engine">
        <form>
          <input
            value={searched}
            onChange={handleInputValueChange}
            type="text"
            placeholder="Type username..."
            name='searchusers' />
        </form>
        <Button
          onClick={onClick}
          isDisabled={isDisabled}
          address={`domain/${searched}`}
          text="SEARCH" />
      </div>
      <div className="toggler" onClick={toggleHandler}>
        {nextCondition} VIEW
      </div>
    </div>
  )
}




export default ActionsPanel