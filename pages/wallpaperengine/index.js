let d=(file)=>{let a=document.createElement('a');a.href='./files/'+file;a.download=file;document.body.appendChild(a);a.click();document.body.removeChild(a)}

let g = e => document.getElementById(e)

g('we').onclick = function() {
    window.location.href='https://github.com/Acelotick/acelotick.github.io/raw/main/pages/wallpaperengine/files/Wallpaper%20Engine.zip'
}

g('weg').onclick = function() {
    window.location.href='./guide/index.html'
}

for (v of [1, 2, 3, 4, 5, 6, 7, 8]) {
    g('bg' + v).onclick = function() {
        d(v + '.zip')
    }
}