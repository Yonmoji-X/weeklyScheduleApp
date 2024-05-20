// +ボタンについて
// +ボタンを押すと、入力フォームのタイトルに曜日が入る。

// 追加するプランの曜日情報
let addPlan_dOfW = '';
let addPlan_time = '';
let planId = '';

// =======================[＋]ボタン=======================
// もっと綺麗な書き方できそう
$('#addPlan_mon').on('click', function() {
  const dOfW = '月';
  addPlan_dOfW = 'mon';
  $('#mkPlan_dOfW').text(dOfW);
});
$('#addPlan_tue').on('click', function() {
  const dOfW = '火';
  addPlan_dOfW = 'tue';
  $('#mkPlan_dOfW').text(dOfW);
});
$('#addPlan_wed').on('click', function() {
  const dOfW = '水';
  addPlan_dOfW = 'wed';
  $('#mkPlan_dOfW').text(dOfW);
});
$('#addPlan_thu').on('click', function() {
  const dOfW = '木';
  addPlan_dOfW = 'thu';
  $('#mkPlan_dOfW').text(dOfW);
});
$('#addPlan_fri').on('click', function() {
  const dOfW = '金';
  addPlan_dOfW = 'fri';
  $('#mkPlan_dOfW').text(dOfW);
});
$('#addPlan_sat').on('click', function() {
  const dOfW = '土';
  addPlan_dOfW = 'sat';
  $('#mkPlan_dOfW').text(dOfW);
});
$('#addPlan_sun').on('click', function() {
  const dOfW = '日';
  addPlan_dOfW = 'sun';
  $('#mkPlan_dOfW').text(dOfW);
});


// =======================入力フォーム============================
$('#save').on('click', function() {
  addPlan_time = $('#mkPlan_time').val();
  addPlan_title = $('#mkPlan_title').val();
  console.log(addPlan_time);
  console.log(addPlan_title);

  // 曜日のarticleを拾ってきてプランの内容をappendChild
  const child = `<section class="plan" id="${addPlan_dOfW}_${addPlan_time}"><div>${addPlan_time}:00</div><div>${addPlan_title}</div><button class="deleteBtn" value="${addPlan_dOfW}_${addPlan_time}" id="btn_${addPlan_dOfW}_${addPlan_time}">削除</button></section>`
  // このidは「+」から取得する必要がある
  $(`#${addPlan_dOfW}`).append(child);
});

// =======================削除ボタン============================

$('div').on('click', '.deleteBtn', function() {
  console.log($(this).val());
  planId = $(this).val();
  $(`#${planId}`).remove();
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
