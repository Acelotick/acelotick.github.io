let d=(file)=>{let a=document.createElement('a');a.href='./files/'+file;a.download=file;document.body.appendChild(a);a.click();document.body.removeChild(a)}

let g = e => document.getElementById(e)

g('we').onclick = function() {
    window.location.href='https://github.com/Acelotick/acelotick.github.io/raw/main/pages/wallpaperengine/files/Wallpaper%20Engine.zip'
}

g('weg').onclick = function() {
    window.location.href='./guide/index.html'
}

g('bg1').onclick = function() {
    d('1.zip')
}

g('bg2').onclick = function() {
    d('2.zip')
}

g('bg3').onclick = function() {
    d('3.zip')
}

g('bg4').onclick = function() {
    d('4.zip')
}

g('bg5').onclick = function() {
    d('5.zip')
}

g('bg6').onclick = function() {
    d('6.zip')
}

g('bg7').onclick = function() {
    d('7.zip')
}

g('bg8').onclick = function() {
    d('8.zip')
}