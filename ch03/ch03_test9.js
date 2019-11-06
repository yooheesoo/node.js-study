var Users = [{name : '소녀시대', age : 20}, {name : '걸스데이', age : 22}];

var add = function(a,b) {
    return a+b;    
};

Users.push(add);

//배열에 들어있는 요소의 개수 알아내기 :length
console.log('배열 요소의 수 : %d', Users.length);
console.log('세 번째 사용자 이름 : %d', Users[2](10,10));