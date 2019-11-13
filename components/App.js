'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RickAndMortyAPI from '../resources/RickMortyAPI';
import Card from './Card';
import Description from './Description';
import Header from './Header';
import Form from './Form';
import Pagination from './Pagination';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {characters: []};
    }

    async componentDidMount() {
        await RickAndMortyAPI.getRandomCharacters().then(characters => {
            this.setState({characters: characters.data});
        }).catch((err) => {
            this.setState({erro: true})
        });

    }

    hasError(){
        if(this.state.erro){
            return <h1 className="error-message"> Something is wrong with Rick And Morty API. Try again later. </h1>
        } else {
            return (
                <div>
                    <Form />
                    <section className="api-data">
                        {
                            this.state.characters.map(character => {
                                return (<Card image={character.image}
                                name={character.name} 
                                status={character.status} 
                                gender={character.gender} 
                                species={character.species}/>)
                            })
                        }
                    </section>
                    <Pagination />
                </div>
            )
        }
    }

    render(props) {
        return (
            <div>
                <Header />
                <Description />
                {this.hasError()}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));