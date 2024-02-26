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
// Leap Motionのコントローラーを初期化
var controller = new Leap.Controller({enableGestures: true});

// コントローラーにフレームを取得したときのリスナーを追加
controller.on('frame', function(frame) {
    // ハンドが存在するかどうかを確認
    if (frame.hands.length > 0) {
        // 最初のハンドのみを取得
        var hand = frame.hands[0];

        // ハンドから指を取得
        var fingers = hand.fingers;

        // 各指の関節の位置を取得
        for (var i = 0; i < fingers.length; i++) {
            var finger = fingers[i];
            for (var j = 0; j < finger.bones.length; j++) {
                var bone = finger.bones[j];
                var position = bone.prevJoint; // 開始位置
                console.log("Finger: " + i + ", Bone: " + j + ", Position: " + position);
            }
        }
    }
});

// Leap Motionのコントローラーを開始
controller.connect();


// var rightHand = document.getElementById("rightHand");

// rightHand.addEventListener('pinchmoved',function(event){
//     var boxes = document.getElementById("box");
//     boxes.setAttribute("position", event.detail.position);
// });
