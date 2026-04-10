var chutki = document.querySelector('img')
var dialogue = document.querySelector('span')
var color = document.querySelector('main')

chutki.addEventListener('mouseenter', function() {
    dialogue.innerHTML = "Chutki se dur raho 😡"
    color.style.color = 'Black'
    color.style.fontWeight = '900'
    color.style.background = 'radial-gradient(red,purple)'
})

chutki.addEventListener('mouseleave', function() {
    dialogue.innerHTML = "hn aab dur hi rehna"
    color.style.color = 'white'
    color.style.fontWeight = '900'
    color.style.background = 'radial-gradient(navy,black)'
})