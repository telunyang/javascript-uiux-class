//繪製矩形
let canvas = document.getElementById("canvas");

//下拉式選單
let dropDownMenu = document.getElementById("dropDownMenu");

//清空畫布的按鈕
let btnClear = document.getElementById("btnClear");

//畫布寬度、高度
let width = 1024, height = 640;

//設定畫布寬、高
canvas.width = width;
canvas.height = height;
        
//取得二維圖像的繪製環境(drawing context)
let ctx = canvas.getContext("2d");

/**
 * 繪圖物件初始設定
 * butt: 線段末端以方形結束。
 * round: 線段末端以圓形結束。
 * square: 線段末端以方形結束，但是增加了一個寬度和線段相同，高度是線段厚度一半的矩形區域。
 */
ctx.lineCap = 'round';

//設定線條顏色
ctx.strokeStyle = '#000000';

//畫布預設線條寬度(給 canvas 邊框用)
ctx.lineWidth = 5;

//在畫布上繪製邊框
ctx.strokeRect(0, 0, width, height);

//判斷畫布是否有動作的布林變數
let drawing = false;

//記錄當前滑鼠遊標的位置變數
let cursorX = 0, cursorY = 0;

//從畫布上移動時，取得滑鼠遊標的座標
canvas.addEventListener("mousemove", function(event){
    //滑鼠在畫布上移動時，若是有按下滑鼠按鍵 (mousedown)，則進行繪製
    if(drawing){
        //取得現在的座標
        cursorX = event.pageX;
        cursorY = event.pageY;

        //畫圖
        draw(cursorX, cursorY, cursorX, cursorY);
    }
});

//滑鼠在畫布上按下的事件處理
canvas.addEventListener("mousedown", function(event){
    drawing = true;
});

//
canvas.addEventListener("mouseup", function(event){
    drawing = false;
});

//畫圖
function draw(x, y, new_x, new_y){
    //設定筆粗
    ctx.lineWidth = 15;
    
    //繪製線條
    ctx.beginPath(); 
    ctx.moveTo(x, y); 
    ctx.lineTo(new_x, new_y);
    ctx.stroke();
}

//監聽是否有透過下拉式選單變換筆尖顏色
dropDownMenu.addEventListener("change", function(event){
    ctx.strokeStyle = event.currentTarget.value;
});

//監聽是否有按下清空畫布的按鈕
btnClear.addEventListener("click", function(event){
    //清空畫布
    ctx.clearRect(0, 0, width, height);

    //設定線條顏色
    ctx.strokeStyle = '#000000';

    //畫布預設線條寬度(給 canvas 邊框用)
    ctx.lineWidth = 5;

    //在畫布上繪製邊框
    ctx.strokeRect(0, 0, width, height);
});