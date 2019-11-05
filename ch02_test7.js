//내장 모듈 : 자주 사용하는 기본 기능을 노드에 포함시켜 제공하는 것(미리 포함되어 있는 것)

//hostname() : 운영체제의 호스트 이름을 알려줌
//totalmem() : 시스템의 전체 메모리 용량을 알려줌
//freemem() : 시스템에서 사용가능한 메모리 용량을 알려줌
//cpus() : cpu정보를 알려줌
//networkInterfaces() : 네트워크 인터페이스 정보를 담은 배열 객체 반환

var os = require('os');

console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());