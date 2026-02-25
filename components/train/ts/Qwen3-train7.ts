import { ref, onMounted } from "vue";

export function useTime(initialValue: 0) {
        const hour = ref(initialValue);
        const min  = ref(initialValue);
        const sec  = ref(initialValue);
        const mm   = ref(initialValue);

        let intervalId: number | null = null;

        function start() {
            if(intervalId) return;
            intervalId = setInterval(() => {
                sec.value++;
            }, 1000);
        }
        function pause() {
            if(intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
        function reset() {
            pause();
            hour.value = min.value = sec.value = initialValue;
        }

        watchEffect(() => {
            if(sec.value > 60) {
                min.value += 1;
                sec.value = 0;
            }
            if(min.value > 60) {
                hour.value += 1;
                min.value = 0;
            }
            if(hour.value > 60) {
                pause();
            }
        })

        onUnmounted(() => {
            if(intervalId) clearInterval(intervalId);
        })
        
        return { hour, min, sec, start, pause, reset };
    }