import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config.js';
import { collection, getDocs } from "firebase/firestore"

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null)

    const load = async () => {
        try {
            const res = await getDocs(collection(projectFirestore, "posts"))
            console.log(res)
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }
}

export default getPosts