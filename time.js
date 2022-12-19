var id = document.getElementById('datenow')
var id2 = document.getElementById('datenow2')
var id3 = document.getElementById('cm')
var aa=45
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

    if (minutes <= 9) {
        minutes = '0' + minutes
    }
    if (seconds <= 9) {
        seconds = '0' + seconds
    }
    if (hour <= 9) {
        hour = '0' + hour
    }
    id.innerText = year + '年' + month + '月' + date1 + '日' + day
    id2.innerText = hour + ':' + minutes + ':' + seconds

    var obj = document.getElementById("datenow2");

    obj.style.color = '#191970';

}


 setInterval(nowdate, 0)
