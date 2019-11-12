'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RickAndMortyAPI from '../resources/RickMortyAPI';
import Card from './Card';
import Description from './Description';
import Header from './Header';
import Form from './Form';
class App extends Component {
    render(props) {
        return (
            <div>
                <Header />
                <Description />
                <Form />
                <Card />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));