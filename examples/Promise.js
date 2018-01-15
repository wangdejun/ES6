/** Defination&Concept
 * ---------------------
 * 所谓 Promise，就是一个对象，用来传递异步操作的消息。asynchronous operations messages
 * 它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的 API，可供进一步处理。
 */

/**
 * Features 2sides
 * -----------------
 * 1)state of the promise object cannot be effected outside。
 * Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。
 * 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 * 这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变。
 * 2)
 * 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
 * Promise 对象的状态改变，
 * 只有两种可能：从 Pending -> Resolved 和从 
 * Pending -> Rejected。
 * 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
 * 就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。
 * 这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
 */

/** Bad Sides:
 * ---------------------------------------------------
 * 首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
 * 其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
 * 第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
 */

function fetchAsync (url, timeout, onData, onError) {
}
let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchAsync(url, timeout, resolve, reject);
    });
}
Promise.all([
    fetchPromised("http://backend/foo.txt", 500),
    fetchPromised("http://backend/bar.txt", 500),
    fetchPromised("http://backend/baz.txt", 500)
]).then((data) => {
    let [ foo, bar, baz ] = data;
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
}, (err) => {
    console.log(`error: ${err}`);
});


let fetchPromised = (url, timeout)=>{
    return new Promise((resolve, reject)=>{
        fetch
    })
}