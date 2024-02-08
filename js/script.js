$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle')

    })




    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times')
        $('header').removeClass('toggle')

        if($(window).scrollTop()> 0){
            $('.top').show()
        }else{
            $('.top').hide()
        }

    })
})

document.querySelectorAll('a[href^="home"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})


// mudando o icone dark mode quando clica
const mode = document.getElementById('mode-icon')

mode.addEventListener('click', () =>{
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        return
    }

    mode.classList.add('fa-moon')
    mode.classList.remove('fa-sun')
})


// darkmode

const mudartema = document.getElementById('mode_icon')

mudartema.addEventListener('click', () =>{

    document.body.classList.toggle("white")
})

