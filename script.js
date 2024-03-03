let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}






document.addEventListener("DOMContentLoaded", function() {
   var statusElement = document.getElementById("status-fixed");
   var statusDiv = document.getElementById("status-div-fixed");
   var now = new Date();
   var currentDay = now.getDay();
   var currentHour = now.getHours();
   var currentMinutes = now.getMinutes();

   // Check if it's Sunday
   if (currentDay === 0) {
       var isOpen = (currentHour > 8 || (currentHour === 8 && currentMinutes >= 30)) && currentHour < 14;
       // Sunday hours: 8:30 AM to 1 PM
   } else {
       // For other days, business hours are from 8:30 AM to 8 PM
       var isOpen = (currentHour > 8 || (currentHour === 8 && currentMinutes >= 30)) && currentHour < 21;
   }

   if (isOpen) {
       statusElement.textContent = "Open";
       statusElement.style.color = "rgb(0, 255, 0)"; // Adjust color for open status
       statusDiv.style.background = "rgb(50,50,50,0.6)"; // Adjust color for open status
      } else {
         statusElement.textContent = "Closed";
         statusElement.style.color = "red"; // Adjust color for closed status
         // statusDiv.style.background = "gray"; // Adjust color for open status
         statusDiv.style.background = "rgb(50,50,50,0.6)"; // Adjust color for open status

   }
});





document.addEventListener("DOMContentLoaded", function() {
   var statusElement = document.getElementById("status");
   var statusDiv = document.getElementById("status-div");
   var now = new Date();
   var currentDay = now.getDay();
   var currentHour = now.getHours();
   var currentMinutes = now.getMinutes();

   // Check if it's Sunday
   if (currentDay === 0) {
       var isOpen = (currentHour > 8 || (currentHour === 8 && currentMinutes >= 30)) && currentHour < 14;
       // Sunday hours: 8:30 AM to 1 PM
   } else {
       // For other days, business hours are from 8:30 AM to 8 PM
       var isOpen = (currentHour > 8 || (currentHour === 8 && currentMinutes >= 30)) && currentHour < 21;
   }

   if (isOpen) {
       statusElement.textContent = "Open";
       statusElement.style.color = "rgb(0, 255, 0)"; // Adjust color for open status
       statusDiv.style.display = "inline-block"; // Adjust color for open status
       statusDiv.style.paddingLeft = "10px"; // Adjust color for open status
       statusDiv.style.paddingRight = "10px"; // Adjust color for open status
       statusDiv.style.borderRadius = "0px"; // Adjust color for open status
       statusDiv.style.background = "#2597f4cc"; // Adjust color for open status
       statusDiv.style.background = "rgb(0,0,0,0.9)"; // Adjust color for open status

      statusDiv.style.background = "gray"; // Adjust color for open status
      statusDiv.style.borderRadius = "5px"
      statusDiv.style.boxShadow = "gray 0px 4px 8px "
   } else {
       statusElement.textContent = "Closed";
       statusElement.style.color = "red"; // Adjust color for closed status
       statusDiv.style.display = "inline-block"; // Adjust color for open status
       statusDiv.style.paddingLeft = "10px"; // Adjust color for open status
       statusDiv.style.paddingRight = "10px"; // Adjust color for open status
       statusDiv.style.borderRadius = "10px"; // Adjust color for open status
       statusDiv.style.background = "black"; // Adjust color for open status

       statusDiv.style.background = "gray"; // Adjust color for open status
       statusDiv.style.borderRadius = "5px"
       statusDiv.style.boxShadow = "gray 0px 4px 8px "

   }
});



// function initMap() {
//    const mapOptions = {
//      center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco, CA
//      zoom: 12, // Adjust the zoom level as needed
//    };
 
//    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
//  }
 


