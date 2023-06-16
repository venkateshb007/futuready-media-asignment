import React from 'react'
import Header from '../header/Header'
import About from '../about/About'
import Modus from '../modus/Modus'
import Details from '../details/Details'
import Terms from '../terms/Terms'
import Footer from '../footer/Footer'

const Page = () => {
  return (
    <div className='container text-white'>
      <Header/>
      <About/>
      <Modus/>
      <Details/>
      <Terms/>
      <Footer/>
    </div>
  )
}

export default Page
