<template>
    <div class="posts">
      <div v-for="post in posts" >
       user {{post.id}} {{post.title}}
          <pv-button label="delete" @click="deletePost(post.id)" />
      </div>
    </div>
</template>

<script>
import {PostsApiService} from "@/services/posts-adpi.service";

export default {
    name: "posts",
    data(){
        return{
            posts :[],
            postService : new PostsApiService()
        }
    },
    methods:{
        getAll(){
            this.postService.getAll().then((response)=>{
                this.posts = response.data;
            })
        },
        deletePost(id){

            this.postService.delete(id).then((response)=>{
                if(response.status === 200){
                    alert("user deleted")
                    this.getAll()
                }
                else(
                    alert("error deleting user")
                )
            })

        }
    },
    beforeMount() {
        this.getAll()
    }

}
</script>

<style scoped>
.posts{
    display:flex;
    flex-direction: column;
    gap: 10px;
}

</style>