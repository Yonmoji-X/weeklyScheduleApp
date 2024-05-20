// +ボタンについて
// +ボタンを押すと、入力フォームのタイトルに曜日が入る。
// addBtn

// 関数類
function searchAllData(objIdKey) {
  for (i = 0; i < allData.length; i++) {
    if (allData[i].id == objIdKey) {
      let info = {num: i, searchData: allData[i]}
      return info
    }
  }
}




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

// 追加するプランの曜日情報
let allData = [];
let allJson = '';
let addPlan_dOfW = '';
let addPlan_time = '';
let planId = '';

// =======================[＋]ボタン=======================
// もっと綺麗な書き方できそう
$('#addPlan_mon').on('click', function() {
  const dOfW = '月';
  addPlan_dOfW = 'mon';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_tue').on('click', function() {
  const dOfW = '火';
  addPlan_dOfW = 'tue';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_wed').on('click', function() {
  const dOfW = '水';
  addPlan_dOfW = 'wed';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_thu').on('click', function() {
  const dOfW = '木';
  addPlan_dOfW = 'thu';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_fri').on('click', function() {
  const dOfW = '金';
  addPlan_dOfW = 'fri';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_sat').on('click', function() {
  const dOfW = '土';
  addPlan_dOfW = 'sat';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});
$('#addPlan_sun').on('click', function() {
  const dOfW = '日';
  addPlan_dOfW = 'sun';
  $('#mkPlan_dOfW').text(dOfW);
  $("#mkPlan_time").val('');
  $('#mkPlan_title').val('');
  $('#mkPlan_textarea').val('');
});


// =======================入力フォーム============================
$('#save').on('click', function() {
  if (addPlan_dOfW == '') {
    alert('曜日の「＋」ボタンを押し曜日を選択してください。')
  } else {
    addPlan_time = $('#mkPlan_time').val();
    addPlan_title = $('#mkPlan_title').val();
    console.log(addPlan_time);
    console.log(addPlan_title);

    // 曜日のarticleを拾ってきてプランの内容をappendChild
    const childContent = `<section class="plan" id="${addPlan_dOfW}_${addPlan_time}"><div>${addPlan_time}:00</div><div>${addPlan_title}</div><button class="deleteBtn" value="${addPlan_dOfW}_${addPlan_time}" id="btn_${addPlan_dOfW}_${addPlan_time}">削除</button></section>`
    // このidは「+」から取得する必要がある
    $(`#${addPlan_dOfW}`).append(childContent);
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
          // allData配列にプッシュ
          allData.push(data);
          //allDataををJSON形式に変換し上書きする。
          allJson = JSON.stringify(allData);
          //ローカルストレージにweeklyScheduleAppというキーでテキストを保存する。
          localStorage.setItem('weeklyScheduleApp',allJson);
          console.log(allJson);
  }
});

// =======================削除ボタン============================

$('div').on('click', '.deleteBtn', function() {
  console.log($(this).val());
  planId = $(this).val();
  $(`#${planId}`).remove();

  // ローカルストレージから削除
  let dataNum = searchAllData(planId);
  dataNum = dataNum.num;
  allData.splice( dataNum, 1 );
  //allDataををJSON形式に変換し上書きする。
  allJson = JSON.stringify(allData);
  //ローカルストレージにweeklyScheduleAppというキーでテキストを保存する。
  localStorage.setItem('weeklyScheduleApp',allJson);
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
    console.log(childContent);
    $(`#${allData[i].dOfW}`).append(childContent);
  }
}



// ===================テキスト表示（仮）===================
let select = '';
$('div').on('click', '.plan', function() {
  // if ($('div').on('click', '.deleteBtn') == false) {
  //   console.log("削除ボタンは押されていない");
  // }
  console.log(`#${select.id}`)
  if (select != '') {
    $(`#${select.id}`).css('background-color','whitesmoke');
  }
  $(this).css('background-color','#FFCB72');

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
    // 保存用変数に入れる
    // addPlan_dOfW = dOfW2kanji(data.dOfW);
    // addPlan_time = data.time;
  }


})






// ===================ローカルストレージのデータ削除=====================
$('#removeLs').on('click', function() {
  localStorage.removeItem('weeklyScheduleApp');
})





/*
          <section class="plan" id="${addPlan_dOfW}_${addPlan_time}">
              <div>${addPlan_time}</div>
              <div>${addPlan_title}</div>
          </section>

          <section class="plan" id="sun_9">
              <div>9:00</div>
              <div>課題</div>
          </section>
*/



// =====================================以下参考=====================================
/*
    //保存するときの処理
    $('#save').on('click', function() {
      //タイトルとテキストエリアの文字列を保存
      const data = {
        title: $('#input').val(),
        text: $('#text_area').val(),
      }
      console.log(data);
      //オブジェクトをJSON形式に変換する。
      const json = JSON.stringify(data);
      console.log(json);
      //ローカルストレージにmemo2というキーでテキストを保存する。
      localStorage.setItem('memo2',json);

    });

    //削除するときの処理
    $('#clear').on('click', function() {
      //ローカルストレージからmome2というキーの値を削除する。
      localStorage.removeItem('memo2');
      //空文字列でテキストエリアを上書きする。
      $('#input').val('');
      $('#text_area').val('');
    });

    if (localStorage.getItem('memo')) {
      //ローカルストレージからmemo2というキーの値を所得する。
      const json = localStorage.getItem('memo2');
      console.log(json);
      const data = JSON.parse(json);
      console.log(data);

      //テキストエリアに取得した値を表示する。
      $('#input').val(data.title);
      $('#text_area').val(data.text);


    }

    */
