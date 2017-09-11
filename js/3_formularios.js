;
function actual() 
  {
    fecha=new Date(); //Actualizar fecha.
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual
    mireloj = hora+" : "+minuto+" : "+segundo;	
    return mireloj; 
  }

function actualizar() 
  { 
    mihora=actual() 
    mireloj=document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
  }
  setInterval(actualizar,1000); //iniciar temporizador


((d, c) => {
  const inputs = d.querySelectorAll('[required]'),
    preload = d.querySelector('.ContactForm-preload'),
    message = d.querySelector('.ContactForm-message')
  //c(inputs)

  inputs.forEach(input => {
    let span = d.createElement('span')

    span.id = input.name
    span.classList.add('ContactForm-error', 'u-hidden')
    span.textContent = `Dato incorrecto, escribe ${input.title}`
    input.insertAdjacentElement('afterend', span)

    //c(input.pattern, input.required)
    input.addEventListener('keyup', e => {
      if ( input.pattern ) {
        //c('El input tiene patrón')
        let regex = new RegExp( input.pattern )

        return ( !regex.exec( e.target.value ) )
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active')
      } else {
        //c('El input NO tiene patrón')
        return ( !e.target.value )
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active')
      }
    })
  })

  d.forms[0].addEventListener('submit', e => {
    //alert('Enviando Formulario')
    e.preventDefault()

    preload.classList.add('is-active')
    setTimeout(() => {
      preload.classList.remove('is-active')
      message.classList.add('is-active')
      d.forms[0].reset()

      setTimeout(() => {
        message.classList.remove('is-active')
      }, 3000)
    }, 2000)
  })
})(document, console.log);