// function f2() {

// }
// function f1(callback) {
//     setTimeout(function () {
//         // f1 的任务代码

//         callback();
//     }, 1000);
// };

// f1(f2);

// // Method 2 事件监听
// f1.on('done', f2);

// function f1() {
//     setTimeout(function() {
//         // f1 的任务代码
//         f1.trigger('done');
//     }, 1000);
// }

// // Method 3 发布/订阅
// 消息中心
// jQuery.subscribe('done', f2);

// function f1() {
//     setTimeout(function() {
//         // f1 的任务代码

//         jQuery.publish('done');
//     }, 1000);
// }

// // Method4 Promises对象
// f1().then(f2);

// function f1() {
//     var dfd = $.Deferred();

//     setTimeout(function() {
//         // f1的任务代码
//         dfd.resolve();
//     }, 500);

//     return dfd.promise;
// }