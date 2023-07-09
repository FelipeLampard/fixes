const propiedadesJSON = [
    {
      id: 1,
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170

    },
    {
      id: 2,
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      id: 3,
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      id: 4,
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      id: 5,
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      id: 6,
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
 let inputs = Array.from(document.querySelectorAll(".contenedor input"))

 let form = document.getElementById("form") 
 let filtro = document.querySelector(".filtro")
 let button = document.querySelector(".btn")
 let total = document.getElementById("total")
 let btn1 = document.querySelector("btn1")

 function readResult(propiedadesJSON){
   total.innerHTML = propiedadesJSON.length
   form.innerHTML = ""
 
   for(const i of propiedadesJSON){
  const item = document.createElement ("div")
  item.classList.add("packs")
  item.innerHTML = `
  <div class="propiedad"> 
  <div class="imagen"><img src="${i.src}" alt"${i.name}"> </div>
  <section class="box" > 
  <h5>${i.name}</h5> 
  <div class="boxes"> 
  <p"${i.rooms}"> Cuartos: ${i.rooms}</p>
  <p"${i.m}"> Metros: ${i.m}</p>  
  </div> 
  <div class="descripcion">${i.description}</div>
  <button class="btn1 btn-info"> Ver más</button>
  </section>
  </div>
  `;
  
  form.appendChild(item);
 }
 }
 readResult(propiedadesJSON)
 
 const filterItems = () => {
   const [{ value: amountRooms}, { value: fromMeters}, { value: untilMeters}] = inputs
   if(!amountRooms && !fromMeters && !untilMeters){
     alert("Ingrese datos");
     return false;
     
   }
 
   const itemsFilter = propiedadesJSON.filter(
     (i) => i.rooms == amountRooms && i.m >= fromMeters && i.m <= untilMeters);
     
     readResult(itemsFilter);


 }
 
 button.addEventListener("click", filterItems)            

 

               
 