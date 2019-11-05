//다른 사람이 만들어 둔 모듈 : 외장 모듈
//직접 만든 모듈이 아니라면 상대 패스가 아닌 모듈의 이름만 지정해서 불러옴.
var nconf = require('nconf');
nconf.env();

console.log('os 환경 변수의 값 : %s', nconf.get('os'));

//npm의 역할?
//node package manager의 약자로 노드의 패키지를 사용할 수 있도록 설치 및 삭제 등을 지원하는 프로그램


