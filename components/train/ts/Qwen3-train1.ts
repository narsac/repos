import { onMounted, onUnmounted, ref, type Ref, watch } from "vue";

export function useMouse(enabled?: boolean | Ref<boolean> | undefined){
    const x = ref(0);
    const y = ref(0);
    const isEnabled: Ref<boolean> | undefined = typeof enabled === "boolean" ? ref(enabled) : enabled;
    let isUpdating = false;

    function update(event: MouseEvent){
        x.value = event.pageX;
        y.value = event.pageY;
    }

    function startUpdate(){
        if(isUpdating) return;

        window.addEventListener("mousemove", update);
        isUpdating = true;
    }
    function endUpdate(){
        if(!isUpdating) return;

        window.removeEventListener("mousemove", update);
        isUpdating = false;
    }

    if(isEnabled !== undefined){
        watch(isEnabled, (newV) => {
            if(newV) startUpdate();
            else endUpdate();
        }, {
            immediate: true
        });
    } else{
        onMounted(startUpdate);
    }
    onUnmounted(endUpdate);

    return { x, y };
}