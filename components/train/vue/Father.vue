<script setup lang="ts">
    import { ref, reactive, computed } from "vue";
    
    const author = reactive({
        name: 'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })

    const result = computed((preValue) => {})

    
    import { watch, watchEffect, onWatcherCleanup } from "vue"
    import axios from "axios"

    const question = ref("");
    const answer = ref("Answer;");
    const loading = ref(false);
    const wather = watch(question, async (newValue, oldValue) => {
        if(newValue.includes("?")){
            loading.value = true;
            answer.value = "Thinking...";
            const controller = new AbortController();
            
            try {
                await axios.get("url", {
                    signal: controller.signal
                }).then(response => {
                        answer.value = response.data;
                    }
                ).catch(error => {
                    throw new Error(error.message);
                })
            } catch(error) {
                answer.value = error as string;
            } finally {
                loading.value = false;
            }

            onWatcherCleanup(() => {
                controller.abort();
            })
        }
    }, {
        deep: 2,
        immediate: true,
        once: true,
        flush: "post"
    })

    wather();


    import Child from "./Child.vue"
</script>

<template>
    <div>Father page</div>
    <Child class="child-class"/>
</template>