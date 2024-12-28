document.getElementById("btn1").onclick = function(){

let name = "Muhammad"
let fullname = "Ali" 
let all = "!"
let sum = ( name  + " " + fullname + " " + all)

alert(sum)
 
}

document.getElementById("btn2").onclick = function(){

let firstname = prompt("please enter your first name")
console.log("firstName = " , firstname)


let lastname = prompt("please enter your last name")
console.log("lastName = " , lastname)

let fullname = (firstname + " " + lastname)
console.log("fullName = ", fullname ) 

}

document.getElementById("btn3").onclick =function(){

var num1 = +prompt("please enter your first number")
var num2 = +prompt("please enter your second number")
 consol.log("")

if(num1 <= num2 ){
    alert( " Yes your condition is true ")

}else{
   alert(" No your condition is false")  
}

}

document.getElementById("btn4").onclick = function(){


var num1 =14
var num2 =15

if(num1 >= num2){
    alert("your first condition is true")

}else if ( num1 == num2){
    alert("your second condition is true ")

}else if (num1 <= num2){
    alert("your third condition is true")

}else{ 
    alert("no your contition is false")
}

}


document.getElementById("btn5").onclick = function(){

var age = prompt("your age")
var weight = prompt("your weight")

if(age >= 18 && weight <= 80){
    alert("you are a smart boy ")
}else if(age >= 18 && weight > 70 ){
alert("you are a fat guy")
}else{
    alert(" you are a baby")
}

}




document.getElementById("btn5").onclick = function(){

    var age = prompt("your age")
    var weight = prompt("your weight")
    
    if(age >= 18 && weight <= 80){
        alert("you are a smart boy ")
    }else if(age >= 18 && weight > 70 ){
    alert("you are a fat guy")
    }else{
        alert(" you are a baby")
    }
    
    
    }

 document.getElementById("btn6").onclick = function(){

        var age = prompt("your age ?")

       if( age >= 18){


        var weight = prompt("your weight")
        
        if(weight <= 70){
            alert("you are a smart boy ")
        }else {
        alert("you are a fat guy")
        }

    }else{
        alert(" you are a baby")
    }
        
  }
  
 document.getElementById("btn7").onclick = function(){
    var username = prompt(" Enter your username")
    var password = prompt(" Enter your password")
      let originalname="admin"
       let originalpassword = "admin"
if( username === originalname && password === originalpassword){

    alert("user logged in")

}else{
    alert("invilad username & password")
}

 }
 
 document.getElementById("btn8").onclick = function(){
 
alert("All data true")

}

    
    

