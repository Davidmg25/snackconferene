function validar() {
    let nombre, apellidos, correo, usuario, password, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("password").value;
    telefono = document.getElementById("telefono").value;
  
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellidos ==="" || correo === "" || usuario=== "" || password === "" || telefono === "" )
    {
        alert("Todos los campos son obligatorios")
        return false;
    }
    else if(nombre.length>30)
    {
    alert("El nombre es muy largo")
    return false;
    }
    else if(apellidos.length>50) {
        alert("El apellido es muy largo")
        return false;
    }
    else if(correo.length>100)
    {
        alert("El correo esta demasiado largo verificalo")
        return false;
    }
    else if(!expresion.test(correo))
    {
        alert("El correo no es valido  verificalo")
        return false;
    }
    else if(usuario.length>20 || password.length>20)
    {
        alert("El usuario o la contraseña sobrepasa los caracteres permitidos que son 20")
    }
    else if(telefono.length>12)
    {
        alert("El telefono esta muy largo verificalo")
        return false;
    }
    else if(isNaN(telefono))
    {
        alert("El telefono brindado no es un numero");
        return false;
    }
}