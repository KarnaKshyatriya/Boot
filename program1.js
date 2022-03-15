var a=[10,20,30];
var b=[1,2,...a,4,5,6];
console.log(b);

var show=(a,b=200)=>{
    console.log(a+b);
}

show(100);

let set=new Set();
set.add(1);
set.add('1');
set.add({key:'value'});
console.log(set.size);

let c=[100,200,330,400];
let [x,,...y]=c;
console.log(x,y);
