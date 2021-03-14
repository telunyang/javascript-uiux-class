/**
 * 一堆勝利組合，勝利代表井字遊戲的 'O' 或 'X' 連成一條線的格子代表
 * 
 * 例如鍵盤上面的九宮格
 * 7 8 9
 * 4 5 6
 * 1 2 3
 * 
 * 其中
 * 1,4,7、2,5,8、3,5,7 都是代表連成一線的意思
 */
const WINNING_COMBINATION = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
]

//定義圖案
let icons = ['X', 'O']; //索引 0 代表 'X'，索引 1 代表 'O'

// 決定誰先，0 是叉（x），1 是圈（o）
let flag = 1;

//定義圖案選擇的格子值
choose = {};
choose['X'] = [];
choose['O'] = [];

//定義圖案比對勝利組合後的結果，有比對到，就加 1
score = {};
score['X'] = 0;
score['O'] = 0;

//取得所有 td
let td_check = document.querySelectorAll('td.check')

//所有 td 加入事件監聽
for(let i = 0; i < td_check.length; i++){
    td_check[i].addEventListener('click', function(event){
        //取得點選
        let pos = parseInt( this.getAttribute('data-position') );
        
        //把代表的值放到自己的陣列中
        append(flag, pos)

        //換手，若此時為 'X'，則換 'O'
        flag = Math.abs(flag - 1);
    });

}

//把代表的值放到自己的陣列中
function append(f, p){
    //在 td 裡面顯示圖案
    document.querySelector(`td.check[data-position="${p}"]`).textContent = icons[f];

    //選格子時，順便把代表的值放到自己的陣列中
    choose[ icons[f] ].push(p);
    
    //計算是否達到勝利的標準
    calc(f);
}

//計算成績
function calc(f){
    //把每一個勝利組合找出來，例如 [1, 4, 7]
    for(let arrWinCmb of WINNING_COMBINATION){
        //把上一層迴圈走到的勝利組合，例如 [1, 4, 7]，將其中的值逐一拿出來比對
        for(let value of arrWinCmb){
            /**
             * 若是比對的值，有落在 choose['O'] 或 choose['X'] 的陣列元素當中，
             * 則在 score['O'] 或 score['X'] 當中累加
             */
            if( choose[ icons[f] ].indexOf(value) != -1){
                score[ icons[f] ]++;
            }
        }

        //若是 score['O'] 或 score['X'] 其中一個已經加到 3，代表連成一線，成為贏家
        if(choose[ icons[f] ].length === 3 && score[ icons[f] ] === 3){
            alert(`${icons[f]} 贏得比賽!!`);
        }

        /**
         * 無論是否贏得比賽，在迴圈每次找完一個勝利組合，就先將自己的 score 清空，
         * 否則往下一個勝利組合比對的時候，若有與先前勝利組合一樣的值，會重複計算，
         * 造成判斷錯誤。
         */
        score[ icons[f] ] = 0;
    }
}


