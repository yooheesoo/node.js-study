var Users = [{name : '소녀시대', age : 20}, {name : '걸스데이', age : 22}];

//새로운 객체 추가
Users.push({name : '티아라', age : 23});

//배열에 들어있는 요소의 개수 알아내기 :length
console.log('사용자수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[2].name);