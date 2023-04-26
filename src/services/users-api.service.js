import axios from "axios";


const http = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})
export class UsersApiService {

    getAll() {
        return http.get('users')
    }

    getUserById(id){
        return http.get('users/'+id)
    };
    createUser(body){
        return http.post('users',body)
    }

    udapte(id,body){
        return http.patch('users/'+id,body)
    }

    delete(id){
        return http.delete("users/"+id)
    }

}