//por id
/* const contenedor = document.getElementById("menu");

console.log("contenedor\n",contenedor);
console.log("contenido como String del contenedor\n",contenedor.innerHTML); */

//por clase
/* const opcion = document.getElementsByClassName("opcion");
console.log("elementos por clase\n",opcion); */
//console.log("seleccionando un elemento del arreglo",opcion[1]);
//por etiqueta

/* const encabezados = document.getElementsByTagName("h1");
console.log("por tagname ( es un arreglo )\n",encabezados); */


//--------------------------QUERYSELECTORS---------------------------------------//

//por id
//const bycorte = document.querySelector("#bycorte");
//console.log("querySelector por id\n",bycorte);
//bycorte.textContent = "Baño de espuma"; //cambia el texto del elemento
//por clase, selecciona el primero que encuentra


//const primerOpcion = document.querySelector(".opcion"); //selecciona el primer elemento con la clase opcion
//console.log("querySelector por clase\n",primerOpcion);

//combinando selectores
//const primerOpcionSecundario = document.querySelector(".opcion.secundario"); 
//console.log("querySelector primer opcion color secundario\n",primerOpcionSecundario);

//combinando etiquetas y clases
//const primerFondoSecundarioConEtiquetas = document.querySelector("ul li.secundario");
//console.log("querySelector primer fondo secundario con etiquetas\n",primerFondoSecundarioConEtiquetas);



//querySelectorAll
//combinando selectores todos los fondo naranja
//const todosLosFondoSecundarios = document.querySelectorAll(".opcion.secundario");
//console.log("querySelectorAll todos los fondo secundarios [0]\n",todosLosFondoSecundarios[0]);
//console.log("querySelectorAll todos los fondo secundarios [1]\n",todosLosFondoSecundarios[1]);

//querySelectorAll con operadores

//const todosLosFondoPrimario = document.querySelectorAll("ul li:not(.secundario)");
//console.log("querySelectorAll todos los fondo primario 1\n",todosLosFondoPrimario[0]);
//console.log(todosLosFondoPrimario[1].textContent);//muestra el texto del segundo elemento
//agrega a la lista de clases (class="... naranja")
//todosLosFondoPrimario[1].classList.add("naranja") 
//estilos desde javascript
//todosLosFondoPrimario[0].style.backgroundColor = "violet";
//todosLosFondoPrimario[0].style.color = "white"; 

//const desenriedo = document.querySelector("#desenredadoc");
//desenriedo.style.backgroundColor = "pink"; 
//desenriedo.style.color = "#666666" 
//console.log(desenriedo.style); //muestra todos los estilos en linea


//const menu = document.querySelector("#menu");
//Tipos de recoleccion de textos
//console.log(menu);

//console.log("innerHTML\n",menu.innerHTML); //muestra el html completo del contenedor
//console.log("innerText\n",menu.innerText); //muestra el texto completo del contenedor, pero sin etiquetas html
//console.log("textContent\n",todosLosToppings.textContent); //muestra el texto completo del contenedor

//console.log("outerHTML\n",menu.outerHTML); //muestra el html completo del contenedor y su etiqueta padre
//console.log("outerText\n",menu.outerText); //muestra el texto completo del contenedor y su etiqueta padre


//const enlaces = document.getElementsByTagName("a");
//console.log(enlaces);

//console.log("enlaces\n",enlaces[0].getAttribute("href")); //muestra el atributo href del primer enlace
 //eliminar atributo
//enlaces[0].removeAttribute("href"); //elimina el atributo href del primer enlace
//console.log("enlaces\n",enlaces[0].getAttribute("href")); //muestra el atributo href del primer enlace
//modificar atributo
//enlaces[0].setAttribute("href", "https://www.google.com"); //modifica el atributo href del primer enlace


//obtener lista de clases del dom
//const bycorte = document.querySelector("#bycorte"); //selecciona el elemento bycorte
//console.log("clases del bycorte\n",bycorte.classList); //muestra la lista de clases del elemento bycorte


//agregar clase
//bycorte.classList.add("naranja"); //agrega la clase fondo-naranja al primer topping
// eliminar clase
//bycorte.classList.remove("naranja"); //elimina la clase fondo-naranja al primer topping
//verificar si tiene clase
//console.log("tiene clase naranja", bycorte.classList.contains("naranja"));//verifica si el primer topping tiene la clase fondo-naranja


