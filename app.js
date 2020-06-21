// chapter 21-25

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert(fullName)

// var fav = prompt("What is your favourite mobile phone model?")
// var str = ("My favourite phone is:" + " " + fav)
// var n = fav.length
// alert(str)
// alert("Length of string is" + " " +n)


// var pak = ("Pakistani")
// document.write ("String:" + " " + pak  + "<br>" + "<br>" )  
// document.write ("Index of 'n':" + " "  + pak.indexOf("n")) 

// var last =("Hello World")
// document.write ("String:" + " " + last  + "<br>" + "<br>" )  
// document.write ("Index of 'l':" + " "  + last.lastIndexOf("l"))

// var pak = ("Pakistani")
// document.write ("String:" + " " + pak  + "<br>" + "<br>" )  
// document.write ("Character at index 3:" + " "  + pak.charAt("3")) 

// var str1 = prompt("Enter your first name");
// var str2 = prompt("Enter your last name");
// var fullName = str1.concat( " " +str2)
// alert (fullName)

// var hyd = ("Hyderabad")
// document.write ("City:" + " " + hyd  + "<br>" + "<br>" )  
// document.write ("After replacement:" + " "  + hyd.replace("Hyder" , "Islam")) 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write (message + "<br>" + "<br>" ) 
// document.write ("After replacement:" + " "  + message.replace(/and/g , "&") ) 

// var val = "472"
// var num = parseInt(val)
// document.write ("Value:" + " " + val + "<br>" + "<br>")
// document.write ("Type: " + typeof( val) + "<br>" + "<br>")
// document.write ("Value:" + " " + num + "<br>" + "<br>")
// document.write ("Type: " + typeof(num) + "<br>" + "<br>")

// var pea = prompt("Write anything")
// document.write ("User input:" + " " + pea  + "<br>" + "<br>" )  
// document.write ("Upper case:" + " "  + pea.toUpperCase()) 

// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase(prompt("enter anything"));

// var num = 35.36
// var string = num.toString()
// document.write ("Number:" + " " + num  + "<br>" + "<br>" )
// document.write ("Result :" + " " + string.replace(".",""))


// var special = prompt("Enter username");
// if (special === "@" || "." || "," || "!") {alert(" Enter a valid username. ")
    
// } else {  alert ("Username confirm") 
// }


// var bake = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?")
// bake = bake.toLowerCase()    
// var savour = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// for (var i=0; i<savour.length; i++) {
// if (savour[i] === bake) {alert("We have it at our bakery")      
//      break
// } else {alert("We donot have it at our bakery " ) 
// break
// }}
 

// var pass = prompt("Enter Password");
// if (pass == /[a-z]/g  /[0-9]/g ) {
//     alert("asda")
// } else {
//     alert("asd")
// } 

// var university = "University of Karachi";
// var ar = university.split("") 
// document.write (ar)

// var myString = prompt("Enter anything");
// document.write ("User input:" +" " + myString + "<br>" + "<br>" )
// document.write ("Last character of input:" +" " + myString[myString.length-1])

// var occ = "The quick brown fox jumps over the lazy dog" 
// alert    (occ.match(/the/g)).length




//chapter 26-30

// var num = prompt("Enter any positive integer")
// document.write ("number:" + " " + num + "<br>" + "<br>" )
// document.write ("round off value:" + " " + Math.round(num) + "<br>" + "<br>" )
// document.write ("floor value:" + " " + Math.floor(num) + "<br>" + "<br>" )
// document.write ("ceil value:" + " " + Math.ceil(num))


// var neg = prompt("Enter any negative floating point")
// document.write ("number:" + " " + neg + "<br>" + "<br>" )
// document.write ("round off value:" + " " + Math.round(neg) + "<br>" + "<br>" )
// document.write ("floor value:" + " " + Math.floor(neg) + "<br>" + "<br>" )
// document.write ("ceil value:" + " " + Math.ceil(neg))

// var absol = prompt("Enter any value")
// document.write ("The absolute value of" + " " + absol + " "  + "is " + Math.abs(absol) + "<br>" + "<br>" )


// var dice = Math.random() * 6 + 1;
// var dior = Math.floor(dice);
// document.write ("Random dice value :" + " " + dior)


// var toss = Math.random() * 2 ;
// var floor = Math.floor(toss);
// if (floor === 0 ) {

//     document.write (floor + "<br>" + "Random coin value: Heads" )
    
// } else {
//     document.write (floor + "<br>" + "Random coin value: tails" )
// }

// var ran = Math.floor(Math.random() * 100) + 1;
// document.write ("random number between 1- 100:" + " " + ran)





// var special = prompt("Enter any number between 1 - 10 ")
// if (special == 9) {
//     alert("Congratulations")
    
// } else {
//     alert("Try again")
// }


//chapter 31 - 34

// var a = new Date()
// document.write (a)

// var month = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
// var now = new Date()
// var day = now.getMonth()
// var that = month[day]
// document.write ("Current month:" + " " + that)

// var daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var now = new Date()
// var day = now.getDay()
// var that = daynames[day]
// alert ("Today is" + " " + that.slice(0,3))

// var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
// var now = new Date()
//  var day = now.getDay()
// var that = daynames[day]
// switch (daynames) {
// case "saturday":
//     alert("Its Fun Day");
//     break;
//     case 0:
//        alert("Its Fun Day"); 
//        break;
//        default :
//        alert(that);
// break
// }





// var d = new Date();
// var t = d.getTime();
// var v = t / (1000 * 60  )
// document.write("Current Date: " + " " + d + "<br>" + "<br>")
// document.write("Elapsed Milliseconds since january 1,1970 :" + " " + t + "<br>" + "<br>")
// document.write("Elapsed Minutes since january 1,1970 :" + " " + v + "<br>" + "<br>")

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime =  ampm;
//     return strTime;
//   }
//   alert(formatAMPM(new Date));

// var actualDate = new Date()
// var eoYear = new Date(actualDate.getFullYear() ,12, 0 )
// alert ("later date:" + " " + eoYear)

//chapter 35 - 38




// function agecalc(){
// var dob = new Date("April 24, 2020")
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24))
// document.write(accuage + " " + "days have passed since 1st Ramadan ,2020");
// }

// agecalc();



// function abc(){
//     var a = new Date()
//     alert(a)
// }
// abc()

// function whole(){
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert(fullName)
// }

// whole()


// function add() {
//     var value1= +prompt("Enter your first value")
//     var value2= +prompt("Enter your second value")
//     var Result = value1 + value2
//     alert (Result)
// }

// add()


// function calc(){
//         var num1 = +prompt("Enter your first value")
// var opr = prompt("Enter operator")
// var num2 = +prompt("Enter your second value")
//     if (opr === "+") {
//         alert (num1 + num2)
//     }
//    else if (opr === "-")
//     {alert (num1 - num2)}

// else if (opr === "*")
//     {alert (num1 * num2)}

// else if (opr === "/")
//     {alert (num1 / num2)}

//     else {
//         alert ("Wrong operator")
//     }
// }
// calc()








// function angle(){
// var base = +prompt ("Enter value for base")
// var perp = +prompt ("Enter value for perpendicular")
// var hyp = (base * base) + (perp * perp)
// alert ("The value of hypotenuse is:" + " " +  hyp)
// }
// angle() 