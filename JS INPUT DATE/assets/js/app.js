var local_date = new Date()
var hour = local_date.getHours()
var minute = local_date.getMinutes()
var second = local_date.getSeconds()
var time = (hour * 60 * 60) + (minute * 60) + second

if(time > 21600 && time <= 43200) {
    alert('Good morning')
    document.body.style.backgroundImage = 'linear-gradient(to right, #ff512f, #f09819)'
}

else if(time > 43200 && time <= 64800) {
    alert('Good evening')
    document.body.style.backgroundImage = 'linear-gradient(to right, #22c1c3, #fdbb2d)'
}

else if((time > 64800 && time <= 86400) || (time >= 0 && time <= 21600)) {
    alert('Good night')
    document.body.style.backgroundImage = 'linear-gradient(to right, #0b486b, #f56217)'
}

function Plus() {
    var value1 = + document.getElementById('input1').value
    var value2 = + document.getElementById('input2').value
    var result = value1 + value2
    document.getElementById('result').innerHTML = result
}

function Minus() {
    var value1 = document.getElementById('input1').value
    var value2 = document.getElementById('input2').value
    var result = value1 - value2
    document.getElementById('result').innerHTML = result
}

function Times() {
    var value1 = document.getElementById('input1').value
    var value2 = document.getElementById('input2').value
    var result = value1 * value2
    document.getElementById('result').innerHTML = result
}

function Divide() {
    var value1 = document.getElementById('input1').value
    var value2 = document.getElementById('input2').value
    var result = value1 / value2
    document.getElementById('result').innerHTML = result.toFixed(2)
}