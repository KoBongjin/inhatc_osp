
// http://developer-kelvin.tistory.com/5
var rint = require('./rint');

// 이벤트를 연결합니다.
rint.timer.on('tick', function () {
    console.log('이벤트를 실행합니다. ^_^');
});
