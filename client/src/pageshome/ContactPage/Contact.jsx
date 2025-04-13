/* eslint-disable */

import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Hero from './Hero'
import Feature from './Feature'
import AboutContact from '../AboutPage/AboutContact'
import Map from './Map'
import { useDispatch } from 'react-redux'
import { fetchHomePageDetailsAction } from 'src/redux/HomePage/action'

const Contact = () => {
  const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(fetchHomePageDetailsAction())
      }, [])
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <AboutContact /> 
      <Map />
      <Footer/>
    </div>
  )
}

export default Contact
