/* tooltip de bootstrap */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("document").ready(function () {

  //manejador del formulario de contacto
  $("#formContacto").submit(function (e) {
    e.preventDefault();
    //capturamos los datos del form en un array
    const formData = $(this).serializeArray()
    //console.log(formData);
    //Creamos el componente para agregar al modal-body
    let componente = "";
    formData.forEach(elemento => {
      console.log(elemento)
      const label = elemento.name;
      const value = elemento.value;
      componente += `
        <div class="d-block">
          <label class="text-black" for="${elemento.name}">${label}</label>
          <p class="text-black" id="${elemento.name}">${value}</p>
        </div>
      `;
    });

    // Limpiamos el modal body
    $("#modalContacto .modal-body").empty();
    // Agregamos el componente al modalBody
    $("#modalContacto .modal-body").append(componente);
    //mostramos el modal
    $("#modalContacto").modal("show");
  });

  // confirmamos si el boton de confirmar en el modal fue clickeado.
  $("#modalContacto .btn").click(function (e) {
    //capturamos el id del boton
    const buttonId = $(this).attr('id');
    if (buttonId === "btnConfirmar") {
      alert("formulario enviado")
      //con modal hide simulamos el envio exitoso de la data al servidor.
      $("#modalContacto").modal("hide");
      //$("#formContacto").submit();
    }
  })

});