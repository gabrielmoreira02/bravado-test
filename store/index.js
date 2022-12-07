
import users from '@/static/users.json'

export const state = () => ({
  state: {

  }
})

export const getters = {
  getUsers (state) {
    return users.slice(0, 10)
  }
}

export const mutations = {
  increment (state) {
    state.counter++
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
