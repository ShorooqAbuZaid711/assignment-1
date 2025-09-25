let currentDateTime = new Date();
let hour = currentDateTime.getHours();
let message = document.getElementById("greeting");
if(hour >= 5 && hour <= 11){
    message.innerText= "Good morning!";
}
else if(hour > 11 && hour <= 17){
    message.innerText = "Good afternoon!";
}
else if(hour > 17 && hour <= 21){
    message.innerText = "Good evening!";
}
else{
    message.innerText = "Good night!";
}