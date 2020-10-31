import wepy from '@wepy/core'

import { getNotifications } from '@/api/notification'

const state = {
  unreadCount: 0
}

// 定义 getters
var getters = {
  unreadCount: state => state.unreadCount
}

// 定义 actions
const actions = {
  async updateUnreadCount({ commit, getters }, params = {}) {
    if (!getters.isLoggedIn) {
      return
    }

    const statsResponse = await getNotifications({}, false)

    commit('setUnreadCount', statsResponse.data.unread_count)
  }
}

// 定义mutations
const mutations = {
  setUnreadCount(state, count) {
    state.unreadCount = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
