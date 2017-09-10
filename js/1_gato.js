/*TAREA
  1) Cuando sean turnos pares escribir dinamicamente en la td, una X
  2) Cuando sean turnos impares escribir dinamicamente en la td, una O
  3) En la variable combinacionesGanadoras ir registrando los clics de ambos jugadores y comparar contra las 8 soluciones posible.
  4) Cuando un jugador complete alguna de las soluciones ganadoras, mandar una alerta indicando que jugador
  5) Si llegamos a los 9 turnos posibles sin un ganador mandar un alerta que indique empate
*/
;
//alert('funciona')
//funciones autoinvocadas estructura: cuando se ven parentesis es una invocación o bien una ejecucion
/*para exportar en js export+funcion+(){}, para llamar esa funcion import {funcion} from"ruta"*/
//funcion anonima autoinvocada ES5 (function(){cuerpo de la programación})()
//funcion anonima ES6 (()=>{})(); se ponen ; cuando se ponen funciones invocadas
((d, w, n, c, a) =>
  {
    c('funciona')
    
    const celdas = d.querySelectorAll('.gato'),
    tabla = document.querySelector('#gato'),
    combinacionesGanadoras = new Array(9)

    //asignación y declaraciòn, asignación: lo que esta de lado derecho se asigna a la variable
    let turno = 1,
      turnoActual
    
    c(celdas, tabla)

    function jugarGato (e)
    {
      /*c(
        e,
        e.target, 
        e.target.matches('td'),  //indica a cual celda se le dio click
        e.target.matches('tr'),
        e.target.matches('#c6')
      )*/
      if (e.target.matches('td') && e.target.classList.contains('disponible') ) 
      {
        let celdaPresionada = e.target,
        idCeldaPresionada = celdaPresionada.id,
        posicionaAMarcar = idCeldaPresionada.substr(1) -1

          turnoActual = turno%2

          celdaPresionada.classList.remove('disponible')

          if(turnoActual!=0)
            {
              celdaPresionada.innerHTML ="X",
              combinacionesGanadoras[posicionaAMarcar] ="X",
              jugadorGanador("X")
            }
            else if(turnoActual== 0)
              {
                celdaPresionada.innerHTML ="O",
                combinacionesGanadoras[posicionaAMarcar] ="O",
                jugadorGanador("O")
              }
            if(turno==9)
              {
                a("Empate")
                w.location.reload()
              }
      }  
            c(
              turno,
              turnoActual,
              combinacionesGanadoras
            )
          /*c(
            celdaPresionada, 
            idCeldaPresionada,
            posicionaAMarcar,
            turno,
            turnoActual,
            this,
            'classList',
            celdaPresionada.classList,
            'className',
            celdaPresionada.className,
            celdaPresionada.classList.contains('gato')
          )*/

          /*celdaPresionada.classList.add('otra-clase')
          celdaPresionada.classList.remove('gato')
          celdaPresionada.classList.toggle('alternar')
          //turno = turno + 1*/
          turno++ 
    }
    
    function jugadorGanador(letra)
    {
      if
        (
          (combinacionesGanadoras[0]==letra && combinacionesGanadoras[1]==letra && combinacionesGanadoras[2]==letra) ||
          (combinacionesGanadoras[3]==letra && combinacionesGanadoras[4]==letra && combinacionesGanadoras[5]==letra) ||
          (combinacionesGanadoras[6]==letra && combinacionesGanadoras[7]==letra && combinacionesGanadoras[8]==letra) ||
          (combinacionesGanadoras[0]==letra && combinacionesGanadoras[3]==letra && combinacionesGanadoras[6]==letra) ||
          (combinacionesGanadoras[1]==letra && combinacionesGanadoras[4]==letra && combinacionesGanadoras[7]==letra) ||
          (combinacionesGanadoras[2]==letra && combinacionesGanadoras[5]==letra && combinacionesGanadoras[8]==letra) ||
          (combinacionesGanadoras[0]==letra && combinacionesGanadoras[4]==letra && combinacionesGanadoras[8]==letra) ||
          (combinacionesGanadoras[2]==letra && combinacionesGanadoras[4]==letra && combinacionesGanadoras[6]==letra)
        )
        {
          a("jugador ganador "+ letra)
          w.location.reload()
        }
    }

    tabla.addEventListener('click',jugarGato)
  }
)(document, window, navigator, console.log, alert);

