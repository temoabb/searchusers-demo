import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { Link } from 'react-router-dom'

import ActionsPanel from './actionsPanel/ActionsPanel'
import ListRoom from './listRoom/ListRoom'
import Grid from './gridRoom/Grid'

import gridOn from '../assets/grid_on.svg'
import gridOff from '../assets/grid_off.svg'

const List = () => {
  const [data, setData] = useState([])
  const [listView, setListView] = useState(true)
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

  const toggleHandler = () => {
    setListView(!listView)
  }



  return (
    <div>
      {listView
        ? <ActionsPanel nextCondition="GRID" toggleHandler={toggleHandler} exteriorIcon={gridOn} amount={data.length} isDisabled={disableSearch} />
        : <ActionsPanel nextCondition="LIST" toggleHandler={toggleHandler} exteriorIcon={gridOff} amount={data.length} isDisabled={disableSearch} />}

      <div>
        {listView ? <ListRoom data={data} amount={data.length} />
          : <Grid />
        }
      </div>
    </div>
  )
}




export default List