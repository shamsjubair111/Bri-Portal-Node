import Axios from 'axios'


import history from './history'
import { rootUrl } from '../constants/constants'


async function post(url, body = {},authToken = ""){

 
   
   try {
    const res = await Axios.post(`${rootUrl}${url}`,body,authToken || "")
    return await res
   }
    catch (error) {

        if(error?.response?.status  === 404){
            history.push('/404')
        }

     

        throw error
   }
   
}

export default post
