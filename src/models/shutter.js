const shutter = {
  state: {
    addClass: false,
    path: ""
  },
  reducers: {
    changeClass(state, payload) {
      return {
        addClass: payload
      };
    },
    setPath(state, payload) {
      return {
        path: payload
      };
    }
  },
  effects: dispatch => ({
    slide(payload, state) {
      dispatch.shutter.changeClass(true);
      setTimeout(() => {
        dispatch.shutter.changeClass(false);
      }, 1000);
    }
  })
};

export default shutter;
