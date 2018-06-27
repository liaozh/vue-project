export default {
  namespaced: false,
  state: {
    menuCollapse: true // 菜单是否展开
  },
  mutations: {
    SET_MENU: (state, data) => {
      state.menuCollapse = data
    }
  },
  actions: {
    setMenu (context) {
      context.commit('SET_MENU', !context.state.menuCollapse)
    }
  },
  getters: {
    getMenu: state => {
      return state.menuCollapse
    }
  }
}
