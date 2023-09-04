import React from 'react';
import Menu from './Menu';
import { mainUrl } from '../routing/routes';

const Header = () => {
  return (
    <header className='header'>
      <div><a href={mainUrl}><img src="/assets/logo.svg" alt="Logo" className="logo"/></a></div>
      <Menu />
    </header>
  );
};

export default Header;
