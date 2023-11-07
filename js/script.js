const pulsar= document.getElementById('agregar');
let numerador = 0;
pulsar.addEventListener('click', function()
{
    const elemento= prompt('Introduce un elemento a la lista');
    if(elemento != '')
    {
        const listado= document.getElementById('lista');       
        const elementlist = document.createElement('li'); 
        listado.appendChild(elementlist);
        numerador+=1;
        elementlist.insertAdjacentHTML(
            'afterbegin',  `${numerador}. ${elemento} ` );    
           
    }
    else
    {
     alert('No has introducido nada'); 
    }
} );