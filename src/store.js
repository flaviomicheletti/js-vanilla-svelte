import { writable } from 'svelte/store';

export const todo = writable({
    title: "",
    userId: "",
    completed: true
})
