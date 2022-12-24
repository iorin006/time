var id = document.getElementById('datenow')
var id2 = document.getElementById('datenow2')
var id3 = document.getElementById('cm')
var down = 0

console.log('使ってくれてありがとうございます')
console.log('なんか良いアイディアあれば教えてください')
console.log('よろしくお願いします')
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
    id2.style.color = '#191970';


    if (id2.innerText >= '09:00:00') {
        cm.innerText = '朝礼まで'
    }
    //１
    if (id2.innerText >= '09:45:00') {
        cm.innerText = '1限目'
    }
    if (id2.innerText >= '10:35:00') {
        cm.innerText = "休み時間"
    }
    //2
    if (id2.innerText >= '10:45:00') {
        cm.innerText = '2限目'
    }
    if (id2.innerText >= '11:35:00') {
        cm.innerText = "休み時間"
    }
    //3
    if (id2.innerText >= '11:45:00') {
        cm.innerText = '3限目'
    }
    if (id2.innerText >= '12:35:00') {
        cm.innerText = '昼休み'
    }
    //4
    if (id2.innerText >= '13:15:00') {
        cm.innerText = '4限目'
    }
    if (id2.innerText >= '14:05:00') {
        cm.innerText = "休み時間"
    }
    //5
    if (id2.innerText >= '14:15:00') {
        cm.innerText = '5限目'
    }
    if (id2.innerText >= '15:05') {
        cm.innerText = "休み時間"
    }
    //6
    if (id2.innerText >= '15:15:00') {
        cm.innerText = '6限目'
    }
    if (id2.innerText >= '16:05:00') {
        cm.innerText = "終礼"
    }
    if (id2.innerText >= '16:15:00') {
        cm.innerText = "放課後"
    }
    if (id2.innerText >= '17:30:00') {
        cm.innerText = "解散"
    }
}
setInterval(nowdate, 0)
