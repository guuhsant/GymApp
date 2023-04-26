let minutes = 0;
let seconds = 0;
let tempo;
// Capturando botão de início do cronometro

btnInit = document.querySelector('#init')

// Capturando botão de parar o cronometro

btnStop = document.querySelector('#stop');
// Capturando botão de resetar o cronometro

btnReset = document.querySelector('#reset');

btnStop.classList.add('disabled')

function Init(){
   
    btnInit.classList.add('disabled')


    // variavel.classList.add('.interagir')
    // classList.remove

    btnStop.classList.remove('disabled')
  
    //iniciando função de calcular tempo
    tempo = setInterval(()=>{
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        // Capturando valores do HTML
        let secondsHTML = document.querySelector('#secondsRoot')
        let minutesHTML = document.querySelector('#minutesRoot')
        const time = document.querySelector('.time');
        const timeSeconds = document.querySelector('.time.seconds')
        
        if(minutes >= 3){
            timeSeconds.style.color = 'red'
            time.style.color = 'red'
            time.style.fontWeight = '400'
            timeSeconds.style.fontWeight = '400'
        }
        else if(minutes >= 2){
            timeSeconds.style.color = 'forestgreen'
            time.style.color = 'forestgreen'
            time.style.fontWeight = '600'
            timeSeconds.style.fontWeight = '600'
        }
        
        else if(minutes >= 1 && seconds >=30){
            timeSeconds.style.color = 'lightgreen'
            time.style.color = 'lightgreen'
        }
        else if(minutes ==1){
           
            timeSeconds.style.color = 'yellow'
            time.style.color = 'yellow'
        }
     
        
        // Colocando no HTML os valores do javascript
        secondsHTML.textContent = `${String(seconds).padStart(2, '0')}`
        minutesHTML.textContent = `${String(minutes).padStart(2, '0')}`
    }, 1000)

}
// Parar cronometro

    function Stop(){
        
        clearInterval(tempo)
        btnStop.classList.add('disabled')
        btnInit.classList.remove('disabled')
    }

// Resetar cronometro

    function Reset(){
       
        clearInterval(tempo)
        seconds = 0;
        minutes = 0;
        let secondsHTML = document.querySelector('#secondsRoot').textContent = '00'
        let minutesHTML = document.querySelector('#minutesRoot').textContent = '00'
      
        // mudança de cor
        const time = document.querySelector('.time');
        const timeSeconds = document.querySelector('.time.seconds')
        timeSeconds.style.color = 'white'
        time.style.color = 'white'
        time.style.fontWeight = '500'
        timeSeconds.style.fontWeight = '500'

        btnInit.classList.remove('disabled')
        btnStop.classList.add('disabled')
        
    }


// Adicionando evento de click para iniciar o cronometro

btnInit.addEventListener('click', Init)


// Adicionando evento de click para parar  cronometro

btnStop.addEventListener('click', Stop)


// Adicionando evento de click para resetar o cronometro

btnReset.addEventListener('click', Reset)

// repetições
let i =0;
let rep = document.querySelector('#rep');

function addRep(){
    i++;
    rep.textContent = `${i}`
}
function removeRep(){
    i--
    rep.textContent = `${i}`
    }
function resetRep(){
    i =0;
    rep.textContent = `${i}`
}

btnAddRep = document.querySelector('#add-rep').addEventListener('click', addRep)
btnRmvRep = document.querySelector('#remove-rep').addEventListener('click', removeRep)
btnResetRep = document.querySelector('#reset-rep').addEventListener('click', resetRep)


// capturando botao de reset

btnReset = document.querySelector('#reset-icon').addEventListener('click', ()=>
{

    location.reload()
})