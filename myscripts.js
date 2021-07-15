var totalPrice = 0;

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newItem(x, y, z, m) {
  var li = document.createElement("li");
  var inputValue = x;
  var inputSize = document.getElementById(z).value;
  var inputQuantity = document.getElementById(m).value;
  var value =
    inputValue +
    "\t " +
    inputSize +
    "\t " +
    inputQuantity +
    "\t " +
    inputQuantity * y +
    "\t ";
  var t = document.createTextNode(value);

  li.appendChild(t);
 
  if (inputSize === "") {
    alert("Please Select a Size");
  } else {
    document.getElementById("myUL").appendChild(li);
	
    totalPrice += inputQuantity * y;
	
    var element = document.getElementById("tot");
	
    element.innerHTML = totalPrice;
	alert("Your total price is:"+totalPrice);
  }
  document.getElementById("item1 ").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
