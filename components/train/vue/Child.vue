<script setup lang="ts">
    import { useAttrs, ref } from 'vue';

    defineOptions({
        inheritAttrs: false
    })
    
    const count = ref(0);
</script>
<template>
    <div class="container">
        <div v-bind="$attrs[`child-class`] as any"></div>
    </div>
</template>