<script setup lang="ts">
import { ref } from "vue"
    const show = ref(false);
</script>
<template>
    <button @click="show = !show">show?</button>
    <Transition name="trans" enter-from-class="" type="animation" @enter="" :css="false">
        <div v-if="show">a
            <div class="inner">s</div>
        </div>
        <slot></slot>
    </Transition>
</template>
<style lang="css" scoped>
    .trans-enter-from, .trans-enter-active, .trans-enter-to {}
    .trans-leave-from {
        transition: all 0.3s ease 0;
    }
    .trans-enter-active .inner {}
</style>