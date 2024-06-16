import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routesArray } from '../../../routes/routesData';
import './navMenu.sass';
const NavMenu = () => {
    return (
        <nav className="nav-menu">
            {routesArray.map((item, key) => {
                return <NavLink
                            className='nav-menu_item'
                            to={item.path}
                            key={key}
                        >
                            {item.name}
                        </NavLink>
            })}
        </nav>
    );
}

export default NavMenu;