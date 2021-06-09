import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  isSideBarOpen: false,
  isModalOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
