import React from 'react'
import Button from '../../button/Button'
import logo from '../../assets/group-users.svg'

import './ActionsPanel.css'

const ActionsPanel = ({ amount, searched, isDisabled, nextCondition, exteriorIcon, toggleHandler, handleInputValueChange, onClick }) => {
  return (
    <div className="panel">

      <div className="amount">
        <img src={logo} alt="users-group" />
        <p>{amount} most active GitHub users </p>
      </div>

      <div className="search-engine">
        <form>
          <input value={searched} onChange={handleInputValueChange} type="text" placeholder="Type username..." />
        </form>
        <Button onClick={onClick} isDisabled={isDisabled} address={`domain/${searched}`} text="SEARCH" />
      </div>

      <div className="toggler" onClick={toggleHandler}>
        <img src={exteriorIcon} alt="grid on or grid off icon" />
        <div>
          {nextCondition} VIEW
        </div>
      </div>
    </div>
  )
}




export default ActionsPanel