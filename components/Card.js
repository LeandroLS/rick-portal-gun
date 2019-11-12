'use strict';
import React from 'react';
class Card extends React.Component {
    render(){
        return (
            <div className="card"> 
                <img src='.' className="card__image"></img>
                <div className="card__character-name"> Sou um card </div>
                <div className="card__character-info">
                    <span className="card__character-info-title"> Status </span>
                    <span className="card_character-info--value"> Vivo </span>
                </div>
                <div className="card__character-info">
                    <span className="card__character-info-title"> Gender </span>
                    <span className="card_character-info--value"> masculino </span>
                </div>
                <div className="card__character-info">
                    <span className="card__character-info-title"> Species </span>
                    <span className="card_character-info--value"> alien </span>
                </div>
            </div>
        );
    }
}

export default Card;