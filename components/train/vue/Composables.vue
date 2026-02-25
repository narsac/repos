<script setup lang="ts">
    import { ref, reactive, watch, watchEffect, type Ref } from "vue";
    import { useMouse } from "../ts/Qwen3-train1"
    import useDebounceSearch from "../ts/Qwen3-train2"

    let enabled = ref(false);
    const searchInput = ref("");
    
    const mousePosition = reactive(useMouse(enabled));
    const { queryResult } = useDebounceSearch(searchInput, 500);

    let localstorage = localStorage;
    let params = new URLSearchParams(window.location.search)
    

    
</script>
<template>
    <button @click="enabled = !enabled">{{ enabled ? "cancel" : "enable" }}</button>
    <div>Mouse position is: {{ mousePosition.x }}, {{ mousePosition.y }}</div>
    <input v-mode="searchInput" type="text" placeholder="input" />
</template>