const pulsar= document.getElementById('agregar');

pulsar.addEventListener('click', function()
{
    const elemento= prompt('Introduce un elemento a la lista');
    if(elemento != '')
    {
        const listado= document.getElementById('lista');       
        const elementlist = document.createElement('li'); 
        listado.appendChild(elementlist);
        elementlist.insertAdjacentHTML(
            'afterbegin',  `${elemento} ` );    
    }
    else
    {
     alert('No has introducido nada'); 
    }
} );