// --------q1
// var number =window.prompt( "enter number");
// window.alert(number)


// --------q2
// var number = Number(window.prompt("enter number"));
// number = Number(number);
// if(number%3==0&&number%4==0){
//     window.alert("yes")
// }else{
//     window.alert("no")
// }

// --------q3
// var number1 = Number( window.prompt("enter first number"));
// var number2 = Number( window.prompt("enter secand number"));

// if (number1>number2){
//     window.alert(number1)
// }else{
//     window.alert(number2) 
// }

// --------q4
// var number = Number(window.prompt("enter number"));
// if(number>0){
// window.alert("postive")
// }else{
//     window.alert("nigative")
// }

// -------q5
// var number1 = Number(window.prompt("enter number1"));
// var number2 = Number(window.prompt("enter number2"));
// var number3 = Number(window.prompt("enter number3"));
// max
// if (number1 > number2 && number1 > number3) {
//     window.alert("max number" +number1)
// } else if (number2 > number1 && number2 > number3) {
//     window.alert("max number" +number2)
// } else if (number3 > number1 && number3 > number2) {
//     window.alert("max number" +number3)
// }else{
//     window.alert("not a number")
// }
// min
//  if(number1 < number2 && number1 < number3){
//     window.alert("min number" +number1)
// }else if(number2 < number1 && number2 < number3){
//     window.alert("min number" +number2)
// }else if(number3 < number1 && number3 < number2){
//     window.alert("min number" +number3)
// }else{
//     window.alert("not a number")
// }

// -------q6
// var number = Number(window.prompt("enter number"));
// if(number%2==0){
//     window.alert("even")
// }else{
//     window.alert("odd")
// }

// -------q8
// var character = window.prompt("enter character");
// if(character==("a")||character==("e")||character==("i")||character==("o")||character==("u")){
// window.alert("is vowel")
// }else{
// window.alert("consonant")
// }

// -------q9
// var number = Number(window.prompt("enter number"));
// for(var i =1;i<=number;i++){
//     window.alert(i)
// }

// -------q10
// var number = Number(window.prompt("enter number"));
// for(var i =1;i<=12;i++){
//     window.alert(number*i)
// }

// -------q11
// var number = Number(window.prompt("enter number"))
// for (var i = 2; i <= number; i += 2) {
//     window.alert(i)
// }

// ------q12
// var number1 = Number(window.prompt("enter number1"))
// var power = Number(window.prompt("enter power"))
// var result=1;

// for(var i = 0 ; i<power  ;i++  ){
//    result*=number1

// }
// window.alert(result)

// -------q12
// var total =0;
// for(var i = 0 ; i <5 ;i++){
//     total+= Number( window.prompt('enter mark'+(i+1)))
// }

// window.alert("total =" +total);
// window.alert("avg" = +total/5)
// window.alert("persetage =" +total/500*100)

// -------q13
// var monthNumber = Number(window.prompt("enter month number"))
// if(monthNumber==1 ||monthNumber==3 ||monthNumber==5 ||monthNumber==8 ||monthNumber==10 || monthNumber==12){
// window.alert("31")
// }else if(monthNumber==2){
//     window.alert("28")
// }else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){

// }else{
//     window.alert("wrong number")
// }

// -----q14
// var physicsMark = Number( window.prompt("enter ur mark physics"))
// var chemistryMark = Number( window.prompt("enter ur mark chemistry"))
// var biologyMark = Number( window.prompt("enter ur mark biology"))
// var mathMark = Number( window.prompt("enter ur mark math"))
// var computerMark = Number( window.prompt("enter ur mark computer"))

// var persentage = (physicsMark+chemistryMark+biologyMark+mathMark+computerMark)/500*100;

// if(persentage>=90){
//     window.alert("geade is A")
// }else if(persentage>=90){
//     window.alert("geade is B")
// }else if(persentage>=80){
//     window.alert("geade is C")
// }else if(persentage>=70){
//     window.alert("geade is D")
// }else if(persentage>=60){
//     window.alert("geade is E")
// }else if(persentage<50){
//     window.alert("geade is F")
// }else{
//     window.alert(erorr)
// }

// -------Q15
// var monthNumber = window.prompt("enter month number")
// switch (monthNumber) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//         window.alert("31");
//         break;
//     case "2":
//         window.alert("28");
//         break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         window.alert("30");
//         break;
// }

// ------q16
// var character =window.prompt("enter ur character")
// switch(character){
//     case"a":
//     case"e":
//     case"i":
//     case"o":
//     case"u":
//     window.alert("vowel")
//     break;
//     default:
//         window.alert("consonant")
//         break;
// }

// ------q17
// var number1 = Number(window.prompt("enter number1"))
// var number2 = Number(window.prompt("enter number2"))

// switch(number1>number2){
//     case true:
//         window.alert("num 1")
//         break;
//         case false:
//             window.alert("num 2") 
//             break
// }

// -------q18
// var number = Number(window.prompt("enter number"))
// switch(number%2==0 ){
//     case true:
//     window.alert("even")
//     break
//     case false:
//         window.alert("odd")
// break
// }

// ------19
// var number = Number(window.prompt("enter number"))

// switch (number > 0) {
//     case true:
//         window.alert("num is positive")
//         break
//     case false:
//         switch (number == 0) {
//             case true:
//                 window.alert("zero")
//                 break;

//             case false:
//                 window.alert("num is negative")
//                 break;
//         }
//         break
// }

// -------Q20
// var number1 = Number(window.prompt("enter number1"))
// var number2 = Number(window.prompt("enter number2"))
// var sign = window.prompt("enter sign")

// switch (sign) {
//     case "+":
//         window.alert(number1 + number2)
//         break
//     case "-":
//         window.alert(number1 - number2)
//         break
//     case "*":
//         window.alert(number1 * number2)
//         break
//     case "/":
//         window.alert(number1 / number2)
//         break
// }

