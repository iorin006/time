var id = document.getElementById('datenow')
var id2 = document.getElementById('datenow2')
function nowdate() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date1 = now.getDate()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    let day_arr = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)']
    let day = day_arr[now.getDay()];

    if (minutes < 9) {
        minutes = '0' + minutes
    }
    if (seconds < 9) {
        seconds = '0' + seconds
    }
    if (hour < 9) {
        hour = '0' + hour
    }
    id.innerHTML = year + '年' + month + '月' + date1 + '日' + day
    id2.innerHTML = hour + ':' + minutes + ':' + seconds

    var obj = document.getElementById("datenow2");
    obj.style.color = '#c71585';
    obj.style.color = '#191970';
}



setInterval(nowdate, 0)