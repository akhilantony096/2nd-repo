var num1=2
var num3=5
var num4=6
if((num1>num3|num1>num4)&(num1<num4|num1<num3)){
    console.log("num is 2nd great "+num1);
}
else if((num3>num4|num3>num1)&(num3<num1|num3<num4)){
    console.log("num is 2nd  great "+num3);
}
else if((num4>num1|num4>num3)&(num4<num3|num4<num1)){
    console.log("num is 2nd great "+num4);
}