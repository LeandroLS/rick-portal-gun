'use strict';
import React from 'react';
const Card = (props) => {
    return (
        <div className="card"> 
            <img src={props.image} className="card__image"></img>
            <div className="card__character-name"> {props.name} </div>
            <div className="card__character-info">
                <span className="card__character-info-title"> Status </span>
                <span className="card__character-info--value"> {props.status} </span>
            </div>
            <div className="card__character-info">
                <span className="card__character-info-title"> Gender A</span>
                <span className="card__character-info--value"> {props.gender} </span>
            </div>
            <div className="card__character-info">
                <span className="card__character-info-title"> Species </span>
                <span className="card__character-info--value"> {props.species} </span>
            </div>
        </div>
    );
}

export default Card;