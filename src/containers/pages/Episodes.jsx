import React from 'react';
import '../../styles/style.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import EpisodeInfo from '../../components/episodeInfo/episodeInfo';

function Characters() {
  return (
    <div className="App">

      <Header />

        <EpisodeInfo />

      <Footer />

    </div>

  )
}

export default Characters;