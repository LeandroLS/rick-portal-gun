import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RickAndMortyAPI from '../resources/RickMortyAPI';
class App extends Component {
    render(props) {
        var character = this.props.character;
        return (
            <div>
                {character}
                <h1> Sou um componente </h1>
            </div>
        )
    }
}
ReactDOM.render(<App character={'ola'}/>, document.getElementById('root'));