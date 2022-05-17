let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
 
let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 606 }, 88],
  qux: [4, 8, 12]
};
//cach1
//obj.bar[3].xyz=606;
//console.log(obj);
//cach 2


let x = Object.assign(obj,obj2);
console.log(obj);