let programa=[];
let tiempo=[];
let sede=[];
let costo=[];
let detalles=[];


const perdida = document.querySelector("#perdida");
const tonificacion = document.querySelector("#tonificacion");
const crecimiento = document.querySelector("#crecimiento");
const contCrecimiento = document.querySelector("#contCrecimiento");
const contTonificacion = document.querySelector("#contTonificacion");
const contPerdida = document.querySelector("#contPerdida");





fetch("./js/programas.json")
    .then(respuesta=> respuesta.json())
    .then(datos=>{



        const eventFuture=(res)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{

                    res=true?resolve("promesa resuelta"):PromiseRejectionEvent("promesa rechazada")
    
    
                },10);
            })


            }

            const valor= true;

            eventFuture(valor)
                .then((respuesta)=>{
                    console.log("base da datos cargada con exito")

                    for(i=0; i<datos.length;i++){
                        programa.push(datos[i].programa)
                        tiempo.push(datos[i].tiempo)
                        sede.push(datos[i].sede)
                        costo.push(datos[i].costo)
                        detalles.push(datos[i].detalles)
                        
            
                    }

                    console.log(programa )
                    console.log(tiempo )
                    console.log(sede )
                    console.log(costo )
                    console.log(detalles )

                })


                
                

                


                // "programa": "perdida",
                // "dudacion": " 3 semanas ",
                // "sede ": " principal ",
                // "costo": "50",
                // "detalles":" este programa consta de alta exigencia cardio vascular y una sana alimentacion "
            

        
        // console.log(datos)
        // console.log(datos[0])

        // let anexo=" qeu se dice mi perrito "

        // const probando = document.querySelector("#probando");
        // probando.innerText="hola joako " +datos[1].programa;

                perdida.addEventListener("click",fondoBlancoPerdida);
                tonificacion.addEventListener("click",fondoBlancoTonificacion);
                crecimiento.addEventListener("click",fondoBlancoCrecimiento);

        function fondoBlancoPerdida(){


            perdida.classList.toggle("fondoBlanco")
            tonificacion.classList.toggle("fondoAzul")
            crecimiento.classList.toggle("fondoAzul")
            
            contPerdida.classList.toggle("esconder")
            contCrecimiento.classList.toggle("esconder")
            contTonificacion.classList.toggle("esconder")

            
        }

        function fondoBlancoTonificacion(){


            perdida.classList.toggle("fondoAzul")
            tonificacion.classList.toggle("fondoBlanco")
            crecimiento.classList.toggle("fondoAzul")
        }


        function fondoBlancoCrecimiento(){


            perdida.classList.toggle("fondoAzul")
            tonificacion.classList.toggle("fondoAzul")
            crecimiento.classList.toggle("fondoBlanco")
        }
    

    
    })

   