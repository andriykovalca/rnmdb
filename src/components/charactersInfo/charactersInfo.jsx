import React, { Component } from 'react';
import Tile from '../tile/tile';
import Pagination from '../Pagination/pagination';

class CharactersInfo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        chars: [],
        totalResults: 0,
        currentPage: 1,
        isLoaded: false,
      }
    }
  
    componentDidMount() {
  
      fetch("https://rickandmortyapi.com/api/character/")
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            chars: json
          })
        });
    }

    nextPage = (pageNumber) => {
      fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
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
  
      var { isLoaded, chars } = this.state;
      
      if (!isLoaded) {
        return <div> Loading </div>;
      } 
      
      else {
        const numberPages = chars.info.pages;
        return (
  
          <div>
            { numberPages > 1 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
            
            <div className="container characters">
              {chars.results.map(char => (
          
                <Tile key={char.id} name={char.name} img={char.image} status={char.status} species={char.species} origin={char.origin.name}  type="character" />
                
                
              ))}
              
            </div>
          </div>

            );
      }
  
    };
  }

export default CharactersInfo