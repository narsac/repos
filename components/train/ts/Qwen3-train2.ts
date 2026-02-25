import { watch, ref, type Ref } from "vue";

export default function DebounceSearch(query: Ref<string>, delay: number = 500) {
    const queryResult = ref(query.value);
    let timerId: number | null = null;

    watch(query, (newValue) => {
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            queryResult.value = newValue;
        }, delay);
    });

    return { queryResult };
}