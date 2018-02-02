//var num = 7;
//var number = document.getElementById("num");

//document.getElementById("guess").addEventListener("click",function () {
    //if(number.value == num) {
           // document.getElementById("numDisplay").textContent = "Yes you are right";
       // } else {
     //   }
   // });
var  myInp = document.getElementById("num");
var numDisp = document.getElementById("numDisplay");
var  answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function () {
    var myNum = parseInt(myInp.value);

   if (myNum == answer) {
       numDisp.innerText = "You win! Score: "+score;
   } else  {
       if(myNum < answer){
           numDisp.innerText = "Too small";
       } else if ( myNum > answer) {
           numDisp.innerText = "Too big";
       } else {
           numDisp.innerText = "Enter a number";
       }
       score = score - 1;
}
});