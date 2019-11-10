'use strict';
class App extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <main>
                    <Description />
                    <Form />
                    <section className="api-data">
                        <Card />
                    </section>
                </main>
            </div>
        );
    }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);