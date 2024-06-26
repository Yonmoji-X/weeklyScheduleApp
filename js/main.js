// +ボタンについて
// +ボタンを押すと、入力フォームのタイトルに曜日が入る。
// addBtn

// 関数類
/**
 * allDataからid検索
 * 検索idの番号、検索idのデータオブジェクト
 * @return {object} {num: 番号, searchData: データオブジェクト}
 */
function searchAllData(objIdKey) {
  for (i = 0; i < allData.length; i++) {
    if (allData[i].id == objIdKey) {
      let info = { num: i, searchData: allData[i] }
      return info
    }
  }
}

// allDataを時間が早い順に並べ替える。
// 呼び方：allData.sort(allData_order)
function allData_time_order(a,b) {
  let a_num = Number(a.time);
  let b_num = Number(b.time);
  if (a_num == b_num ) { return 0}
  if (a_num > b_num) {  return 1 }
  if (a_num < b_num) {  return -1 }
}


/**
 *曜日の引数を漢字にして返す。
 * @return {string} dOfWはmon,tue,wed...など曜日の引数を漢字にして返す
 */

function dOfW2kanji(dOfW) {
  if (dOfW == 'mon') {
    return '月';
  } else if (dOfW == 'tue') {
    return '火';
  } else if (dOfW == 'wed') {
    return '水';
  } else if (dOfW == 'thu') {
    return '木';
  } else if (dOfW == 'fri') {
    return '金';
  } else if (dOfW == 'sat') {
    return '土';
  } else if (dOfW == 'sun') {
    return '日';
  }
}

// =======================日付の取得=======================
/**
 *
 * @returns {Array} 1~7 月~日 thisWeek()[0]の呼ぶ
 * 念のため配列度取り出せるようにしている。
 *
 */

function thisWeek() {
  let today = new Date(); //Dateをインスタンス化
  let startMon = new Date();
  let date = today.getDate(); //今日の日にちを取得
  let dayNum = today.getDay(); //今日の曜日を取得（1～7までの数字でとれる）
  let dayDate = [];
  for (i = 0; i <= 7; i++) {
    startMon.setDate(date - dayNum + i);
    dayDate[i] = startMon;
    startMon = new Date();
  }
  return dayDate;
}
// ========================================================
console.log(thisWeek());
console.log(thisWeek()[0]);
console.log(`${thisWeek()[0].getMonth() + 1}/${thisWeek()[0].getDate()}`);
let day2Date = {
  mon_d: `${thisWeek()[1].getMonth() + 1}/${thisWeek()[1].getDate()}`,
  tue_d: `${thisWeek()[2].getMonth() + 1}/${thisWeek()[2].getDate()}`,
  wed_d: `${thisWeek()[3].getMonth() + 1}/${thisWeek()[3].getDate()}`,
  thu_d: `${thisWeek()[4].getMonth() + 1}/${thisWeek()[4].getDate()}`,
  fri_d: `${thisWeek()[5].getMonth() + 1}/${thisWeek()[5].getDate()}`,
  sat_d: `${thisWeek()[6].getMonth() + 1}/${thisWeek()[6].getDate()}`,
  sun_d: `${thisWeek()[7].getMonth() + 1}/${thisWeek()[7].getDate()}`,
}

console.log(day2Date.mon_d);
$('#mon .dayBox').prepend(`<P>${day2Date.mon_d}</P>`);
$('#tue .dayBox').prepend(`<P>${day2Date.tue_d}</P>`);
$('#wed .dayBox').prepend(`<P>${day2Date.wed_d}</P>`);
$('#thu .dayBox').prepend(`<P>${day2Date.thu_d}</P>`);
$('#fri .dayBox').prepend(`<P>${day2Date.fri_d}</P>`);
$('#sat .dayBox').prepend(`<P>${day2Date.sat_d}</P>`).css('color', 'blue');;
$('#sun .dayBox').prepend(`<P>${day2Date.sun_d}</P>`).css('color', 'Red');;


// 追加するプランの曜日情報
let allData = [];
let allJson = '';
let addPlan_dOfW = '';
let addPlan_time = '';
let addPlanId = '';
let planId = '';

// =======================[＋]ボタン=======================
// もっと綺麗な書き方できそう
$('#addPlan_mon').on('click', function () {
  const dOfW = '月';
  addPlan_dOfW = 'mon';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_tue').on('click', function () {
  const dOfW = '火';
  addPlan_dOfW = 'tue';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_wed').on('click', function () {
  const dOfW = '水';
  addPlan_dOfW = 'wed';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_thu').on('click', function () {
  const dOfW = '木';
  addPlan_dOfW = 'thu';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_fri').on('click', function () {
  const dOfW = '金';
  addPlan_dOfW = 'fri';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_sat').on('click', function () {
  const dOfW = '土';
  addPlan_dOfW = 'sat';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_sun').on('click', function () {
  const dOfW = '日';
  addPlan_dOfW = 'sun';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val(9);
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});


