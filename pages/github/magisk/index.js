let d=(file)=>{let a=document.createElement('a');a.href='./files/'+file;a.download=file;document.body.appendChild(a);a.click();document.body.removeChild(a)}

let g = e => document.getElementById(e)

g('ytf').onclick = function() {
    d('youtube-fix.zip')
}

g('tb').onclick = function() {
    d('touch-boost.zip')
}

g('cb').onclick = function() {
    d('camera-better.zip')
}

g('gs').onclick = function() {
    d('gemini-support.zip')
}

g('fb').onclick = function() {
    d('fast-booting.zip')
}

g('dfs').onclick = function() {
    d('disableflagsecure.apk')
}

g('nsr').onclick = function() {
    d('nostoragerestrict.apk')
}