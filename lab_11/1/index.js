let elems = document.getElementsByClassName('box') 

for(let i in elems){
    elems[i].addEventListener('mouseover', ()=>{
        if(elems[i].style.backgroundColor != 'white'){
            elems[i].style.color = 'red'
            elems[i].style.backgroundColor = 'red'
        }
    })

    elems[i].addEventListener('mouseout', ()=>{
        if(elems[i].style.backgroundColor != 'white'){
            elems[i].style.color = 'blue'
            elems[i].style.backgroundColor = 'blue'
        }
    })

    elems[i].addEventListener('click', ()=>{
        if(elems[i].style.backgroundColor == 'white'){
            elems[i].style.color = 'blue'
            elems[i].style.backgroundColor = 'blue'
        }  else {
            elems[i].style.color = 'white';
            elems[i].style.backgroundColor = 'white';
        }
    })
}