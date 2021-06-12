import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  const {
    dispatch,
    state: { isSideBarOpen },
  } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? `sidebar show-sidebar` : `sidebar `}>
      <div className='sidebar-header'>
        <img src={logo} alt='coding-addict' className='logo' />
        <button
          className='close-btn'
          onClick={() => dispatch({ type: `TOGGLE_SIDEBAR` })}
        >
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;