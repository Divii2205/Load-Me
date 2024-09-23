const btnEl = document.getElementById("load")
const loadOpEl = document.getElementById("loadOp")
const image = document.getElementById("loadImg")

btnEl.addEventListener('click', function(){
    loadOpEl.textContent = "LOADING ... "
    image.classList.add('animate')
})