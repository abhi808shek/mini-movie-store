import React from 'react'
import ListCard from './Components/CardList/ListCard'
import {Routes,Route} from "react-router-dom"
import SingleCard from './Components/SingleCard/SingleCard'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={ <ListCard />}/>
        <Route path='/:id' element={ <SingleCard />}/>
      </Routes>
    </div>
  )
}

export default App
