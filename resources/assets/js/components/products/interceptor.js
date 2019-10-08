import axios from 'axios';
import config from '../../config';

const token = localStorage.getItem('token')

console.log(token)
if (token) {
  console.log("found token @interceptor "+token)
  axios.defaults.headers.common['Authorization'] = 'Bearer '+ token
}


axios.interceptors.response.use( (response) => {

   // get newtoken and store
   console.log("Response is "+response.data)

   return response;
}, (error) => {
   switch (error.response.status) {
        case 401:
            console.log("New Token@401 ",error.response.data.token);
            //localStorage.setItem("token",error.response.data.token)
            error.config.__isRetryRequest = true
            error.config.headers.Authorization = 'Bearer ' + error.response.data.token
           // return axios(error.config);
        break;

        case 500:
        console.log("500 error")

        if(error.response.data.error=="TOKEN_BLACKLISTED"){

            localStorage.setItem("token",error.response.data.token)
            error.config.__isRetryRequest = true
            //error.config.headers.Authorization = 'Bearer ' + error.response.data.token
            //return axios(error.config);

        }

        //this.$router.push('/login')

        break;
        
        default:
        
   }
return Promise.reject(error);
});