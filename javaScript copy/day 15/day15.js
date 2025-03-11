function play(e) {
    const key =document.querySelector(`.drum[data-key="${e.keyCode}"] `)
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.play()

     key.classList.add('playing')

    this.setTimeout(function(){
        key.classList.remove('playing');
    }, 400)
}

window.addEventListener('keydown',play)




