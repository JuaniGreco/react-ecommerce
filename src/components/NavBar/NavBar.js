import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export const NavBar = () => {

    return (
            <header className="header">
                <h2>LOGO</h2>

            <nav className="header-nav">
                <p className="header-link">Inicio</p>
                <p className="header-link">Catálogo</p>
                <p className="header-link"><FontAwesomeIcon icon={faShoppingCart}/></p>
            </nav>
        </header>
    )

}