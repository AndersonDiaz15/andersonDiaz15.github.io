  const Encriptar_mensaje = document.querySelector("#mensaje");
  const resultadoEncriptado = document.querySelector("#resultado");
  const boton = document.querySelector("#botonEncriptado");
  const Desencriptar_mensaje = document.querySelector("#Desencriptar");
  const copiarTexto = document.querySelector("#copiar");
  const imagen = document.querySelector(".img");
  const subtitulo = document.querySelector(".contenedor_texto");
  const parrafo = document.querySelector(".contenedor");
 
 
 
function ocultar() {
  imagen.classList.add("ocultar");
  subtitulo.classList.add("ocultar");
  parrafo.classList.add("ocultar");

  
}
 function encriptartexto() {
  
  var texto = Encriptar_mensaje.value;

if(/[A-Z]/.test(texto) || /[áéíóúÁÉÍÓÚ]/.test(texto)) {
  swal ("Oops...!", "Debes ingresar solo letras minúsculas sin acentos","error");
  Encriptar_mensaje.value = "";
  resultadoEncriptado.value = "";
} else {
  texto = Encriptar_mensaje.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  var textoEncriptado = texto.replaceAll ("e","enter").replaceAll ("i","imes")
  .replaceAll ("a","ai").replaceAll ("o","ober").replaceAll ("u","ufat");
  resultadoEncriptado.value = textoEncriptado;

  if (resultadoEncriptado.value !=0) {
    ocultar();  
  } else {
    swal ("Oops...!", "Debes ingresar un texto","error");
  }
}

}

  
 

 function desencriptador() {
  var texto_encriptado = resultadoEncriptado.value;
  var text = texto_encriptado.replaceAll ("enter","e").replaceAll ("imes","i")
  .replaceAll ("ai","a").replaceAll ("ober","o").replaceAll ("ufat","u");

  resultadoEncriptado.value = text;

  if (resultadoEncriptado.value !=0) {
    ocultar();  
  } else

swal ("Oops...!", "Debes ingresar un texto","error");
  
 }

 function copiar() {
  var  texto = resultadoEncriptado.value;
  navigator.clipboard.writeText(texto);
  if (navigator.clipboard.writeText(texto) !=0) {
    swal ("Copiado correctamente!", " ","success");
  
    
  }
  
 }

copiarTexto.onclick = copiar
boton.onclick=encriptartexto;
Desencriptar_mensaje.onclick = desencriptador;




  

