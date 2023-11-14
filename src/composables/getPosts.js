import { ref } from 'vue'
import { colRef } from '@/firebase/config.js';
import { getDocs, orderBy, query, limit } from "firebase/firestore"

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null)

    

    const load = async () => {
        try {
            const q = query(colRef, orderBy('createdAt', 'asc'), limit(10))
            const querySnapshot = await getDocs(q)
            
            querySnapshot.forEach((doc) => {
                posts.value.push({...doc.data(), id: doc.id})
            })
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }
}

export default getPosts