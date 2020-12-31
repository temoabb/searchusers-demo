import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ActionsPanel from './actionsPanel/ActionsPanel'
import UsersDisplay from './showRoom/UsersDisplay'

import gridOn from '../assets/grid_on.svg'
import gridOff from '../assets/grid_off.svg'

const Showroom = () => {

  const [data, setData] = useState([])
  const [roomstyle, setRoomStyle] = useState('listroom')
  const [showflat, setShowFlat] = useState('flat')
  const [formation, setFormation] = useState('inforow')

  const [value, setValue] = useState("")
  const [disableSearch, setDisableSearch] = useState(true)

  useEffect(() => {
    console.log("effect")
    axios
      .get("https://api.github.com/users")
      .then(response => {
        console.log("response", response)
        const gotData = response.data
        setData(gotData)
      })
  }, [])

  const handleInputValueChange = (e) => {
    setValue(e.target.value)
    setDisableSearch(false)
  }

  const handleStateChecker = () => {
    if (value) {
      console.log('value exists', value)
      setDisableSearch(true)
      setValue("")
      console.log('setvalue " " ', value)
    } else {
      console.log('value does not exist', value)
      setDisableSearch(true)

    }
  }

  const toggleHandler = () => {
    roomstyle === 'listroom' ? setRoomStyle('gridroom') : setRoomStyle('listroom')
    showflat === 'flat' ? setShowFlat('hideflat') : setShowFlat('flat')
    formation === 'inforow' ? setFormation('infocard') : setFormation('inforow')
  }

  return (
    <div>
      {
        roomstyle === 'listroom'
          ? <ActionsPanel
            searched={value}
            handleInputValueChange={handleInputValueChange}
            nextCondition="GRID"
            toggleHandler={toggleHandler}
            exteriorIcon={gridOn}
            amount={data.length}
            isDisabled={disableSearch}
            onClick={handleStateChecker}
          />
          : <ActionsPanel
            searched={value}
            handleInputValueChange={handleInputValueChange}
            nextCondition="LIST"
            toggleHandler={toggleHandler}
            exteriorIcon={gridOff}
            amount={data.length}
            isDisabled={disableSearch}
            onClick={handleStateChecker}
          />
      }
      <div>
        <UsersDisplay
          data={data}
          roomstyle={roomstyle}
          showflat={showflat}
          formation={formation}
          amount={data.length}
        />
      </div>
    </div>
  )
}




export default Showroom