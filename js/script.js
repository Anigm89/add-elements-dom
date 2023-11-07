 // Aquí tu código
const pulsar= document.getElementById('agregar');

pulsar.addEventListener('click', function(){
    const elemento= prompt('Introduce un elemento a la lista');
    //return elemento;
    if(elemento != ''){
        const listado= document.getElementById('lista');console.log(listado)
        const elementlist = document.createElement('li'); console.log(elementlist)
        listado.appendChild(elementlist);
        //elementlist.innerHTML();
        elementlist.insertAdjacentHTML(
            'afterbegin',
            `${elemento} `
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