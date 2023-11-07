 // Aquí tu código
const pulsar= document.getElementById('agregar');

pulsar.addEventListener('click', function(){
    const elemento= prompt('Introduce un elemento a la lista');
    //return elemento;
    if(elemento != ''){
        const listado= document.getElementById('lista');
        const elementlist = document.createElement('li'); 
        listado.appendChild(elementlist);
        //elementlist.innerHTML();
        elementlist.insertAdjacentHTML(
            'afterbegin',
            `${elemento} `
          );    
    }
    else{
     
      const listado= document.getElementById('lista');
      const elementlist = document.createElement('li'); 
      listado.appendChild(elementlist);
      elementlist.insertAdjacentHTML(
          'afterbegin',
          'No ha introducido un elemento '
        );    
    }
} );

       




/*

 const nombre = prompt('Introduce tu nombre');

const pulse = document.getElementById('pulse');
const texto = document.getElementById('addtexto');

pulse.addEventListener('click', function () {
  texto.innerHTML = `Hola ${nombre}, recuerda que JS mola mucho`;
});
*/