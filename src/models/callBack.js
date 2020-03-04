const callBack = {
  state: {
    active: false,
    addClass: false,
    activeBurger: false,
    addClassBurger: false
  },
  reducers: {
    changeClass: (state, payload) => ({
      ...state,
      addClass: payload
    }),
    changeActive: (state, payload) => ({
      ...state,
      active: payload
    }),
    changeActiveBurger: (state, payload) => ({
      ...state,
      activeBurger: payload
    }),
    changeClassBurger: (state, payload) => ({
      ...state,
      addClassBurger: payload
    })
  }
};

export default callBack;
