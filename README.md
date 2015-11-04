# snake
attempt at snake with javascript php and mysql 

to do 
- fix button behaviour on js
- check out syntax for ajax request
  - ajax requests write to a database without a page reload required? 
- create database and table sqlite?  
- hook up database to php
- 
$.ajax({
send request to php file
  url: "snake.php",
send zipcode as one of the parameters 
for me send number true squares eg forloop through each row and count up trues then store in number of square var and send 
  data: {
    number_of_square: 13
  },
  data: {
    zipcode: 97201
  },
if the request works response take what is returned 
  success: function( data ) {

and do domthing with it eg put what is in data into the #weather temp div 
    $( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );
  }
});
