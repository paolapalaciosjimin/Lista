let nombre = document.getElementById("nombres");
let celular= document.getElementById("celular");
let insertar_btn = document.getElementById("insertar-btn");
let caja= document.getElementById("datos");
let nombres = [];
let datos = JSON.parse(localStorage.getItem("nombres"));
if (datos != null) {
    nombres = datos;
}
 insertar_btn.addEventListener("click", () => {
     let nom = nombres.values;
     let cel= celular.value;
     nombres.push({
         nombre: nom,
         celular: cel,
     });
     localStorage.setItem("nombres", JSON.stringify(nombres));
     nombre.value = "";
     mostrar_lista();
 });
 const mostrar_lista = () => {
     caja.innerHTML = "";
     nombres.forEach((element) =>{
         caja.insertAdjacentHTML(
             "beforebegin",
             ` 
            <li>${element.nombre}-${element.celular}</li> 
             `
         );
     });
 };
 