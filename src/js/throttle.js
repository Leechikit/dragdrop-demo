function Throttle() {
    const DURATION = 500;
    let timer;
    let firstTime = true; //记录是否是第一次执行的flag

    return (fn, isReset = false) => {
        let args = arguments; //解决闭包传参问题

        if (firstTime || isReset) { //若是第一次，则直接执行
            fn.apply(this, args);
            if (isReset) {
                clearTimeout(timer);
                timer = null;
                firstTime = true;
            } else {
                return firstTime = false;
            }
        }
        if (timer) { //定时器存在，说明有事件监听器在执行，直接返回
            return false;
        }
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
        }, DURATION);
    }
}

export default Throttle;