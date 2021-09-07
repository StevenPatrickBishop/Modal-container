var modal = document.querySelector('#simpleModal')
var modalBtn = document.querySelector('#modalBtn')
var closeBtn = document.querySelector('.closeBtn');


modalBtn.addEventListener('click', function(){
modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
    });

    
window.addEventListener('click', function(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
    });