import axios from "axios";


export class UsersApiService {

    getAll() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }

    getUserById(id){
        return axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    };
    createUser(body){
        return axios.post('https://jsonplaceholder.typicode.com/users',body)
    }

    udapte(id,body){
        return axios.put('https://jsonplaceholder.typicode.com/users/'+id,body)
    }

}