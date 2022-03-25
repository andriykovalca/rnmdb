import React, { Component } from 'react';
import '../../styles/style.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Logo from '../../assets/main.jpg'
import Tile from '../../components/tile/tile';
import Button from '../../components/button/button';

class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        chars: [],
        episodes: [],
        totalResults: 0,
        currentPage: 1,
        isLoaded: false,
      }
    }

    componentDidMount() {
      Promise.all([
        fetch("https://rickandmortyapi.com/api/character/"),
        fetch("https://rickandmortyapi.com/api/episode?page=2")
      ])
      .then(([resChar, resEp]) => {
        return Promise.all([resChar.json(), resEp.json()])
      })
      .then(([resChar, resEp]) => {
        this.setState({
          isLoaded: true,
          chars: resChar,
          episodes: resEp
        })
      })
      
    }

    

  render() {


    var { isLoaded, chars, episodes } = this.state;

    if (!isLoaded) {
      return (
        <div className="App homepage">

            <Header />
          
            <section className="hero">
              <div className="container">
                <h1>Welcome to the Rick and Morty Database!</h1>
                <img className="main-image" src={Logo} alt="rick and morty"></img>
              </div>
            </section>

            <Footer />

        </div>
        
      )
    } 
    else {
      return (
        <div className="App homepage">
  
        <Header />
          
            <section className="hero">
              <div className="container">
                <h1>Welcome to the Rick and Morty Database!</h1>
                <img className="main-image" src={Logo} alt="rick and morty"></img>
              </div>
            </section>

            <section className="main-characters">
              <div className="container">
                <h2>Main characters:</h2>
                <div className="container characters">
                    {chars.results.slice(0,5).map(char => (
                
                      <Tile key={char.id} name={char.name} img={char.image} status={char.status} species={char.species} origin={char.origin.name} type="character" />
                      
                      
                    ))}
                    <Button href="/characters" text="All characters"></Button>
                    
                  </div>
              </div>
            </section>

            <section className="latest-episodes">
                <div className="container">
                    <h2>Latest episodes:</h2>

                    <div className="container episodes">
                    {episodes.results.slice(0,4).map(episode => (
                
                      <Tile key={episode.id} name={episode.name} airdate={episode.air_date} number={episode.episode} type="episode" />
                      
                      
                    ))}
                    <Button href="/episodes" text="All episodess"></Button>
                    
                  </div>
                </div>  
            </section>
          
        <Footer />
  
      </div>
      )
    }

    
    
   

  }
}

export default Home;