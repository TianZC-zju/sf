const throttle = (fn, ms) => {
    let cd = false;

    return (...props) => {
        if (cd) {
            return;
        }
        fn(...props);
        cd = true;
        setTimeout(() => {
            cd = false;
        }, ms);
    };
};


const log = throttle(() => console.log('aa'), 3000);
log();
log();
setTimeout(() => log(), 4000);