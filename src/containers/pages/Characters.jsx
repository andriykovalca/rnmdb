import React from 'react';
import '../../styles/style.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CharacterInfo from '../../components/charactersInfo/charactersInfo';

function Characters() {
  return (
    <div className="App">

      <Header />
      
        <CharacterInfo />
        
      <Footer />

    </div>

  )
}

export default Characters;