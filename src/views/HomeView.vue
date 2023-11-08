<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Spinner />
    </div>


  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts.js'
import Spinner from '@/components/Spinner.vue';
import TagCloud from '@/components/TagCloud.vue';


export default {
  name: 'HomeView',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const {posts, error, load} = getPosts()
    load()

    return { posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

  .home h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .home h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
</style>


