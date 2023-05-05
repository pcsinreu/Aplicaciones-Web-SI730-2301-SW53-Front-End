import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:3000/"
})
export class PostsApiService {

    getAll() {
        return http.get('posts')
    }

    getPostById(id){
        return http.get('posts/'+id)
    };
    createPost(body){
        return http.post('posts',body)
    }

    udapte(id,body){
        return http.patch('posts/'+id,body)
    }

    delete(id){
        return http.delete("posts/"+id)
    }

}