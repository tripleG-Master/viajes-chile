![viajes-chile](https://raw.githubusercontent.com/tripleG-Master/viajes-chile/main/favicon.ico<hr>)

<hr>

# PRUEBA EVALUADA VIAJES-CHILE

### Mi proyecto utiliza las siguientes tecnologías:
HTML, CSS, JAVASCRIPT y JQUERY. 

### El estilizado esta dado por:
BOOTSTRAP, FONTAWESOME y GOOGLE FONTS

Este sitio fue creado con la intencion de mostrar mi progreso dentro del bootcamp Ruby on Rails del programa Talento Digital para Chile.

### Estilo
El diseño del sitio es responsivo. Existen elementos que se ocultan según el tamaño de la pantalla, mientras que otros se acomodan para una mejor visualización.

El navbar posee un fondo transparente que armoniza con la estetica del sitio, pudiendo ser visto en su totalidad sin interponerse al contenido del mismo. Ademas los elementos nav-brand y nav-link del navbar tiene un pequeño sombreado, ya que al ser blancos podrian no ser apreciados cuando se encuentren sobre otros elementos, de la misma forma que tienen agregado un efecto hover para una mejor apreciacion.

Los elementos img tienen tamaños height determinados o maximos, para que los componentes no crezcan demasiado al momento de variar el tamaño de la pantalla.

La gran mayoria de los componentes fueron estilizados con bootstrap, tales como el display, margin y padding y el contenido justificado center o evenly, de los cuales ademas tienen responsividad usando los breakpoint lg, md, sm, etc.

### Componentes
Los principales componentes llamativos en mi sitio son:
- ScrollSpy en navbar para una mejor navegación.
- Carusel de imagenes en la section Hero.
- Tooltip en el botón Enviar del formulario de contacto.
- Modal de confirmación del formulario.

Cada uno de ellos fueron pensados para dar una experiencia mas fresca a la vista y una funcionalidad mayor frente a nuevas necesidades que hubiese que aplicar al mismo sitio, tomando en cuenta que es un landing page.

### Javascript y Jquery
El archivo script.js contiene la lógica necesaria para que todo funciones acorde a los eventos esperados.

Posee la funcion necesaria para el funcionamiento del tooltip de bootstrap, y el actuar tanto del formulario de contacto como del modal de confirmación.

Si bien el archivo posee comentarios para su entendimiento, en escencia tiene 2 elementos importantes:
- El handler del evento submit. 
- El click del botón del modal.
  
El primero es algo mas complejo.
Primero previene el evento submit por defecto, luego captura la data agregada serialize(). Crea un variable componente donde estará el contenido a renderizar dentro del modal, para luego invocar el metodo forEach y recorrer los elementos dentro de componentes, con la finalidad de poder extraer cada uno de las propiedades de los objetos dentro y crear el div.d-block con el label y parrafo con los valores extraidos.
Luego limpia el modal-body para realizar el append con la nueva informacion y mostrar el modal.


El segundo elemento, el boton del modal modalContacto.
La funcionalidad es básica pero muy poderosa. Este consta de un selector JQuery $(#modalContacto .btn") gatillado por el click al mismo, y preguntando por el id del boton, si este coincide con el id "btnConfirmar" envia una alerta indicando que se confirmó el envío de la información, todo esto para simular una real funcionalidad del codigo, para luego ocultar el modal con .modal("hide").

