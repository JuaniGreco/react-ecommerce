import './NavBar.css';
import {Link} from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    const img = require('../../img/logo.png');
    const nombre = 'Logo Empresarial';
    return (
            <header className="header">
                <Link to = '/'>
                    <img src={img} alt={nombre}/>
                </Link>
                
                    <h2>WWW Tecnologias</h2>
                

            <nav className="header-nav">
                <Link to='/productos/celulares' className='header-link'>Celulares</Link>
                <Link to='/productos/accesorios' className='header-link'>Accesorios</Link>
                <Link to='/productos/bluetooth' className='header-link'>Bluetooth varios</Link>
                <CartWidget />
            </nav>
        </header>
    )
}