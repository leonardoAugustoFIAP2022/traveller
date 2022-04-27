const $html = document.querySelector('html')
const $menu = document.querySelector('#switch')

$menu.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})