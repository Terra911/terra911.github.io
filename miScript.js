
      function cambiarColorDeFondo(colorNuevo){
        document.bgColor=colorNuevo
      }

      function cambiarARojo(){
        cambiarColorDeFondo("red")  
      }

      function cambiarAVerde(){
        cambiarColorDeFondo("green")  
      };

      function cambiarAAzul(){
        cambiarColorDeFondo("blue")  
      };

         /*let padre = document.getElementById("parrafo");
        
        let hijo = crearParrafo("Soy el elemento hijo del parrafo");

        padre.appendChild(hijo);

        console.log(document.body.children.length);*/
      
        
        function postearComentario(){
            let aPostear = crearParrafo(guardarComentario());
            document.body.appendChild(aPostear)
            
        }
    

        function guardarComentario(){
          let coment= document.getElementById("comentarios").value;
          return coment
         }




        function miFuncion(){
            console.log("Apretaste el botón!");
        }

        function retornarElemento(elem){
            return (document.getElementById(elem))
        }

       function crearParrafo(texto){
         let parrafoNuevo = document.createElement("p")
         parrafoNuevo.innerHTML = texto;
         return parrafoNuevo
        }

      function agregarElemento(){
        document.body.appendChild(crearParrafo("Elemento agregado"));
      }

       console.log(crearParrafo("programacion web"));        


      let mierda = [2,4,5,6]

      export{
        mierda       }