import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:5230/api",
    headers:{
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})
export class PostsApiService {

    getAll() {
        return http.get('post')
    }

    getPostById(id){
        return http.get('post/'+id)
    };
    createPost(body){
        return http.post('post',body)
    }

    udapte(id,body){
        return http.patch('post/'+id,body)
    }

    delete(id){
        return http.delete("post/"+id)
    }

}