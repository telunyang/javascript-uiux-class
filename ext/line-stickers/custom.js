//放置 LINE 官方貼圖的「檢視原始碼」輸出結果
let html = ``;

//先將 LINE 貼圖配對出來
let pattern = /https?:\/\/stickershop\.line-scdn\.net\/stickershop\/v1\/sticker\/([0-9]+)\/android\/sticker\.png/g;
let match = null;
let arr = [];
while( (match = pattern.exec(html)) !== null ){
    /**
     * match[0] = full match
     * eg. https://stickershop.line-scdn.net/stickershop/v1/sticker/380512276/android/sticker.png
     */
    arr.push(match[0]);
}

//先將貼圖資訊透過 Set 去掉重複，再透過 Array.from 轉回陣列型態
let mySet = new Set(arr);
let newArr = Array.from(mySet);

//取得放置圖片的 div
let ul = document.querySelector("ul#myList");

/** 
 * 如果 body 裡面沒有 ul#myList 元素，
 * 可以動態新增
 */
// let new_ul = document.createElement("ul");
// new_ul.setAttribute("id", "myList");

//逐一建立 li，並放置圖片資訊在 li 當中
for(let link of newArr){
     if( (match = pattern.exec(link)) !== null ){
        /**
          * match[0] = full match
          * eg. https://stickershop.line-scdn.net/stickershop/v1/sticker/380512276/android/sticker.png
          * 
          * match[1] = group 1
          * eg. 380512276
          */

        //新增 li 元素，等等會用到
        let li = document.createElement("li");

        //新增圖片元素，並在 src 指定 LINE 貼圖的超連結
        let img = document.createElement("img");
        img.setAttribute("src", match[0]);

        //新增文字節點
        let textNode = document.createTextNode(`檔案名稱: ${match[1]}.png`);

        //先在 li 裡面放 img 元素，再放文字
        li.appendChild(img);
        li.appendChild(textNode);

        //將 li 放到 ul 當中
        ul.appendChild(li);

        /** 
         * 如果 body 裡面沒有 ul#myList 元素，
         * 則可以透過手動新增的 ul#myList 的變數，
         * 來進行 appendChild(li)
         */
        //new_ul.appendChild(li);
     };
}

/** 
 * 如果 body 裡面沒有 ul#myList 元素，
 * 手動新增後，可以用以下方式動態產生在網頁上
 */
// document.body.appendChild(new_ul);