const liIndicadorUno = document.getElementById("indicadorUno");
const liIndicadorDos = document.getElementById("indicadorDos");

liIndicadorUno.addEventListener("click", function () {
  this.classList.remove("deseleccionado");
  this.classList.add("seleccionado");
  liIndicadorDos.classList.add("deseleccionado");
});

liIndicadorDos.addEventListener("click", function () {
  this.classList.remove("deseleccionado");
  this.classList.add("seleccionado");
  liIndicadorUno.classList.add("seleccionado");
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("#enviarCorreo").click(function () {
    alert("El correo enviado exitosamente...");
  });
  $("#tituloIng").on("dblclick", function () {
    $(this).css({
      color: "red",
    });
  });
  $("#tituloPrep").on("dblclick", function () {
    $(this).css({
      color: "red",
    });
  });
  $(".card-body .card-title").click( function() {
    $(".card-text").toggle();
  });
});
