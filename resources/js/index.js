const date = new Date('2021-09-05').getTime()

const countdown = setInterval(() => {
    let today = new Date().getTime()
    let diff = date - today

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if(days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
        document.getElementById('countDay').innerHTML = days + 'd'
        document.getElementById('countHour').innerHTML = hours + 'h'
        document.getElementById('countMinute').innerHTML = minutes + 'm'
        document.getElementById('countSecond').innerHTML = seconds + 's'
    } else {
        document.getElementById('countDay').innerHTML = '0'
        document.getElementById('countHour').innerHTML = '0'
        document.getElementById('countMinute').innerHTML = '0'
        document.getElementById('countSecond').innerHTML = '0'
    }
    
    
}, 1000);
