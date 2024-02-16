const boxes=document.querySelectorAll('a-box');

boxes.forEach((box) => {
    box.addEventListener('click',function(){
        if(this.getAttribute('color')==='red'){
            this.setAttribute('color','blue');
        }else{
            this.setAttribute('color','red');
        };
    });
    
});

