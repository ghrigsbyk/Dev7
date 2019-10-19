

function setTextContentById(getId, setTxt) {
  //get the element that has an id of greeting 
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setTxt;
  //el.addEventListener('click', reset, false);
}


// Create variables for the welcome message
var greeting = '[not intialized]';
var name = '[not intialized]';
var message = '[not intialized]';
// Concatenate the three variables above to create the welcome message


// Create variables to hold details about the sign
var sign = '[not intialized]';
var shipping =  7;


var tiles = sign.length;
var subTotal = tiles * 5;
var grandTotal = subTotal + shipping;
function initiateVars() {
  greeting = 'Howdy ';
  name = 'Molly';
  message = ', please check your order.';
  sign = 'Montague House';
}


initiateVars();
var welcome = greeting + name + message;



setTextContentById('greeting', welcome);
setTextContentById('userSign', sign);
setTextContentById('tiles',tiles);
setTextContentById('shipping', shipping);
setTextContentById('subTotal', subTotal);
setTextContentById('grandTotal',  grandTotal);


//function reset(){
 // greeting = '[not intialized]';'
 // name = '[not intialized]';
 // message = '[not intialized]';
 // sign = '[not intialized]';
  
 // if (e.preventDefault) {
   // e.preventDefault();
  //} else {
  //  e. returnValue = false;
 // }
  
//}

//reset();

// Note: textContent does not work in IE8 or earlier - see explanation on website