// =======================入力フォーム============================
$('#save').on('click', function () {
  if (addPlan_dOfW == '') {
    alert('曜日の「＋」ボタンを押し曜日を選択してください。')
  } else {
    addPlan_time = $('#mkPlan_time').val();
    addPlan_title = $('#mkPlan_title').val();
    console.log(addPlan_time);
    console.log(addPlan_title);
    console.log(addPlan_dOfW);

    // 曜日のarticleを拾ってきてプランの内容をappendChild
    const childContent = `<section class="plan" id="${addPlan_dOfW}_${addPlan_time}"><div>${addPlan_time}:00</div><div>${addPlan_title}</div><button class="deleteBtn" value="${addPlan_dOfW}_${addPlan_time}" id="btn_${addPlan_dOfW}_${addPlan_time}">削除</button></section>`
    // このidは「+」から取得する必要がある

    /*
    保存と編集
    保存：もし同じ曜日、同じ時間のデータなければ
    ・appendChild
    ・データpush

    編集：もし同じ曜日、同じ時間のデータあれば
    ・removeChild
    ・データ書き換えrel
    ・appendChild
    */
    if (searchAllData(`${addPlan_dOfW}_${addPlan_time}`)) {
      $(`#${addPlan_dOfW}_${addPlan_time}`).remove();
      let data = searchAllData(`${addPlan_dOfW}_${addPlan_time}`).searchData;
      data.title = addPlan_title;
      data.text = $('#mkPlan_textarea').val();
      // console.log(data)
      // 時間順にallDataを並び替え
      allData.sort(allData_time_order);
      console.log(allData)
      //allDataををJSON形式に変換し上書きする。
      allJson = JSON.stringify(allData);
      //ローカルストレージにweeklyScheduleAppというキーでテキストを保存する。
      localStorage.setItem('weeklyScheduleApp', allJson);
      location.reload();
      console.log(allJson);
    } else {
      // データに入れる-------------------------------
      //タイトルとテキストエリアの文字列を保存
      const data = {
        id: `${addPlan_dOfW}_${addPlan_time}`,
        dOfW: addPlan_dOfW,
        title: addPlan_title,
        time: addPlan_time,
        text: $('#mkPlan_textarea').val(),
        // child: childContent,//html型ごと入れるとデータ食うのでデータ読み込んで再編成する
      }
      console.log(data);
      // allData配列にプッシュÏÏ
      allData.push(data);
      /*ここで、allDataを時間順に並び替え(ソート)させておく。
      →ボタン押したあとリロード
      →順番通りに表示
      */
      allData.sort(allData_time_order);

      //allDataををJSON形式に変換し上書きする。
      allJson = JSON.stringify(allData);
      //ローカルストレージにweeklyScheduleAppというキーでテキストを保存する。
      localStorage.setItem('weeklyScheduleApp', allJson);
      console.log(allJson);
      location.reload();
    }
    $(`#${addPlan_dOfW}`).append(childContent);
  }
});

// =======================削除ボタン============================

$('div').on('click', '.deleteBtn', function () {
  console.log($(this).val());
  planId = $(this).val();
  $(`#${planId}`).remove();

  // ローカルストレージから削除
  let dataNum = searchAllData(planId);
  dataNum = dataNum.num;
  allData.splice(dataNum, 1);
  //allDataををJSON形式に変換し上書きする。
  allJson = JSON.stringify(allData);
  //ローカルストレージにweeklyScheduleAppというキーでテキストを保存する。
  localStorage.setItem('weeklyScheduleApp', allJson);
  // location.reload();
  console.log(allJson);
})

// =======================データ初期値表示============================
if (localStorage.getItem('weeklyScheduleApp')) {
  //ローカルストレージからmemo2というキーの値を所得する。
  allJson = localStorage.getItem('weeklyScheduleApp');
  console.log(allJson);
  allData = JSON.parse(allJson);
  console.log(allData);

  //テキストエリアに取得した値を表示する。
  for (i = 0; i < allData.length; i++) {
    // $(`#${allData[i].dOfW}`).append(allData[i].child);

    const childContent = `<section class="plan" id="${allData[i].id}"><div>${allData[i].time}:00</div><div>${allData[i].title}</div><button class="deleteBtn" value="${allData[i].id}" id="btn_${allData[i].id}">削除</button></section>`
    // console.log(childContent);
    $(`#${allData[i].dOfW}`).append(childContent);
  }
}



// ===================テキスト表示（仮）===================
let select = '';
$('div').on('click', '.plan', function () {
  // if ($('div').on('click', '.deleteBtn') == false) {
  //   console.log("削除ボタンは押されていない");
  // }
  console.log(`#${select.id}`)
  if (select != '') {
    $(`#${select.id}`).css('background-color', 'white');
  }
  $(this).css('background-color', '#ffd700');

  if (searchAllData($(this).attr('id'))) {
    let data = searchAllData($(this).attr('id'));
    data = data.searchData;
    select = data;
    $('#displayText').text(data.text)
    // ===================編集===================
    // フォームに表示
    $('#mkPlan_dOfW').text(dOfW2kanji(data.dOfW));
    $("#mkPlan_time").val(data.time);
    $('#mkPlan_title').val(data.title);
    $('#mkPlan_textarea').val(data.text);
    // 保存用変数に曜日を入れる
    addPlan_dOfW = data.dOfW;
  }


})






// ===================ローカルストレージのデータ削除=====================
$('#removeLs').on('click', function () {
  if (window.confirm('今週の予定を全て削除します')) {
    //allDataををJSON形式に変換し上書きする。
    allJson = '';
    //ローカルストレージにweeklyScheduleAppというキーでテキストを保存する。
    localStorage.setItem('weeklyScheduleApp', allJson);
    location.reload();
  } else {
    window.alert('キャンセルされました'); // 警告ダイアログを表示
  }
})

// ===================データの入出力=====================
// セキュリテイー的に問題ありそうなので保留
/*
$('#loadData').on('click', function() {
  allJson = $('#inputData').val();
  localStorage.setItem('weeklyScheduleApp',allJson);
  location.reload();
});
$('#outputData').val(allJson);
*/








