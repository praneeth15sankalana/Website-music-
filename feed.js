 function feedback(){
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var comment = document.getElementById("comment").value;

    var valid_name_letters =  /^[a-zA-Z-'. ]+$/;
    var valid_email_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var valid_name = false;
    var valid_email = false;
    var valid_comment = false;

    if(name == ""){
      alert('Please input your Name');
    }
    else if(!(name.match(valid_name_letters))){
      alert('Please input valid name');
    }
    else{
      valid_name = true;
    }

    if(email == ""){
      alert('Please input your Email');
    }
    else if(!(email.match(valid_email_letters))){
      alert('Please input valid email');
    }
    else{
      valid_email = true;
    }

    if(comment == ""){
      alert("Please Enter Your Comment");
    } else{
      valid_comment = true;
    }

    if(valid_name == true && valid_email ==  true && valid_comment == true){
      alert("Dear " + name + ",\nThank you very much for your feedback. Your comment was \"" + comment+"\"");
      document.getElementById("userName").innerHTML = "";
      document.getElementById("userEmail").innerHTML = "";
      document.getElementById("comment").innerHTML = "";
    }
  }




  /**start ratings */
function starmark(item){
  count=item.id[5];
  sessionStorage.starRating = count;
  var subid= item.id.substring(1);
}

function Rate(){
  alert("Thank you very much for your rate.\nYou have rate us by " + count + " out of 5");
}