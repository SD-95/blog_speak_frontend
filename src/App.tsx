import React from 'react'
import Header from './template/header'
import Footer from './template/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default App