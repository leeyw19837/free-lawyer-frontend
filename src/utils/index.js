// 防抖
export const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(this, args);
        }, delay)
    }
}

// 节流1
export const throttle1 = (fn, delay) => {
    let prev = 0;
    return function (...args) {
        let now = Date.now();
        if (now - prev > delay) {
            fn.apply(this, args);
            prev = now;
        }
    }
}

// 节流2
export const throttle2 = (fn, delay) => {
    let timer = null;
    return function (...args) {
        if (!timer) {
            fn.apply(this, args);
            timer = setTimeout(function () {
                timer = null;
            }, delay)
        }
    }
}