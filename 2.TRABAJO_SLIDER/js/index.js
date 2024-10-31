'use strict';

(()=>{
    // Declaramos las constantes
    const a          = document.querySelector(`.Slider`)
    const b = a.querySelectorAll(`.Slider-point`)
    const c = a.querySelectorAll(`.Slider-img`)
    // const aNext = a.querySelector(`.next`)

    // Declaramos las variables
    let fotoIndex = 0;


    // Declaramos las funciones
    let showSliderImg           = ()            => {
        c.forEach(( _ , i )=>{
            c[i].classList.remove(`isActive`)
            b[i].classList.remove(`isActive`)
        })
        c[fotoIndex].classList.add(`isActive`)
        b[fotoIndex].classList.add(`isActive`)
    }
    let bHandler  = ( _ , index ) =>{
        b[index].addEventListener(`click`,()=>{
            fotoIndex = index
            showSliderImg()
        })
    }
    let d       = ()            => {
        fotoIndex = ( fotoIndex >= 2 ) ? 0 : fotoIndex + 1
        showSliderImg()
    }


    // Relacionamos los elementos con las funciones
    b.forEach( bHandler)

    const e = document.querySelector(`.next`)
    e.addEventListener(`click` , d )

    const f = document.querySelector(`.prev`)
    f.addEventListener(`click` , d )
})()

