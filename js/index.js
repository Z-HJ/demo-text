function Father (age,country) {
  this.age = age ;
  this.country = country;
}

function Son (name,sex) {
  this.name = name ;
  this.sex = sex;
}

Father.prototype.say = function () {
  console.log(this.name,this.sex);
}
var father = new Father(18,'china');
Son.prototype = father;
Son.prototype.see = function () {
  console.log("see");
}
var son = new Son('张三','male');
son.say();
son.see();
console.log(son.age);
console.log(father)