import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li><NavLink to="/homepage" activeClassName={classes.active} title="Homepage">Homepage</NavLink></li>
                    <li><NavLink to="/products" activeClassName={classes.active} title="Products">Products</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={classes.active} title="Contact">Contact</NavLink></li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;