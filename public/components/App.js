'use strict';
class App extends React.Component {
    render(){
       
        return (
            <div>
                <Header />
                <main>
                    <Description />
                    <Form />
                    <h1> {this.props.mensagem} </h1>
                    <section className="api-data">
                        <Card />
                    </section>
                </main>
            </div>
        );
    }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(<App mensagem="ola, sou props"/>, domContainer);