//crear un nuevo elemento
const menu = document.querySelector("#menu");
let alturaMenu = 220;
menu.style.height= `${alturaMenu}px` //selecciona el elemento menu
//const nuevoTratamiento = document.createElement("li"); //crea un nuevo elemento li
//nuevoTratamiento.textContent = "Baño de esponja"; //agrega el texto al nuevo elemento
//nuevoTratamiento.classList.add("opcion"); //agrega la clase topping al nuevo elemento
//nuevoTratamiento.classList.add("primario"); //agrega la clase fondo-naranja al nuevo elemento
//menu.appendChild(nuevoTratamiento); 
//menu.style.height = "230px";    //agrega el nuevo elemento al primer topping

/* function nuevaActividad(actividad, stilo,id) {
    const menu = document.querySelector("#menu");
    alturaMenu += 50; 
    menu.style.height= `${alturaMenu}px`
    const nueva = document.createElement("li"); 
    nueva.textContent = actividad; 
    nueva.classList.add("opcion");
    nueva.classList.add(stilo);
    nueva.setAttribute('id',id); 
    return nueva; 
} */
//const actividadCreada = nuevaActividad("Yoga para perros","primario", "yogapp");
//const actividadCreada2 = nuevaActividad("Caricias con guante blanco","secundario", "cariciagb");  //agrega el nuevo elemento al primer topping
//menu.appendChild(actividadCreada); //agrega el nuevo elemento al primer topping
//menu.appendChild(actividadCreada2);


//con un arreglo
/* const listaDeActividadesArray = [
    {actividad:"Yoga para perros", color:"primario", id:"yogapp"},
    {actividad:"Caricias con guante blanco", color:"secundario", id:"cariciagb"},
    {actividad:"Baño de burbujas", color:"primario", id:"burbujas"},
    {actividad:"Baño de crema", color:"secundario", id:"crema"},
  
]
console.log("lista de actividades\n",listaDeActividadesArray); //muestra la lista de actividades
 */

/* listaDeActividadesArray.forEach((items => {
    const {actividad, color, id} = items; //desestructura el objeto
    const newActivity = nuevaActividad(actividad,color,id); //crea un nuevo elemento li
    menu.appendChild(newActivity);
}));
 */


//eliminar elemento
 //elimina el ultimo elemento de la lista actividades
 //const desenriedo = document.querySelector("#desenredadoc"); //selecciona el elemento desenredado
 //desenriedo.remove();

/* function removeActivity(id) {
    const actividad = document.querySelector(`#${id}`); //selecciona el elemento por id
    actividad.remove(); //elimina el elemento
    alturaMenu -= 50; //disminuye la altura del menu en 20px
    menu.style.height= `${alturaMenu}px` //muestra la altura del elemento menu
} 

removeActivity("desenredadoc"); //elimina el elemento por id
*/

//---------------------RECORRIDO DEL DOM---------------------//


//const bycorte = document.querySelector("#bycorte"); //selecciona el elemento bycorte

//recorrido del dom
//parents
//const padre = bycorte.parentElement; //selecciona el padre del elemento bycorte
//console.log("padre\n",padre); //muestra el padre del elemento bycorte
//encadenar padres
//const abuelo = bycorte.parentElement.parentElement; //selecciona el abuelo del elemento bycorte
//console.log("abuelo\n",abuelo); //muestra el abuelo del elemento bycorte
//hijos
//const hijos = bycorte.children; //selecciona los hijos del elemento
//console.log("hijos\n",hijos); 
//hijos nodo
//const hijosNodo = bycorte.childNodes; //selecciona los hijos del nodo
//console.log("hijos\n",hijosNodo);
//el primer hijo
//const primerHijo = abuelo.firstElementChild; //selecciona el primer hijo del abuelo
//console.log("primer hijo del abuelo (tio o padre)\n",primerHijo); 

//hermano previo de actividad
//const hermanoPrevio = todosLosToppings.previousElementSibling; //selecciona el hermano previo de actividad
//console.log("hermano previo\n",hermanoPrevio); 
//siguiente hermano de actividad
//const hermanoSiguiente = todosLosToppings.nextElementSibling; //selecciona el siguiente hermano de actividad
//console.log("hermano siguiente\n",hermanoSiguiente); 




//eventos


/* function mostrarClickHandler(e){
    console.log(e.target.innerText);
    alert(`Click en: ${e.target.innerText}`); //muestra un alert al hacer click en el contenedor
    
}  */

//const bycorte = document.querySelector("#bycorte");

//bycorte.addEventListener('click',mostrarClickHandler);

/* function addEventListenerHandler(id){
    const actividad = document.querySelector(`#${id}`);
    actividad.style.cursor = "pointer"; 
    actividad.addEventListener('click', mostrarClickHandler);
    
}

addEventListenerHandler("corteu");
addEventListenerHandler("limpiezao");
addEventListenerHandler("desenredadoc"); */

