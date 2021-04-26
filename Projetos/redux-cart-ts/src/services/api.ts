import axios from 'axios'

const baseurl = 'https://redux-cart-ts-default-rtdb.firebaseio.com/'

export default axios.create({
    baseURL: baseurl
})