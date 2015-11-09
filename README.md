# snake
attempt at snake with javascript php and mysql 

to do 
- fix button behaviour on button - research event handler to include clicks 
- add extra column on existing database 
- reset starting position 
- add name input 
- 

# H1 What is an ajax request: 
Ajax, or Asynchronous JavaScript and XML, is an approach to Web application development that uses client-side scripting to exchange data with the Web server. As a result, Web pages are dynamically updated without a full page refresh interrupting the interaction flow.

With Ajax, you can create richer, more dynamic Web application user interfaces.i.e. client side. On the other hand servlet requests are on server side to handle request sent from the UI.

When the visitor requests a page, the server will send the full HTML and CSS code at once. After the visitor fills in a form and submits it, the server processes the information( Servlet Request object provides client request information to a servlet. The servlet container creates a ServletRequest object and passes it as an argument to the servlet's service method) and rebuilds the page. It then sends the full page back to the client. And so on.

When using AJAX, the page is loaded entirely only once, the first time it is requested. Besides the HTML and CSS code that make up the page, some JavaScript files are also downloaded: the AJAX engine. All requests for data to the sever will then be sent as JavaScript calls to this engine. The AJAX engine then requests information from the web server asynchronously ( servlet request object contains request parameters,which have got changed). Thus, only small page bits are requested and sent to the browser, as they are needed by the user. The engine then displays the information without reloading the entire page. This leads to a much more responsive interface, because only the necessary information is passed between the client and server, not the whole page.

For more info on ajax implementation we can refer http://www.ibm.com/developerworks/library/j-ajax1/

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

$.ajax({
  type:"POST",
  url: "snake.php", 
  data: { count: 'value here', game_id: 'value here'} 
})

current error message: 
mysqli_query() expects parameter 1 to be mysqli, null given in 

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest 
http://blog.teamtreehouse.com/beginners-guide-to-ajax-development-with-php  
https://github.com/carpedm20/snake-web https://github.com/Pnatani/Snake-Game/blob/master/Snake.php

http://cdn.tutorialzine.com/wp-content/uploads/2010/02/i3.png

 non ajax submission of name: 
 and php   
 $gamer_id = $_POST['fname'];
  $score = $_POST['tile_count'];

 $query = "INSERT INTO tile_game_count (fname, tile_count) VALUES ('$score', '$gamer_id')"; // Explain SQL Injection to me and how it can be prevented

                <span id="user_action">

                    <form id="name_form" method="post" action="snake.php">
                        <label for="fname">First name:</label><input type="text" id="fname" name="fname"><br>
                        <input class="button" type="submit" value="Submit">
                    
                    </form>
                    
                    <button class="button" onclick="restart();">Restart</button>
                
                </span>
