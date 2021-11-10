        function validar(){
            document.getElementById("errores").innerHTML = "";
            var nom = document.getElementById("nom").value.trim();
           /* if(!nom){
                alert("Debe ingresar un nombre");
                return false;
            } */
            var ape=document.getElementById("ape").value.trim();
           /* if(!ape){
                alert("Debe ingresar un apellido");
                return false;
            }*/
            var tel=document.getElementById("tel").value;
            /*if (isNaN(tel)||!tel){
                alert("Debe ingresar sólo números, el código de área y luego el número");
                return false;
            }*/
            var email = document.getElementById("mail").value;
            var correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            /*if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
            alert("La dirección de email es correcta.");
            } else {
            alert("La dirección de email es incorrecta.");
            return false;}*/

            var cons=document.getElementById("msg").value;
            /*if (cons== ""){
                alert("Debe ingresar un comentario");
                return false;
            }*/
 
            var errores = [];
            if(!correo.test(email)){
                errores.push("La dirección de email es incorrecta.");
                document.getElementById("mail").style.border = "1px solid red";
            }
            else {
                document.getElementById("mail").style.border = "";
            }
            if(!nom){
                errores.push("Debe ingresar un nombre");
                document.getElementById("nom").style.border = "1px solid red";
            }
            else {
                document.getElementById("nom").style.border = "";
            }
            if(!ape){
                errores.push("Debe ingresar un apellido");
                document.getElementById("ape").style.border = "1px solid red";
            }
            else {
                document.getElementById("ape").style.border = "";
            }
            if (isNaN(tel)||!tel){
                errores.push("Debe ingresar sólo números, el código de área y luego el número");
                document.getElementById("tel").style.border = "1px solid red";
            }
            else {
                document.getElementById("tel").style.border = "";
            }
            if (cons== ""){
                errores.push("Debe ingresar un comentario");
                document.getElementById("msg").style.border = "1px solid red";
            }
            else {
                document.getElementById("msg").style.border = "";
            }

            if (errores.length>0) {
                var cartel = "<ul>";
                for(var i=0; i<errores.length; i++){
                    cartel += "<li>" + errores[i] + "</li>";
                }
                cartel += "</ul>";
                document.getElementById("errores").innerHTML = cartel;
                return false;
            }
        function resetForm() {
                document.fvalida.nombre.style.backgroundColor='white';


            }

            let li = document.createElement('li');
            li.innerHTML = "Contacto enviado por: " + nom + " " + ape + ", con correo: " + email;
            let lista = document.getElementById('visitas');
            lista.appendChild(li);
            
            return false;
        }

        var indice=1;
        mostrarFoto(indice);
        function navegarFoto(n) {
            indice += n;
            mostrarFoto(indice);
            // fotos.style.transition="all 0.5s";    
        }
        function fotoActual(n) {
            indice = n;
            mostrarFoto(indice);
        }
        function mostrarFoto(n) {
            var i;
            var fotos = document.getElementsByClassName("imgPortada");
            if (n > fotos.length){
                indice = 1;
            }
            if (n < 1) {
                indice = fotos.length;
            }
            for (i=0; i<fotos.length; i++) {
                fotos[i].style.display = "none";
            }
            fotos[indice-1].style.display = "block";
            
        }
        setInterval(function(){
            navegarFoto(1);
        }, 4000);

  