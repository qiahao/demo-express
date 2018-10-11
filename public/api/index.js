var axios = window.axios
var api =
 {
  user: {
    get(id) {
      return axios({
        url: '/user'
      })
    },
    add(user) {
      return axios({
        url: '/user',
        method: 'POST',
        data: user
      })
    },
    getList() {
      return axios({
        url: 'user/list'
      })
    }
  }
}