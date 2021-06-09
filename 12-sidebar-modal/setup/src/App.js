import React, { useReducer } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';

const reducer = (state, action) => {
  switch (action.type) {
    case `TOGGLE_MODAL`:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case `TOGGLE_SIDEBAR`:
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    default:
      throw new Error(`NOT HANDLED`);
  }
};

const initialState = {
  isSideBarOpen: false,
  isModalOpen: false,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Home dispatch={dispatch} />
      <Modal isModalOpen={state.isModalOpen} dispatch={dispatch} />
      <Sidebar isSideBarOpen={state.isSideBarOpen} dispatch={dispatch} />
    </>
  );
};

export default App;
