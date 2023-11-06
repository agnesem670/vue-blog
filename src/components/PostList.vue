<template>
<div class="post-list">
    <div v-for="post in posts" :key="id">
    <SinglePost :post="post"/>
    </div>
</div>
</template>

<script>
import SinglePost from './SinglePost.vue';
import { onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: ['posts'],
    components: {SinglePost},
    setup(props) {
        onMounted(() => {
            console.log('componen mounted')
        })
        onUnmounted(() => {
            console.log ('component unmounted')
        })

        onUpdated (() => {
            console.log ('component updated')
        })
    },
    components: { SinglePost }
}
</script>

<style>
</style>