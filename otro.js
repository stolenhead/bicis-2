 if (name.charAt(0) == name.charAt(0).toLowerCase()){
         var bubble = document.getElementsByClassName("input-box")[0].appendChild(validacion);
  	     bubble.classList.toggle("error");
	     validacion.innerHTML ="La primera letra debe ser Mayuscula";
	    }else{
	        var bubble = document.getElementsByClassName("input-box")[0]
	    }
    
    if(!lastname.match(expreg)) {
        inlineMsg('name','You have entered an invalid name.',2);
        
    return false;
    
	if (expr.test(email)){
	   		true;
	}else{
        var bubble = document.getElementsByClassName("input-box")[2].appendChild(validacion);
  	    bubble.classList.toggle("error");
	    validacion.innerHTML ="La dirección de email es incorrecta.";
	}
	if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")) {
		var bubble = document.getElementsByClassName("input-box")[3].appendChild(validacion);
  	    bubble.classList.toggle("error");
	    validacion.innerHTML ="Contraseña no valida";
	}
	if( document.querySelector("select").value == 0 ){
		var bubble = document.getElementsByClassName("input-box")[4].appendChild(validacion);
  	    bubble.classList.toggle("error");
	    validacion.innerHTML ="Seleccione un tipo de Bici";
    }else{
    	var bubble = document.getElementsByClassName("input-box")[4].appendChild(validacion);
    	var bubble = document.getElementsByClassName("input-box")[4].removeChild(validacion);
    }
};