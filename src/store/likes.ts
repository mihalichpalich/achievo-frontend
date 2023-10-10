import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLikesStore = defineStore('likesStore', () => {
    const likes = ref(2)
    const doubleLikes = computed(() => likes.value * 2)

    const incrementLikes = () => {
        likes.value++
    }

    const decrementLikes = () => {
        likes.value--
    }

    return {
        likes,
        doubleLikes,
        incrementLikes,
        decrementLikes
    }
})