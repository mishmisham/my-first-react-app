import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routesArray } from '../../../routes/routesData';
import './navMenu.sass';

const NavMenu = () => {

    const userID = useSelector((state) => state.user.about.id)

    const filteredRoutes = routesArray.filter(route => {
        if (userID > 0) {
            return route.path !== '/auth'
        }
        return true
    })

    return (
        <nav className="nav-menu">
            {filteredRoutes.map((item, key) => {
                return <NavLink
                            className='nav-menu_item'
                            to={item.path}
                            key={item.path}
                        >
                            {item.name}
                        </NavLink>
            })}
        </nav>
    );
}

export default NavMenu;