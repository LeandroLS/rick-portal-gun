'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RickAndMortyAPI from '../resources/RickMortyAPI';
import Card from './Card';
import Description from './Description';
import Header from './Header';
import Form from './Form';
import Pagination from './Pagination';
import Axios from 'axios';
import queryString from 'querystring';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            name: '',
            status: 'alive',
            pagesPagination: 0,
            currentPage: 0
        };
    }

    async componentDidMount() {
        await RickAndMortyAPI.getRandomCharacters().then(characters => {
            this.setState({ characters: characters.data });
        }).catch((err) => {
            this.setState({ erro: true });
        });

    }
    charNameChangedHandler = (event) => {
        this.setState({ name : event.target.value });
    }

    charStatusChangedHandler = (event) => {
        this.setState({ status : event.target.value });
    }

    pageClickHandler = (event) => {
        this.setState({ currentPage : event.target.text }, () => {
            this.submitForm();
        });
    }
    submitForm = () => {
        Axios.get('/character', {
            params: {
                name : this.state.name,
                status : this.state.status,
                page : this.state.currentPage
            }
        }).then(result => {
            this.setState({ 
                characters: result.data.characters,
                pagesPagination: result.data.info.pages,
            });
        }).catch(err => {
            this.setState({ erro: true });
        });
    }

    ifNotErrorShowForm(){
        if(this.state.erro){
            return <h1 className="error-message"> Something is wrong with Rick And Morty API. Try again later. </h1>
        } else {
            return (
                <div>
                    <Form 
                        submitForm={this.submitForm} 
                        nameChanged={this.charNameChangedHandler} 
                        statusChanged={this.charStatusChangedHandler}
                    />
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
                        <Pagination pages={this.state.pagesPagination} pageClick={this.pageClickHandler}/>
                    </section>
                </div>
            )
        }
    }

    render(props) {
        return (
            <div>
                <Header />
                <Description />
                {this.ifNotErrorShowForm()}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));