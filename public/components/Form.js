'use strict';
class Form extends React.Component {
    render(){
        return (
            <section>
                <form action="/character" method="get" className="search-form">
                    <label for="name" className="rick-tittle"> Character name </label> <br></br>
                    <input type="text" name="name" placeholder="Morty" className="search-form__input"></input> <br></br>
                    <label for="name" className="rick-tittle"> Character status </label> <br></br>
                    <select className="search-form__input">
                        <option value="alive"> Alive </option>
                        <option value="dead"> Dead </option>
                        <option value="unknown"> Unknown </option>
                    </select>
                    <br></br>
                    <button> Search </button>
                </form>
            </section>
        );
    }
}