//counter code
var button = document.getElementById('counter');
  
button.onclick= function() {
  //Make a Request to the counter endpoint  
  var request = new XMLHttpRequest();
  
  
  
  
  //Capture the response and store in a variable
  
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take SOme Action
          if(request.status===200){
            var counter=request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
          }
          
      }
      
      
  };
  //Create request object
  request.open('GET','http://a3deswal.imad.hasura-app.io/counter',true);
  reqyest.send(null);
    
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Reqst to server and send name
    
    //CApture a list of name
  var names = ['name1','name2','name3','name4'];
  var list='';
  for (var i=0;i<names.length; i++){
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.inerHTML = list;
};
  
      
    
