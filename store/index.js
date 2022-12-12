
import users from '@/static/users.json'

export const state = () => ({
  users,
  selection: []
})

export const getters = {
  getUsers: state => (initial, last) => {
    return state.users.slice(initial, last)
  },
  getSelection (state) {
    return state.selection
  }
}

export const mutations = {
  increment (state) {
    state.counter++
  },
  selectUser (state, userName) {
    state.selection.push(userName) /* even though we use user name, we should use ID if thats availiable */
  },
  unselectUser (state, userName) {
    const index = state.selection.indexOf(userName)
    if (index !== -1) {
      state.selection.splice(index, 1)
    }
  }
}

export const actions = {
  fetchCounter ({ state }) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  }
}
