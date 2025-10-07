import React, { useState } from 'react'
import Hero from '../components/Hero'
import CarCard from '../components/CarCard'
import FeatureSection from '../components/FeatureSection';
import Banner from '../components/Banner';

const Home = () => {
  const [car,setCar] = useState(null);
  return (
    <div>
        <Hero/>
        <FeatureSection/>
        <Banner/>
    </div>
  )
}

export default Home