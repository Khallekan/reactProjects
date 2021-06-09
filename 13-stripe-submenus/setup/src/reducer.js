const reducer = (state, action) => {
  switch (action.type) {
    case `DISPLAY_SUBMENU`:
      const page = state.sublinks.find(
        (link) => link.page === action.payload.page
      );
      return {
        ...state,
        page: page,
        location: action.payload.coordinates,
        isSubmenuOpen: true,
      };
    case `CLOSE_SUBMENU`:
      return {
        ...state,
        isSubmenuOpen: false,
      };
    case `CLOSE_SIDEBAR`:
      return {
        ...state,
        isSidebarOpen: false,
      };
    case `OPEN_SIDEBAR`:
      return {
        ...state,
        isSidebarOpen: true,
      };

    default:
      throw new Error(`Not handled`);
  }
};

export default reducer;
