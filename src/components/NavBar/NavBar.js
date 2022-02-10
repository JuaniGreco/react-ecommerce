import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    const img = require('../../img/logo.png');
    const nombre = 'Logo Empresarial';
    return (
            <header className="header">
                <Link to = '/'>
                    <img src={img} alt={nombre}/>
                </Link>
                <Link to = '/'>
                    <h2>WWW Tecnologias</h2>
                </Link>

            <nav className="header-nav">
                <Link to='/productos/celulares' className='header-link'>Celulares</Link>
                <Link to='/productos/accesorios' className='header-link'>Accesorios</Link>
                <Link to='/productos/bluetooth' className='header-link'>Bluetooth varios</Link>
                {/*<Link to='/carrito' className='header-link'><FontAwesomeIcon icon={faShoppingCart}/></Link>*/}
            </nav>
        </header>
    )
}