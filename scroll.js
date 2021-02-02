document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        var window = pageYOffset
        var section = document.getElementById('croisiere')
        var limit = section.getBoundingClientRect().top

        var navbar = document.querySelector('nav')
        console.log(window)
        if (window >= 850) {
            navbar.style.backgroundColor = 'rgba(0,0,0,0.2'
            console.log('hey')
        }else if (window < 850) {
            navbar.style.backgroundColor = 'transparent'
            console.log('ho')
        }
    })
})