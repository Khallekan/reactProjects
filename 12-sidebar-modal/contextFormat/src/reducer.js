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

export default reducer;
