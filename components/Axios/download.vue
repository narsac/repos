<script setup lang="ts">
    import { ref } from "vue"
    import axios from "axios"

    const url = "https://s1.52videoplay.com/31b39fdb4065/HD/32/2026-01-30/82fdd9557d2d/033a39671da5/playlist.m3u8";
    const loading = ref(false);
    
    async function downloadVideo(){
        loading.value = true;

        try {
            let src = "";
            let fileName = "video.mp4";

            axios({
                method: "get",
                url: url
            })
            .then(response => response.data)
            .then(data => {
                src = URL.createObjectURL(data);
                URL.revokeObjectURL(data);
            })

            const a = document.createElement("a");
            a.href = src;
            a.setAttribute("download", fileName);
            document.body.append(a);
            a.click();

            a.remove();
            src = "";

        } catch(error: any){
            console.log(error.message)
        }
    }
    
    
</script>
<template>
    <button @click="downloadVideo" :disabled="loading">{{ loading ? "下载中..." : "完成" }}</button>

    
</template>