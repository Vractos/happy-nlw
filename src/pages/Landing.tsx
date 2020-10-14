import React from 'react'
import { Link } from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

import { PageLanding } from '../styles/pages/landing'

import logoImg from '../images/logo.svg'

function Landing() {
    return (
        <PageLanding>
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve Felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Taguatinga</strong>
                    <span>Distrito Federal</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </PageLanding>
    )
}

export default Landing;