var result = 0;

//시간이 얼마나 걸리는지 알고 싶을 때 시작
console.time('duration_sum');

for(var i =1; i<=1000; i++){
    result += i;
}

//시간이 얼마나 걸리는지 알고 싶을 때 끝
console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

//실행한 파일의 이름 출력 (파일의 전체 패스 출력)
console.log('현재 실행한 파일의 이름 : %s', __filename);
//실행한 파일이 들어 있는 폴더 출력(폴더의 전체 패스 출력)
console.log('현재 실행한 파일의 패스 : %s', __dirname);

var Person = {name : "소녀시대", age : 20};
console.dir(Person);