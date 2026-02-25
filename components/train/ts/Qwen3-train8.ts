import {ref, watch, toValue} from "vue";

export function useDarkmode(){
    const isDark = ref(localStorage.getItem("dark") === "false");

    function toggle(){
        isDark.value = !isDark.value;
    }

    function updateDOM(dark: boolean){
        if(dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }

    watch(isDark, (newValue) => {
        localStorage.setItem("dark", newValue.toString());
        updateDOM(newValue);
    })

    return { isDark, toggle };
}