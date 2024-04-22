import React from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Header />
        <Hero />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
