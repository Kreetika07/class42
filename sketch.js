var name= "kreetika";
console.log(name.toUpperCase());
console.log(name.length);
var classno= 41;
console.log(name);
console.log(classno);
var names=["Aditha","Resham","Lavanya"]
console.log(names);
console.log(names[2])
console.log(names.length)
names.push("Disha");
console.log(names);
names.pop();
console.log(names);
console.log(3+2);
console.log(5-4);
console.log(7*7);
console.log(56/8);
console.log(60%800)
if(2===3){
console.log(5+4);
}
else{
console.log(9*40);
}

function setup(){
for(var i=1; i<6 ; i=i+1 ){
console.log(i);
}
for(var i=0; i<11 ; i=i+2){
  console.log(i);
}
var n=1;
while(n<10){
  console.log(n);
  n=n+2;
}
console.log(circumference(1));
}
function draw(){

}
function circumference(radius){
var c=2*3.14*radius;
return c;
}