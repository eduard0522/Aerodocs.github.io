import { cdRutes } from "./cdRutes.mjs";
import { openModal } from "./modal.mjs";
import { ClosedModal } from "./modal.mjs";

const d = document;

d.addEventListener("click", (e) => {
 
  console.log(e.target)
  
  if(e.target.matches(".button-active-form")){
    openModal("form","hidden-form");
  }

  if(e.target.matches(".button-cancel-form")){
    ClosedModal("form","hidden-form");
  }
  if(e.target.matches(".option-base")){
    cdRutes("../Modificado/html/base.html");
  }

  if(e.target.matches(".option-search ")){
    openModal("popUp" , "hidden");
  }
  if(e.target.matches(".closed-popUp")){
    ClosedModal("popUp" , "hidden");
  }
  if(e.target.matches(".search-base")){
    cdRutes("../Modificado/html/resultado.html");
  }
  if(e.target.matches(".resgister-form")){
   alert("Registro exitoso");
   ClosedModal("form","hidden-form");
  }
  if(e.target.matches(".btn-delete")){
    const $delete = confirm("¿ Seguro que deseas eliminar este registro ?");
    if($delete){
      alert("Registro eliminado con exito"); 
    }  
  }

  if(e.target.matches(".btn-edit")){
    openModal("form","hidden-form");
  }

  if(e.target.matches(".appli")){
    openModal("form-appli","hidden");
  }
  if(e.target.matches(".button-cancel-appli")){
    ClosedModal("form-appli","hidden");
  }
  if(e.target.matches(".register-appli")){
    alert("Registro exitoso");
    ClosedModal("form-appli","hidden");

  }

})

