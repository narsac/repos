import { ref, watchEffect, toValue } from "vue";

export function useFetch(url:any) {
    const data = ref(null);
    const error = ref(null);

    function fetchData() {
        data.value = null;
        error.value = null;

        fetch(toValue(url))
            .then(response => response.json())
            .then(json => data.value = json)
            .catch(error => error.value = error);
    }

    watchEffect(() => { fetchData });

    return { data, error };
}