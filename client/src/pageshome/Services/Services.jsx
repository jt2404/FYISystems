/* eslint-disable */

import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Hero from './Hero'
import AllServices from './AllServices'
import { useDispatch } from 'react-redux'
import { fetchHomePageDetailsAction } from 'src/redux/HomePage/action'

const Services = () => {
  const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(fetchHomePageDetailsAction())
      }, [])
  return (
    <>
        <Header />
        <Hero />
        <AllServices />
        <Footer />
    </>
  )
}

export default Services
