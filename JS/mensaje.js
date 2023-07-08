
$(document).ready(function () {
    let altura = $('.text-area').offset();

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.text-area').addClass('area-fijada');
        } else {
            $('.text-area').removeClass('area-fijada');
        }
    });

});




let msj = [];
let img = [];

let newM = localStorage['texto'];
let newI = localStorage['imagen'];


(function(){
    let nom = localStorage.getItem("nombU");
    let ape = localStorage.getItem("apelU");
    let dep = localStorage.getItem("deparU");
    let dis = localStorage.getItem("distrU");

    if (nom === null || ape === null || dep === null || dis === null) {
        if(window.location.toString().split('/')[3] != 'index.html'){
            alert("Los datos han sido eliminados. Vuelva registrarlo por favor.");
            window.location.href = "index.html";
        }
    }

    if(window.location.toString().split('/')[3] == 'formulario.html'){
        if (nom !== undefined) {
            $('#nomU1').val(nom);
            $('#apeU1').val(ape);
            $('#depaU1').val(dep);
            $('#distU1').val(dis);
        }

    } else if(window.location.toString().split('/')[3] != 'index.html'){
        
        if (newM.length > 0) {
            let m = newM.split(",");
            let im = newI.split(",");
        
            msj = m;
            img = im;
        
            cargarImgText(msj, img);           
        }

    }
    
    
})();


async function cargarImgText(msj, img){
    await mostrarImgText(msj, img);

    localStorage.removeItem('texto');
    localStorage.removeItem('imagen');
}

function mostrarImgText(msj, img){
    for (var i = 0; i < msj.length; i++) {
        //alert(msj[i] + " " + img[i]);
        $(".text-area").append("<div class='mensaje' id='final'><img src='" + img[i] + "'><h1>" + msj[i] + "</h1></div>");
    }
}







function mensaje(urlImg, texto) {
    msj.push(texto);
    img.push(urlImg);

    $(".text-area").append("<div class='mensaje' id='final'><img src='" + urlImg + "'><h1>" + texto + "</h1></div>");
    //document.getElementById('area').scrollIntoView(true);
    let area = document.getElementById('area');
    area.scrollLeft = area.scrollWidth;

    decir(texto);

    window.scrollY = 0;
}





function mensajeMeLlamo(urlImg, texto) {

    let nom = localStorage.getItem("nombU");
    let ape = localStorage.getItem("apelU");

    if (nom === null || ape === null) {
        if(window.location.toString().split('/')[3] != 'index.html'){
            alert("Los datos han sido eliminados. Vuelva registrarlo por favor.");
            window.location.href = "index.html";
        }
    }

    texto += nom + " - " + ape;

    msj.push(texto);
    img.push(urlImg);

    $(".text-area").append("<div class='mensaje' id='final'><img src='" + urlImg + "'><h1>" + texto + "</h1></div>");
    //document.getElementById('area').scrollIntoView(true);
    let area = document.getElementById('area');
    area.scrollLeft = area.scrollWidth;

    decir(texto);

}





function mensajeVivoEn(urlImg, texto) {
    let dep = localStorage.getItem("deparU");
    let dis = localStorage.getItem("distrU");

    if (dep === null || dis === null) {
        if(window.location.toString().split('/')[3] != 'index.html'){
            alert("Los datos han sido eliminados. Vuelva registrarlo por favor.");
            window.location.href = "index.html";
        }
    }

    texto += "departamento de " + dep + " y en el distrito de " + dis;

    msj.push(texto);
    img.push(urlImg);

    $(".text-area").append("<div class='mensaje' id='final'><img src='" + urlImg + "'><h1>" + texto + "</h1></div>");
    //document.getElementById('area').scrollIntoView(true);
    let area = document.getElementById('area');
    area.scrollLeft = area.scrollWidth;

    decir(texto);

}






function leerMensaje() {

    if (msj.length > 0) {
        for (var i = 0; i < msj.length; i++) {
            decir(msj[i]);
        }

    } else {
        alert("No hay mensaje por leer, por favor seleccione un boton para expresar lo que siente.");
    }

}





function borrar() {
    if (msj.length > 0) {
        speechSynthesis.cancel();

        $(".text-area").html("");

        msj.pop();
        img.pop();

        for (var i = 0; i < msj.length; i++) {
            $(".text-area").append("<div class='mensaje' id='final'><img src='" + img[i] + "'><h1>" + msj[i] + "</h1></div>");
        }

    } else {
        alert("No hay mensaje por borrar");

    }

}






