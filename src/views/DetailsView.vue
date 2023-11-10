<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p> 
    <button @click="handleDelete" class="delete">delete post</button>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { doc, deleteDoc } from "firebase/firestore"

import { colRef } from '@/firebase/config.js'
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner.vue';

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        const { post, error, load } = getPost(route.params.id);
        load();

        const handleDelete = async() => {
            await deleteDoc(doc(colRef, props.id))
            router.push('/')
        }

        return { post, error, handleDelete };
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}

button.delete {
    margin: 10px auto;
}
</style>