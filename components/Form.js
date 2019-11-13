'use strict';
import React from 'react';
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            status: ''
        };
    }
    updateInputValue(event) {
        this.setState({
            name: event.target.value
        });
    }
    render(props){
        return (
            <section>
                <form action="/character" method="get" className="search-form">
                    <label className="rick-tittle"> Character name </label> <br></br>
                    <input type="text" name="name" placeholder="Morty" className="search-form__input" onChange={this.updateInputValue}></input> <br></br>
                    <label className="rick-tittle"> Character status </label> <br></br>
                    <select name="status" className="search-form__input" onChange={updateInputValue}>
                        <option value="alive"> Alive </option>
                        <option value="dead"> Dead </option>
                        <option value="unknown"> Unknown </option>
                    </select>
                    <br></br>
                    <button type="button" onClick={this.props.submitForm}> Search </button>
                </form>
            </section>
        );
    }
}
export default Form;