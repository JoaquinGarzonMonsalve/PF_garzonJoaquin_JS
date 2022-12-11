
let iM;
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const calcular = document.querySelector("#boton2");

const doctor = document.querySelector("#doctor");
const gC16 = document.querySelector("#g16");
const gC17 = document.querySelector("#g17");
const gC185 = document.querySelector("#g185");
const gC25 = document.querySelector("#g25");
const gC29 = document.querySelector("#g29");
const gC35 = document.querySelector("#g35");
const gC40 = document.querySelector("#g35");
const mas40 = document.querySelector("#g35");
const texto = document.querySelectorAll(".texto");

const inscribete = document.querySelector("#inscribete");

const valormasa=document.querySelectorAll("#valorMasa")

function grasaCorporal(peso11, altura11)
{
    let indiceMasa=peso11/(altura11*altura11)
    indiceMasa=parseFloat(indiceMasa)

    let vMasa = document.createElement("P");
    vMasa.classList.add("resultado");
    vMasa.innerHTML="<spam> joako </spam>";

    console.log(vMasa);
   
    
    
     if(indiceMasa<16.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion severa" )

        iM=indiceMasa;

        if(iM<16.0){
            gC16.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            
            texto[3].classList.toggle("esconder")
            
    
       }

         
        
    }
    else if(indiceMasa<17.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion moderada" )

        iM=indiceMasa;

        if(iM<17){
            gC17.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
        
           }
        
    }
    else if(indiceMasa<18.50){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion leve" )
        
        iM=indiceMasa;

        if(iM<18.5){
            gC185.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
           
        
           }
        
    }
    else if(indiceMasa<25.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo normal" )
        
        iM=indiceMasa;

        if(iM<25){
            gC25.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
            
        
          }
        
    }
    else if(indiceMasa<29.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un sobrepeso diagnostrico de pre-obesidad" )
        
        iM=indiceMasa;

        if(iM<29){
            gC29.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
            
        
          }

          
        
    }
    else if(indiceMasa<35.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 1 diagnostrico leve moderado" )
        
        iM=indiceMasa;

        if(iM<35){
            gC35.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
            
          }
        
    }

    else if(indiceMasa<40.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 2 diagnostrico obesidad severa" )

        iM=indiceMasa;

        if(iM<40){
            gC40.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
            
            
        
          }


        
    }

    else{

        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 3 diagnostrico obesidad morbida" )
        iM=indiceMasa;

        if(iM>40){
            mas.classList.toggle("esconder")
            doctor.classList.toggle("esconder")
            peso.classList.toggle("esconder")
            altura.classList.toggle("esconder")
            calcular.classList.toggle("esconder")
            texto[0].classList.toggle("esconder")
            texto[1].classList.toggle("esconder")
            texto[2].classList.toggle("esconder")
            texto[3].classList.toggle("esconder")
            
            
            
            
        
          }
        

    }

    iM=indiceMasa;
    return indiceMasa;
}

console.log(" entrando pagina 2")



calcular.addEventListener("click", (a)=>{
  a.preventDefault()

  const pesoIngresado=peso.value;
   const alturaIngresada=altura.value;

 


   grasaCorporal(pesoIngresado, alturaIngresada)


})

// calcular.addEventListener("click", guardarMasa);

// function guardarMasa() {
    
// }

console.log("GUIA PARA EL USUARIO ")
    console.log("EJEMPLOS DE ALTURAS EN METROS: 1.2, 1.65, 1.87, 1.94, 1.64 ")
    console.log(" EJEMPLOS DE PESO EN KILOGRAMOS: 50, 55, 65 , 78 , 90  ")
    