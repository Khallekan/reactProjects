import React, { useReducer, useContext } from 'react';
import sublinks from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  sublinks,
  isSidebarOpen: false,
  isSubmenuOpen: false,
  page: { page: '', links: [] },
  location: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.page);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
