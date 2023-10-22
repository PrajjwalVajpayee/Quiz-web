function MyFunction(){
    window.location.href="instruction.html";
}
function text(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;

    var name=localStorage.setItem("Name",username);
    var user_email=localStorage.setItem("Email",email);
    var pas=localStorage.setItem("Password",password);

    if(username.length==0 || email.length==0 || password.length==0){
        alert("PLEASE PROVIDE THE INFORMATION TO ENTER THE QUIZ");
    }
}
const quizques= 
 [ 
    {
   question: "what is the capital of Uttar-Pradesh?",
   option:[
      "Lucknow",
      "Delhi",
      "Haryana",
      "Tripura",
   ],
   correct:1,
   limit:30,
},

{
    question: "what is the capital of India?",
    option:[
       "Lucknow",
       "Delhi",
       "Banglore",
       "Tripura",
    ],
    correct:2,
    limit:30,
 },

 {
    question: "what is the capital of Andhra Pradesh?",
    option:[
       "Lucknow",
       "Delhi",
       "Hyderabad",
       "Kerela",
    ],
    correct:3,
    limit:30,
 },

 {
    question: "what is the capital of Assam ?",
    option:[
       "Chandigarh",
       "Himachal Pradesh",
       "Haryana",
       "Dispur",
    ],
    correct:4,
    limit:30,
 },

 {
    question: "what is the capital of Gujarat ?",
    option:[
       "Chandigarh",
       "India",
       "Patna",
       "Gandhinagar",
    ],
    correct:4,
    limit:30,
 },
 ];