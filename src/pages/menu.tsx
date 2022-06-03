import React from 'react'
import Hero from '../components/menuPage/Hero'
import GlobalContext from '../context/GlobalContext'

function menu() {
  return (
    <GlobalContext>
    <Hero />
    </GlobalContext>
  )
}

export default menu