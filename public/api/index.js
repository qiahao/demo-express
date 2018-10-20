var axios = window.axios
var api =
 {
  user: {
    get(id) {
      return axios({
        url: '/api/user'
      })
    },
    add(user) {
      return axios({
        url: '/api/user',
        method: 'POST',
        data: user
      })
    },
    getList() {
      return axios({
        url: '/api/user/list'
      })
    },
    login(data) {
      return axios({
        url: '/api/user/login',
        data,
        method: 'POST'
      })
    }
  }
}