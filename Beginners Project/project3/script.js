const clock = document.getElementById('clock')


setInterval(function () {
    const date = new Date()
    // console.log(date.toLocaleTimeString());

    clock.innerText = date.toLocaleTimeString()
    
}, 1000)