function validateForm(){
	/* Escribe tú código aquí */
var name = document.getElementById("name").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var inputPassword = document.getElementById("input-password").value;
var formControl = document.querySelector("select.form-control").value;
var contra = document.getElementById("input-password").value;
var validacion = document.createElement("span");
var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var expreg = /^[a-z][a-z]*/;

  if(!name.match(expreg)) {
    inlineMsg('name','You have entered an invalid name.',2);
    return false;
  }
  if(email == "") {
    inlineMsg('email','<strong>Error</strong><br />You must enter your email.',2);
    return false;
  }
  if(!email.match(emailRegex)) {
    inlineMsg('email','<strong>Error</strong><br />You have entered an invalid email.',2);
    return false;
  }
  if(inputPassword == "") {
    inlineMsg('gender','<strong>Error</strong><br />You must select your gender.',2);
    return false;
  }
  if(contra == "") {
    inlineMsg('message','You must enter a message.');
    return false;
  }
  if(!lastname.match(expr)) {
    inlineMsg('name','You have entered an invalid name.',2);
    return false;
  }

  function inlineMsg(target,string,autohide) {
  var msg;
  var msgcontent;
  if(!document.getElementById('msg')) {
    msg = document.createElement('div');
    msg.id = 'msg';
    msgcontent = document.createElement('div');
    msgcontent.id = 'msgcontent';
    document.body.appendChild(msg);
    msg.appendChild(msgcontent);
    msg.style.filter = 'alpha(opacity=0)';
    msg.style.opacity = 0;
    msg.alpha = 0;
  } else {
    msg = document.getElementById('msg');
    msgcontent = document.getElementById('msgcontent');
  }
  msgcontent.innerHTML = string;
  msg.style.display = 'block';
  var msgheight = msg.offsetHeight;
  var targetdiv = document.getElementById(target);
  targetdiv.focus();
  var targetheight = targetdiv.offsetHeight;
  var targetwidth = targetdiv.offsetWidth;
  var topposition = topPosition(targetdiv) - ((msgheight - targetheight) / 2);
  var leftposition = leftPosition(targetdiv) + targetwidth + MSGOFFSET;
  msg.style.top = topposition + 'px';
  msg.style.left = leftposition + 'px';
  clearInterval(msg.timer);
  msg.timer = setInterval("fadeMsg(1)", MSGTIMER);
  if(!autohide) {
    autohide = MSGHIDE;  
  }
  window.setTimeout("hideMsg()", (autohide * 1000));
}





	    //Seleccionar una opción

		
	   



 
