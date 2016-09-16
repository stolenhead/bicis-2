function validateForm(){
	var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var contra = document.getElementById("input-password").value;

    var cuadroDeValidacion = document.createElement("span");
    var cuadroDeValidacion2 = document.createElement("span");
    var cuadroDeValidacion3 = document.createElement("span");
    var cuadroDeValidacion4 = document.createElement("span");
    var cuadroDeValidacion5 = document.createElement("span");

    //Email
    var expr = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (expr.test(inputEmail) ){
    	var cuadroNegro = document.getElementsByClassName("input-box")[2];
    	verificar(cuadroNegro.getElementsByTagName("span")[0], cuadroNegro);
    }

    else if(inputEmail == ""){
    	var cuadroNegro = document.getElementsByClassName("input-box")[2];
    	cuadroNegro.appendChild(cuadroDeValidacion);
    	cuadroDeValidacion.innerHTML= "Verifique su E-mail";
    	cuadroNegro.classList.toggle("error");
    }
        
    else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[2];
    	cuadroNegro.appendChild(cuadroDeValidacion);
        cuadroDeValidacion.innerHTML= "Verifique su E-mail";
        cuadroNegro.classList.add("error");
    }

    //Seleccionar una opción

    if( document.querySelector("select").value == 0 ){
    	var cuadroNegro = document.getElementsByClassName("input-box")[4];
   		cuadroNegro.appendChild(cuadroDeValidacion2);
        cuadroDeValidacion2.innerHTML= "Ingrese una opción";
        cuadroNegro.classList.add("error");
    } else {
    	var cuadroNegro = document.getElementsByClassName("input-box")[4];
    	verificar(cuadroNegro.getElementsByTagName("span")[0], cuadroNegro);
    }

    //Contraseña
    if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")){
    	var cuadroNegro = document.getElementsByClassName("input-box")[3];
   		cuadroNegro.appendChild(cuadroDeValidacion3);
        cuadroDeValidacion3.innerHTML= "La contraseña tiene que tener al menos 6 caracteres";
        cuadroNegro.classList.add("error");
    }else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[3];
    	verificar(cuadroNegro.getElementsByTagName("span")[0], cuadroNegro);
    }

    //Para los campos nombre y apellido la primera letra debe ser mayúscula
    //name 
    if (name.charAt(0) == name.charAt(0).toLowerCase() && name.lenght >0){
        var cuadroNegro = document.getElementsByClassName("input-box")[0];
   		cuadroNegro.appendChild(cuadroDeValidacion4);
        cuadroDeValidacion4.innerHTML= "La primera letra es con mayúscula.";
        cuadroNegro.classList.add("error");
    }else if (name == ""){
        var cuadroNegro = document.getElementsByClassName("input-box")[0];
   		cuadroNegro.appendChild(cuadroDeValidacion4);
        cuadroDeValidacion4.innerHTML= "Debe ingresar su nombre.";
        cuadroNegro.classList.add("error");
    }else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[0];
    	verificar(cuadroNegro.getElementsByTagName("span")[0], cuadroNegro);
    }
    
    //lastname
    if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
        var cuadroNegro = document.getElementsByClassName("input-box")[1];
   		cuadroNegro.appendChild(cuadroDeValidacion5);
        cuadroDeValidacion5.innerHTML= "La primera letra es con mayúscula.";
        cuadroNegro.classList.add("error");
   	}else if(lastname == ""){
        var cuadroNegro = document.getElementsByClassName("input-box")[1];
   		cuadroNegro.appendChild(cuadroDeValidacion5);
        cuadroDeValidacion5.innerHTML= "Debe ingresar su nombre.";
        cuadroNegro.classList.add("error");
    }else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[1];
    	verificar(cuadroNegro.getElementsByTagName("span")[0], cuadroNegro);
    }
}

function verificar(a,b){
	if( a!= null)
        b.removeChild(a);
    else
    	true;
}