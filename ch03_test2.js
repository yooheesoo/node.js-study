//빈 객체 하나 할당
//객체는 중괄호만 사용해서 만들고 이 객체에 속성을 넣고 싶다면 객체 이름 뒤에 대괄호를 붙인 후 그 안에 속성의 이름을 넣어줌
var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.mobile = '010-3434-2323';

console.log('나이: %d', Person.age);
console.log('이름 : %s',Person.name);
console.log('전화 : %s', Person.mobile);