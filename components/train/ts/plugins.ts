import type { App } from "vue"

export default {
    install: (app: App<Element>, options: Record<string, any>) => {
        app.config.globalProperties.$translate = (key: string) => {
            return key.split(".").reduce((item, index) => {
                if(item) return item[index];
            }, options)
        }
    }
}