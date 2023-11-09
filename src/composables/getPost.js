import { ref } from 'vue'
import { colRef } from '@/firebase/config.js';
import { getDoc, doc } from "firebase/firestore"

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null)

    const load = async () => {
        try {
            const docRef = doc(colRef, id)
            const docSnap = await getDoc(docRef)
            console.log(docSnap)

            if(!docSnap.exists()) {
                throw Error('That post does not exist')
            }
            post.value = { ...docSnap.data(), id: docSnap.id}
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { post, error, load }
}

export default getPost