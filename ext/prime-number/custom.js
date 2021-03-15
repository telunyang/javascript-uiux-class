/**
 * 找 1 到 100 之間所有質數
 */

//設定一個布林值，當作判斷當前的 dividend 是否為質數 (true 代表是質數)
let isPrime = true;

//外層 for 迴圈，決定當前被除數 dividend
for(let dividend = 2; dividend <= 100; dividend++){

    //內層 for 迴圈，決定除數 divisor
    for(let divisor = 2; divisor < dividend; divisor++){
        /**
         * 若是 dividend 除以 divisor 可以除盡，
         * 代表 dividend 不是質數
         */
        if(dividend % divisor == 0){
            //此時判斷 dividend 並非質數
            isPrime = false;
        }
    }

    /**
     * 如果 dividend 被 isPrime判斷不是質數，
     * 則輸出「非質數」的文字或訊息
     */
    if(isPrime !== true){
        console.log(`${dividend} != 質數`);
        document.write(`${dividend} != 質數 <br />`);

        /**
         * 內層 for 迴圈走完，在進入下一個外層迴圈時，
         * 先將 isPrime 回到預設值 true，
         * 代表雖然剛才的 dividend 不是質數，
         * 但我暫時相信下一個 dividend 會是質數，
         * 所以設定為 true
         */
        isPrime = true;
    } else {
        console.log(`${dividend} == 質數`);
        document.write(`${dividend} == 質數 <br />`);
    }

}