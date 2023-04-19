import axios from "axios";


export class UsersApiService {

    getAll() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }

    getUserById(id){
        ///
    };
    createUser(body){

    }


}