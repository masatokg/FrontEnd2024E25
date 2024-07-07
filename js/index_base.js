"use strict";

// ドラッグ＆ドロップ要素に連番でつけるカウント用変数
let card_id_count = 0;

// ドロップ先エリアの子要素を全て削除する関数処理
let clear_list = function (event) {
  // ドロップ先エリアの行要素droprowを取得
  const dropzone = document.getElementById('XXXXXXXX');
  // ドロップ先エリア内のrowの子要素を全て削除（子要素が見つかる限りループ）
  // dropzone.replaceChildren(); でも全削除できる
  while (dropzone.firstChild) {
    // ドロップ先エリアの見つけた先頭子要素を削除
    dropzone.XXXXXXXX(dropzone.firstChild);
  }
}

// カードの列要素をクリックした時の処理
let clear_card = function(event){
  // クリックしたカード列の要素を削除
  event.currentTarget.XXXXXXXX();
}


// dragstartイベントにひもづける関数処理
function onDragStart(event) {
  // ドラッグ中のデータとしてマウス選択した要素のid情報を設定
  event.dataTransfer.setData('text/plain', event.target.XXXXXXXX);

}

// dragoverイベントにひもづける関数処理
function onDragOver(event) {
  // イベントのブラウザのデフォルト動作が邪魔なのでキャンセル
  event.XXXXXXXX();
}

// dropイベントにひもづける関数処理
function XXXXXXXX(event) {
  // ドラッグ中のデータからid情報を取得
  const dragDataId = event.dataTransfer.getData('text');
  console.log("dragDataId = ", dragDataId);
  // ドロップした場所（要素）のidが"dropzone"もしくは"droprow"の場合
  if (event.target.id === "dropzone" || event.target.id === "droprow") {
    // 取得したドラッグ中の要素のid情報から要素を取得
    const draggableElement = document.getElementById(XXXXXXXX);
    // ドラッグした要素をコピー
    let copy = draggableElement.cloneNode(true);
    // コピーした要素のid属性の内容を変更
    copy.setAttribute("XXXXXXXX", 'card' + (card_id_count++));
    // class属性の内容を変更
    copy.setAttribute("XXXXXXXX", "dvdcard_mini text-wrap size_test2 p-0 m-1");
    // descripbeの中身の文章を空にする
    copy.getElementsByTagName("describe")[0].innerHTML = "";

    // row行内のcol列用のdiv要素を生成
    const div_col = document.createElement('div');
    // col列のクラス属性を設定
    div_col.setAttribute("class", "col col-4 p-0 m-0");
    // col列の中にコピーした要素を追加
    div_col.appendChild(XXXXXXXX);
    // col列のクリックイベントにクリックしたら要素を削除する関数処理を紐づけ
    div_col.addEventListener('click', XXXXXXXX);
    // ドロップ先rowの要素を取得
    let droprow = document.getElementById("droprow");
    // ドロップ先rowにドラッグした要素を追加
    XXXXXXXX.appendChild(div_col);

  } else {
    // ドロップした場所（要素）のidが"dropzone"以外の場合は、何もしない
    console.log("dropzone以外");
  }
  // ドラッグ中のデータをクリア
  event.dataTransfer.clearData();
}


// 画面のカードにドラッグ＆ドロップ用の設定を追加する関数処理
let set_cardlist_id = function () {

  // カードにドラッグ＆ドロップ属性を有効に設定
  const cardlist = document.getElementsByClassName('dvdcard');
  // カードの数だけループ処理
  for (let i = 0; i < cardlist.XXXXXXXX; i++) {
    // カードのドラッグ＆ドロップ属性をtrueに設定
    cardlist[i].setAttribute('draggable', 'XXXXXXXX');
    // カードのドラッグスタートイベントに関数処理を紐づけ
    cardlist[i].addEventListener('dragstart', XXXXXXXX);
    // 生成したdiv要素にid属性を連番で設定
    let card_num = 'card_num' + (card_id_count++);
    // 作成した連番を取得したカード要素のid属性に設定
    cardlist[i].setAttribute('id', XXXXXXXX);
  }

}

// ページ読み込み時の処理
window.onload = function () {

  // ドロップ先エリアのidを取得
  const dropzone = document.getElementById('dropzone');
  // ドロップ先エリアにドロップイベントを設定
  dropzone.addEventListener('drop', onDrop);
  // ドロップ先エリアのドラッグオーバーイベントに関数処理を紐づけ
  dropzone.addEventListener('dragover', XXXXXXXX);


  // ドロップ先エリアのクリアボタンのidを取得
  const clear_button = document.getElementById('clear_button');
  // ドロップ先エリアのクリアボタンのクリックイベントに関数処理を紐づけ
  XXXXXXXX.addEventListener('click', clear_list);

  // カードに属性設定処理
  set_cardlist_id();

}


