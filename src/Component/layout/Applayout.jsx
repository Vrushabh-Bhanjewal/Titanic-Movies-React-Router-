import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading'

function Applayout() {
  const navigation= useNavigation()
  if (navigation.state == "loading") {
    return <Loading />
  }

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Applayout
