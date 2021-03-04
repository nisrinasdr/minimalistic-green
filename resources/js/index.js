const date = new Date('2021-03-05').getTime()

const countdown = setInterval(() => {
    let today = new Date().getTime()
    let diff = date - today

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countDay').innerHTML = days + 'd'
    document.getElementById('countHour').innerHTML = hours + 'h'
    document.getElementById('countMinute').innerHTML = minutes + 'm'
    document.getElementById('countSecond').innerHTML = seconds + 's'
    
}, 1000);


