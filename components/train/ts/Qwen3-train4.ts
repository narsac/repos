export function useLocastorage(key: string, initialValue: any){
    const storedValue: string | null = localStorage.getItem(key);
    const value = ref(storedValue ? JSON.parse(storedValue) : initialValue);

    watch(value, (newValue) => {
        localstorage.setItem(key, JSON.stringify(newValue))
    });

    return value;
}