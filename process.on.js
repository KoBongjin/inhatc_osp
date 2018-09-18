// 이벤트를 연결합니다.
process.on('exit', function () {
    console.log('\n*** exit event ^_^ .. !');
});

// 이벤트를 연결합니다.
var recvCount = 0;
process.on('uncaughtException', function (error) {
    console.log('** uncaughtException recv:',++recvCount);
});

// 2초 간격으로 3번 예외를 발생시킵니다.
var count = 0;
var id = setInterval(function () {

    // 3번 실행하면 타이머를 중지합니다.
    if (++count == 3) { 
        console.log('.. count : ',count);
    	clearInterval(id);
//    	return;
    }

    console.log('-> process.emit() cnt:', count);
	process.emit('uncaughtException');
}, 2000);

console.log('++>> count : ',count);


