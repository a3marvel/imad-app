//counter code
var button = document.getElementById('counter');
var counter = 0 ; 
  
button.onclick= function() {
  //Make a Request to the counter endpoint  
  var request = new XMLHttpRequest();
  
  
  
  
  //Capture the response and store in a variable
  
  request.onreadystatechange = function(){
      
      
  }
  
 //Render it into a corrrect span tag
 counter = counter + 1;
 var span = document.getElementById('count');
 span.innerHTML = counter.toString();
    
};
