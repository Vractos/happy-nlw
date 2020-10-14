import React from 'react';

import './styles/global.css'
import { PageLanding } from './styles/pages/landing'

import logoImg from './images/logo.svg'

function App() {
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

        <a href="" className="enter-app">
          >
        </a>
      </div>
    </PageLanding>
  );
}

export default App;
