import React from 'react';
import { routes } from '../routing/routes';

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li><a className='menu-link' href={routes.teoria}>Teoria</a></li>
        <li><a className='menu-link' href={routes.praktyka}>Praktyka</a></li>
        <li><a className='menu-link' href={routes.wsparcie}>Wsparcie</a></li>
      </ul>
    </nav>
  );
}
