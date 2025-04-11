import React from 'react'
import Header from './Header'
import "./Home.css"

export default function Home(props) {
  return (
    <div className='home'>

    <Header/>
    <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
    </div>
  )
}
