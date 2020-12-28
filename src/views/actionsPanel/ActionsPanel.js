import React from 'react'
import Button from '../../button/Button'
import logo from '../../assets/group-users.svg'

import './ActionsPanel.css'

const ActionsPanel = ({ amount, searched, isDisabled, nextCondition, exteriorIcon, toggleHandler }) => {
  return (
    <div className="panel">

      <div className="amount">
        <img src={logo} alt="users-group" />
        <p>{amount} USERS </p>
      </div>

      <div className="search-engine">
        <form>
          <input type="text" placeholder="Type username..." />
        </form>
        <Button isDisabled={isDisabled} address={`domain/${searched}`} text="SEARCH" />
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