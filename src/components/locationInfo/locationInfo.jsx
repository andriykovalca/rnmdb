import React, { Component } from 'react';
import Tile from '../tile/tile';

class LocationInfo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        locations: [],
        isLoaded: false,
      }
    }
  
    componentDidMount() {
  
      fetch("https://rickandmortyapi.com/api/location/")
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            locations: json
          })
        });
  
    }
  
    render() {
  
      var { isLoaded, locations } = this.state;
      
      if (!isLoaded) {
        return <div> Loading </div>;
      } 
      
      else {
        return (
  
            <div className="container locations">
                  {locations.results.map(location => (
              
                    <Tile key={location.id} name={location.name} type="location" />
  
                  ))}
  
            </div>
            );
      }
  
    };
  }

export default LocationInfo