import React from 'react'

const Tile = (props) => {
    const movieTileStyle = {
        color: "#4a4a4a",
    }
    var title = props.name;
    if (title.length >= 28) {
        title = title.substring(0,28) + '...';
    }
    var tileType = props.type;
    if (tileType === 'character') {
        return (
       
            <a  href={props.href} className={"tile " + props.type} style={movieTileStyle}>
                <div className="thumb"><img src={props.img} alt={props.name} /></div>
                <div className="description">
                    <span className="title"><p className="heading">Name:</p> {title}</span>
                    <span className="status"><p className="heading">Status:</p> {props.status}</span>
                    <span className="species"><p className="heading">Species:</p> {props.species}</span>
                    <span className="origin"><p className="heading">Origin:</p> {props.origin}</span>
                </div>
            </a>
            )
    } else if (tileType === 'episode') {
        return (
                <a  href={props.href} className={"tile " + props.type} style={movieTileStyle}>
                <div className="description">
                    <span className="number"><p className="heading">Episode:</p> {props.number}</span>
                    <span className="title"><p className="heading">Name:</p> {title}</span>
                    <span className="airdate"><p className="heading">Air date:</p> {props.airdate}</span>
                </div>
            </a>
            )
    } else {
        return (
       
            <a  href={props.href} className={"tile " + props.type} style={movieTileStyle}>
                <div className="description">
                    <span className="title">{title}</span>
                </div>
            </a>
            )
    }

}

export default Tile