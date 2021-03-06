import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';

const Home = ({ dispatch }) => {
  return (
    <main>
      <button
        className='sidebar-toggle'
        onClick={() => dispatch({ type: `TOGGLE_SIDEBAR` })}
      >
        <FaBars />
      </button>
      <button
        className='btn'
        onClick={() => dispatch({ type: `TOGGLE_MODAL` })}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
