// it is responsible for inlt auth related functionality into backend 
// like login register and getme ......

import axios from 'axios'


// now some valuses are repaeted in this code also for this we are using axios.create an api 
// reapeted things are here is a ====== 1)await axios.post("http://localhost:3000/api/auth
//                               =====  2)     withCredentials: true
const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

async function register(username, email, password) {
    try {
        const response = await api.post("/register", {
            username, email, password
        })

        return response.data

    }
    catch (err) {
        throw err;
    }

}

async function login(username, password) {
    try {
        const response = await api.post("/login", {
            username, password
        })

        return response.data

    }
    catch (err) {
        throw err;
    }

}

async function getMe(){
    try{
        const response =await api.post("/get-me")
        return response.data
    }
    catch(err){
        throw err 
    }
} 



export { register, login, getMe }