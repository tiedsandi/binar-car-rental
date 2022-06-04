import React from 'react'
import Header from '../containers/Header'
import OurService from '../containers/OurService'
import WhyUs from '../containers/WhyUs'
import Testimonial from '../containers/Testimonial'
import Banner from '../containers/Banner'
import Faq from '../containers/Faq'
import Footer from '../containers/Footer'

const Home = () => {
    return (
        <div className='Home' >
            <Header />
            <OurService />
            <WhyUs />
            <Testimonial />
            <Banner />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
