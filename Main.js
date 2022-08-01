/*$(function () {  //Se ejecutara cuando termine de cargar el sitio 
    $('[data-bs-toggle="tooltip"]').tooltip()
})*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})