import axios from 'axios'
let URL = 'http://localhost:3000/user'
export default {
  getList () {
    return axios({
      url: `${URL}`
    })
  }
}