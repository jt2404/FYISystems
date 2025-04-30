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
import { useLocation } from 'react-router'

const Contact = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
      useEffect(() => {
        dispatch(fetchHomePageDetailsAction())
      }, [])

      useEffect(() => {
        const hash = location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // <- smooth scroll here
          }
        }
      }, [location]);

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
