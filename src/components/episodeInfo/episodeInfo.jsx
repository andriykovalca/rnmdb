import React, { Component } from 'react';
import Tile from '../tile/tile';
import Pagination from '../Pagination/pagination';

class EpisodeInfo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        locations: [],
        isLoaded: false,
      }
    }
  
    componentDidMount() {
  
      fetch("https://rickandmortyapi.com/api/episode/")
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            episodes: json,
            currentPage: 1
          })
        });
  
    }

    nextPage = (pageNumber) => {
      fetch(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          chars: json,
          currentPage: pageNumber
        })
      });
    }
  
    render() {
  
      var { isLoaded, episodes } = this.state;
      
      if (!isLoaded) {
        return <div> Loading </div>;
      } 
      
      else {
        const numberPages = episodes.info.pages;
        console.log(this.state.currentPage);
        return (
            <div>
              <div className="container">
                <h2>Episodes</h2>
              </div>
              
              <div className="container episodes">

              {episodes.results.map(episode => (

                <Tile key={episode.id} name={episode.name} airdate={episode.air_date} number={episode.episode} type="episode" />

              ))}

              </div>
              { numberPages > 1 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
            </div>
            
            );
      }
  
    };
  }

export default EpisodeInfo