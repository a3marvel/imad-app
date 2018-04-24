//counter code
var button = document.getElementById('counter');
var counter = 0 ; 
  
button.onclick= function() {
  //Make a Request to the counter endpoint  
  
  //Capture the response and store in a variable
  
 //Render it into a corrrect span tag
 counter = counter + 1;
 var span = getElementById('count');
 span.innerHTML = counter.toString();
    
};
