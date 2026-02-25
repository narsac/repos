/* 使用一个函数包裹，连续调用时只执行最后一次调用且需等待固定延迟 */
function debounce(fn: Function, delay: number){
    let timerId: number | null = null;
    return function (this: any, ...args: any[]) {
        if(timerId) { 
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
            timerId = null;
        }, delay)
    }
}

/* 使用一个函数包裹，在间隔时间内只执行一次 */
function throttle(fn: Function, delay: number) {
    let timerId: number : null = null;
    let lastExecTime: number = 0;
    return function (this: any, ...args: any[]) {
        const now = Date.now();
        const remaining = delay - (now - lastExecTime);

        if(remaining <= 0) {
            if(timerId) {
                clearTimeout(timerId);
                timerId = null;
            }
            fn.apply(this, args);
            lastExecTime = now;
        } else if(!timerId) {
            timerId = setTimeout(() => {
                fn.apply(this, args);
                lastExecTime += delay;
                timerId = null; 
            }, remaining);
        }
    }
}