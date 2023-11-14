<template>
    <h1>Realtime</h1>
    <div v-for="post in posts" :key="post.id">
    {{ post.title }}
    </div>
</template>

<script>
import {ref} from 'vue'
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore"

import { colRef } from '@/firebase/config.js'

export default {
    setup() {
        const posts = ref([])
        const q = query(colRef, orderBy('createdAt', 'desc'), limit(10))
        const querySnapshot = onSnapshot(q, (snap) => {
            posts.value = []
            snap.forEach((doc) => {
                posts.value.push({...doc.data(), id: doc.id})
            })
        console.log(posts)
        })

        return { posts }
    }
}
</script>

<style>

</style>