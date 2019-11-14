'use strict';
import React from 'react';
class Form extends React.Component {
    render(props){
        return (
            <section>
                <form action="/character" method="get" className="search-form">
                    <label className="rick-tittle"> Character name </label> <br></br>
                    <input type="text" name="name" placeholder="Morty" className="search-form__input" onChange={this.props.nameChanged}></input> <br></br>
                    <label className="rick-tittle"> Character status </label> <br></br>
                    <select name="status" onChange={this.props.statusChanged} className="search-form__input">
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