const start=document.getElementById('start')
const stop=document.getElementById('stop')

//generating random number

const randomColor= () => {
    const hex="0123456789ABCDEF"
    let color="#"
    for(i=0;i<6;i++)    //6 digit colour codes
    {
       color+=hex[Math.floor(Math.random() * 16)]    
    }
    return color
}

let stopInterval;

const startChangingColor= function(){
    if(stopInterval==null)
    {
        stopInterval = setInterval(function(){
            document.body.style.backgroundColor=randomColor()
        },1000)
    }
}

const stopChangingColor=function(){
    clearInterval(stopInterval)
    stopInterval = null
}

start.addEventListener('click',startChangingColor)
stop.addEventListener('click',stopChangingColor)