// Get the current date and time
let currentDateTime = new Date();       // Create a new Date object representing the current date and time
let hour = currentDateTime.getHours();  // Extract the current hour (0–23)

// Select the greeting element in the HTML
let message = document.getElementById("greeting"); // Get the paragraph element with id="greeting"

// Determine greeting based on the hour
if(hour >= 5 && hour <= 11){
    // Morning: 5 AM to 11 AM
    message.innerText = "Good morning!";
}
else if(hour > 11 && hour <= 17){
    // Afternoon: 12 PM to 5 PM
    message.innerText = "Good afternoon!";
}
else if(hour > 17 && hour <= 21){
    // Evening: 6 PM to 9 PM
    message.innerText = "Good evening!";
}
else{
    // Night: 10 PM to 4 AM
    message.innerText = "Good night!";
}
