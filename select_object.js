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


var rightHand = document.getElementById("rightHand");

rightHand.addEventListener('pinchmoved',function(event){
    var boxes = document.getElementById("box")
    boxes.setAttribute("position", event.detail.position);
});