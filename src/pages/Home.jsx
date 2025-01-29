import React from 'react'
import Hero from '../components/Landing/Hero'
import Works from '../components/Landing/Works'
import WorksPrice from '../components/Landing/WorksPrice'
import PublicOpinion from '../components/Landing/PublicOpinion'
import Header from '../components/Landing/Header'
import Footer from '../components/Landing/Footer'
import Contact from '../components/Landing/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css';
import LandingValuation from '../components/Landing/LandingValuation'

const Home = () => {
    Aos.init()
    return (
        <div className='landingBody'>
            <Header />
            <main>
                <Hero />
                <LandingValuation />
                <Works />
                <WorksPrice />
                <PublicOpinion />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home