function borrarTodoMsj() {
    if (msj.length > 0) {
        speechSynthesis.cancel();

        msj.splice(0, msj.length);
        img.splice(0, img.length);

        $(".text-area").html("");

    } else {
        alert("No hay mensaje por borrar");

    }
}





function cambiarPag() {
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);

    window.location.href = "menuPrincipal.html";
}

function cambiarPag_SobreMi() {
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);

    window.location.href = "sobreMi.html";
}

function cambiarPag_Personas(){
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);

    window.location.href = "personas.html";
} 

function cambiarPag_Numeros(){
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);

    window.location.href = "numeros.html";
} 

function cambiarPag_Cuerpos(){
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);

    window.location.href = "cuerpo.html";
} 

function cambiarPag_Siento(){
    localStorage.setItem('texto', msj);
    localStorage.setItem('imagen', img);

    window.location.href = "comoMeSiento.html";
} 





function decir(text) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}







function abrirForm() {

    if (localStorage.getItem("nombU") == null || localStorage.getItem("apelU") == null || localStorage.getItem("deparU") == null || localStorage.getItem("distrU") == null) {
        let overlay = document.getElementById('overlay');
        let popup = document.getElementById('popup');

        overlay.classList.add('active');
        popup.classList.add('active');

    } else {
        window.location.href = "menuPrincipal.html";
    }
}






function cerrarForm() {
    let overlay = document.getElementById('overlay');
    let popup = document.getElementById('popup');

    $('#nomU').val('');
    $('#apeU').val('');
    $('#depaU').val('');
    $('#distU').val('');

    overlay.classList.remove('active');
    popup.classList.remove('active');
}







function agregarDatos() {
    let nomU = document.getElementById('nomU').value;
    let apeU = document.getElementById('apeU').value;
    let depaU = document.getElementById('depaU').value;
    let distU = document.getElementById('distU').value;

    let expRegular = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    
    if (nomU == '' || apeU == '' || depaU == '' || distU == '') {
        alert("Ingrese todos los datos solicitados por favor.");

    } else if(!expRegular.test(nomU) || !expRegular.test(apeU)){
        alert("Datos invalidos. Por favor, ingrese su nombre o apellido completo sin ningún número o caracter especial (%, $, #, etc).");
        document.getElementById('nomU').value = "";
        document.getElementById('apeU').value = "";
        document.getElementById('depaU').value = "";
        document.getElementById('distU').value = "";

    }else {
        localStorage.setItem("nombU", nomU);
        localStorage.setItem("apelU", apeU);
        localStorage.setItem("deparU", depaU);
        localStorage.setItem("distrU", distU);

        alert("Datos registrados exitosamente");

        window.location.href = "menuPrincipal.html";
    }

}





function modificarDatos() {
    let nomU = document.getElementById('nomU1').value;
    let apeU = document.getElementById('apeU1').value;
    let depaU = document.getElementById('depaU1').value;
    let distU = document.getElementById('distU1').value;

    let nom = localStorage.getItem("nombU");
    let ape = localStorage.getItem("apelU");
    let dep = localStorage.getItem("deparU");
    let dis = localStorage.getItem("distrU");

    let expRegular = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    if (nom === null || ape === null || dep === null || dis === null) {
        alert("Los datos han sido eliminados. Vuelva registrarlo por favor.");
        window.location.href = "index.html";

    } else if (nomU == '' || apeU == '' || depaU == '' || distU == '') {
        alert("Ingrese todos los datos solicitados por favor.");

    } else if(!expRegular.test(nomU) || !expRegular.test(apeU)){
        alert("Datos invalidos. Por favor, ingrese su nombre o apellido completo sin ningún número o caracter especial (%, $, #, etc).");
        
        document.getElementById('nomU1').value = nom;
        document.getElementById('apeU1').value = ape;
        document.getElementById('depaU1').value = dep;
        document.getElementById('distU1').value = dis;

    } else {
        localStorage.setItem("nombU", nomU);
        localStorage.setItem("apelU", apeU);
        localStorage.setItem("deparU", depaU);
        localStorage.setItem("distrU", distU);

        alert("Datos registrados exitosamente");

        window.location.href = "menuPrincipal.html";
    }

}