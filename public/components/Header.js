'use strict';
class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li className="header__link">
                            <a href="/"> Rick Portal Gun</a>
                        </li>
                        <li className="header__link">
                            <a href="https://github.com/LeandroLS/rick-portal-gun" target="__blank"> Github</a>
                        </li>
                        <li className="header__link">
                            <a href="https://leandrols.github.io" target="__blank"> My Blog</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}