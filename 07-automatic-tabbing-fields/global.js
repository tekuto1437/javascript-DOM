window.onload = function() {

    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
  
  first.addEventListener("keyup", function(){
    inputChar = first.value.length;
    fullCell = parseInt(first.getAttribute("maxlength"));
  
      if (input_char === full_cell) {
        second.focus();
      }
    });
  second.addEventListener("keyup", function(){
    inputChar = second.value.length;
    fullCell = parseInt(second.getAttribute("maxlength"));
    
      if (input_char === full_cell) {
        third.focus();
      }
    });
    
};