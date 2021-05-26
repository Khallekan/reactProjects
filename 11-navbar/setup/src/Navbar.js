import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  const showLinks = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      linkContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linkContainerRef.current.style.height = `0px`;
    }
  }, [toggle]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={showLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linkContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((net) => {
            const { id, url, icon } = net;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
