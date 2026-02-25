<script setup lang="ts">
    import Father from "../components/train/vue/Father.vue"
    import Composables from "../components/train/vue/Composables.vue"
    import UseTime from "../components/train/vue/Timer.vue"    
    
    import { useTemplateRef, type DefineComponent } from "vue";

    const component = useTemplateRef("ref-name")
</script>
<template>
    <Father ref="ref-name"/>
    <Composables/>
    <UseTime/>
</template>