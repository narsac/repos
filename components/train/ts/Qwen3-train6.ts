import {} from "vue";

export const vClickOutside = {
    mounted: (elem, binding: { value: (e: MouseEvet) => void }, vnode) => {
        const handler = (e: MouseEvent) => {
            if(!elem.contains(e.target as node)) {
                binding.value(e);
            }

            elem.__clickOutsideHandler__ = handler;
            document.addEventListener("click", handler);
        }
    },
    unmounted: (elem: HTMLElement) {
        document.removeEventListener("click", elem.__clickOutsideHandler__);
    }
}