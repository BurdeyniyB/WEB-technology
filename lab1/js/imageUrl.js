document.getElementById('img2').addEventListener('click', function(){
    window.location.href = 'https://uk.wikipedia.org/wiki/%D0%90%D0%B4%D1%80%D1%96%D0%B0%D0%BD%D0%BE_%D0%A7%D0%B5%D0%BB%D0%B5%D0%BD%D1%82%D0%B0%D0%BD%D0%BE';
})

document.getElementById('img3').addEventListener('mouseup', function(event){
    const selection = window.getSelection()

    if (selection.toString != ''){
        window.location.href = 'https://www.youtube.com/watch?v=mLmQlOt1XiI'
    }
})
