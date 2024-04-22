import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
    return (
        <li>
            <Link to={to}>
                {children}
            </Link>
        </li>
    );
};

export default NavLink;
