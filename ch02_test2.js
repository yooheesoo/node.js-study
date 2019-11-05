//process 객체는 프로그램을 실행했을 때 만들어지는 프로세스 정보를 다루는 객체
//argv 속성은 프로세스를 실행할 때 전달되는 파라미터 정보를 가지고 있다.

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if(process.argv.length > 2){
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]);
}

//arg 속성에 들어있는 모든 값을 하나씩 출력하고 싶을 때 foreach메소드 사용
process.argv.forEach(function(item,index){
    console.log(index + ' : ', item);
});

console.dir(process.env);
console.log('os 환경 변수의 값 :' +process.env[os]);
