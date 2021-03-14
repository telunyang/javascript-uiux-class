//宣告我們剛剛寫好的取亂數的function
function getRandom(x) {
    /**
     * 假設 x 為 10，產生的值就落在 0 - 9 之間，
     * 此時程式後面再加 1，
     * 代表產生的值落在 1 - 10 之間，
     * 再進行回傳
     */
    return Math.floor(Math.random() * x) + 1;
}

//再來寫產生威力彩號碼的function
function getPowerNum() {
    //首先我們先宣告一個字串，用來裝要回傳的結果
    let status = "第一區號碼為：";
    
    //宣告一個變數用來裝隨機產生的數字
    let n = 0;

    //一注威力彩號碼有6個所以我們讓迴圈跑六次
    for (i = 0; i <= 5; i++) {
        //用indexOf判斷該數字之前有沒有出現過
        n = getRandom(38);

        //如果有出現過就重跑一次迴圈
        if (status.indexOf(n) > 0) {
            //將 i 遞減，等於這輪重跑一次
            i -= 1; //等同於 i = i - 1 或 i--
            continue;
        } else {
            //沒出現過的話就寫進字串裡
            status += n + " ";
        }
    }

    //因為威力彩有分兩區，第二區為 01 ~ 08 隨機一數字，所以我們在回傳時加上。
    return status + "第二區號碼為：" + getRandom(8);
}

alert(getPowerNum());
//回傳結果："A組號碼為：19 11 2 30 20 8 B組數字為：2"
