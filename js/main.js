var usuarioAntes=[];
var passAntes=[]
let accesoUser= false
let accesoPass= false
let usuarioActivo="nn"
let continuar="  "
let busquedas= true




const listaUsuarios = document.querySelector("#lista")


const primera = document.querySelector("#primera");
const ingreso = document.querySelector("#boton");
const usuarioIngresada = document.querySelector("#usuario");
const contrasenaIngresada = document.querySelector("#pass");
const intento = document.querySelector("#intento");
const sub = document.querySelector("#sub");
const containerFinal = document.querySelector("#containerFinal");

fetch("./js/usuarios.json")
    .then(respuesta=> respuesta.json())
    .then(datos=>{

        // for(let i=0; i<5;i++){
        //     data=datos.usuario;
        // }

        console.log(datos.length)
            data=datos;
        console.log(datos[3].usuario)
        // mostrarUsuarios(datos)
        console.log("estos son los datos "+data)

        for(i=0; i<datos.length;i++){
            usuarioAntes.push(datos[i].usuario)
            passAntes.push(datos[i].contraseña)
            console.log( usuarioAntes +" "+ passAntes)
        

        }

        const usuarioJSON = JSON.stringify(usuarioAntes);
        console.log(usuarioAntes)
        localStorage.setItem("usuario", usuarioJSON);
        console.log(usuarioJSON)


        const usuarioEnLocalStorage = localStorage.getItem("usuario");
        console.log(usuarioEnLocalStorage)
        const usuarioDespues = JSON.parse(usuarioEnLocalStorage);
        console.log(usuarioDespues)

        const  passJSON = JSON.stringify( passAntes);
        console.log( passAntes)
        localStorage.setItem(" pass ",  passJSON);
        console.log(usuarioJSON)


        const  passEnLocalStorage = localStorage.getItem(" pass ");
        console.log(usuarioEnLocalStorage)
        const  passDespues = JSON.parse( passEnLocalStorage);
        console.log(usuarioDespues);


        ingreso.addEventListener("click", (e)=>{
            e.preventDefault()
        
           const usuario1=usuarioIngresada.value;
           const pass1=contrasenaIngresada.value;
            console.log(usuario1);
            console.log(pass1);
            
            for( i=0; i<usuarioDespues.length; i++)
            {
            
                console.log(i)
                console.log(usuario1)
                console.log(usuarioDespues[i])
                console.log(usuarioDespues.length)
                
                
                accesoUser=( usuario1==usuarioDespues[i])
            
                if(accesoUser== true)
                {
                    
                    usuarioActivo=usuario
                    // alert(" usuario correcto")

                    Swal.fire({
                        title: 'acceso!',
                        text: 'acceso correcto',
                        icon: 'ok',
                        confirmButtonText: 'ENTRAR'
                      })

                    console.log(" acceso correcto")
            
            
                    // for de 3 intentos de contraña
            
                    for(j=0; j<3;j++)
                    {
            
                    
                    
                        if( pass1==passDespues[i])
                            {
        
        
                            alert(" acceso correcto ")
                            i=5 // fin ciclo usuario
                            j=5  // fin ciclo contrasa
        
                             usuarioIngresada.classList.toggle("esconder");
                             contrasenaIngresada.classList.toggle("esconder");
        
                            containerFinal.classList.toggle("esconder");
                        
                             ingreso.classList.toggle("esconder");
                            primera.classList.toggle("esconder");
                             sub.classList.toggle("esconder");
        
                            intento.classList.remove("invisible");
                        
        
                            intento.classList.toggle("visible")
                            intento.classList.toggle("invisible")
                        
            
                        
                            }
                            else
                            {
                                alert("contraseña incorrecta ")
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'contraseña incorrecta',
                                    icon: 'error',
                                    confirmButtonText: 'ok'
                                  })
                            }
        
        
            
                    }
                    
            
                }
                
                
            }
        
            
            
        
        })
        

        
        
    })

    // function mostrarUsuarios(usuarios){
    //     usuarios.forEach(user => {
    //         const li= document.createElement("li");
    //         li.innerText=user.usuario;
    //         listaUsuarios.append(li);
            
            
    //     });
    // }
    console.log("GUIA PARA EL USUARIO ")
    console.log("maria, contraseña:111 ")
    console.log("jose, contraseña:222 ")
    console.log("jesus, contraseña:333 ")
    console.log("usuario:sol, contraseña:444 ")
    console.log("usuario:luna contraseña:555 ")
   

    

