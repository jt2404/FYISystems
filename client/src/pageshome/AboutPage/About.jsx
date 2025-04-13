/* eslint-disable */

import React, { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import BreadcrumbSection from './BreadcrumbSection'
import FeatureSection from '../FeatureSection'
import About from '../About'
import Skills from './Skills'
import Strategic from './Strategic'
import Team from '../Team'
import VideoSection from '../Video'
import FunFactCounter from '../FunFactCounter'
import Testmonial from './Testmonial'
import AboutContact from './AboutContact'
import { useDispatch } from 'react-redux'
import { fetchHomePageDetailsAction } from 'src/redux/HomePage/action'

const AboutSection = () => {
const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchHomePageDetailsAction())
    }, [])
  return (
    <>
        <Header />
        <BreadcrumbSection />
        <FeatureSection />
        <About />
        <Skills />
        <Strategic />
        <Team />
        <VideoSection />
        <FunFactCounter />
        {/* <Testmonial /> */}
        <AboutContact />
        <Footer />
    </>
  )
}

export default AboutSection
