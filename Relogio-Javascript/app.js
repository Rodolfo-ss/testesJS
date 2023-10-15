const clockTime =  document.querySelector('.myClock')

let conter = 0

const formatTime = unit => String(unit).length === 1 ? `0${unit}` : unit

setInterval(() => {
    const present = new Date()
    const hours = present.getHours() 
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()
    
    clockTime.innerHTML = `<span>${formatTime(hours)}</span>:<span>${formatTime(minutes)}</span>:<span>${formatTime(seconds)}</span>`
}, 1000)


