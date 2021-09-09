function main() {
    SpacePressed()
    SupprPressed()
    blink()
}

var sentence = []
var sentencecode = []
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function blink() {
    document.body.addEventListener('keydown', (e) => {
        if(!alphabet.includes(e.key)) return
        var rotorsvalues = random()
        var k = alphabet.indexOf(e.key)
        if(k >= 20) {
            k = k - (rotorsvalues[0]%10)
        }
        var newIndex = (k + rotorsvalues[0] + rotorsvalues[1] + rotorsvalues[2]) % 26
        var key = document.getElementById(alphabet[newIndex]) || false
        if(key) {
            key.style.backgroundColor = "#E4FD67"
            key.style.boxShadow = "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #C3FE76 0 -1px 9px, #E4FD67 0 2px 12px"
            sentence.push(e.key)
            sentencecode.push(alphabet[newIndex])
            document.getElementById("sentence").innerHTML = sentence.join('')
            document.getElementById("sentencecode").innerHTML = sentencecode.join('')
            setTimeout(function() {
                document.getElementById(alphabet[newIndex]).style.backgroundColor = "white"
                document.getElementById(alphabet[newIndex]).style.boxShadow = ""
            }, 250)
        }
    });
}

function SpacePressed() {
    document.body.addEventListener('keydown', (e) => {
        if(e.key == ' ') {
            sentence.push("_")
            sentencecode.push("_")
            document.getElementById("sentence").innerHTML = sentence.join('')
            document.getElementById("sentencecode").innerHTML = sentencecode.join('')
            console.log(sentence)
        }
    });
}

function SupprPressed() {
    document.body.addEventListener('keydown', (e) => {
        if(e.keyCode == 8) {
            sentence.pop()
            sentencecode.pop()
            document.getElementById("sentence").innerHTML = sentence.join('')
            document.getElementById("sentencecode").innerHTML = sentencecode.join('')
        }
    });
}

function copy(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert(`Vous avez copier : '${$(element).text()}'`)
}

function random() {
    var rotor1 = document.getElementById("first")
    var rotor2 = document.getElementById("second")
    var rotor3 = document.getElementById("third")
    var v1 = Math.floor(Math.random() * 26)
    var v2 = Math.floor(Math.random() * 26)
    var v3 = Math.floor(Math.random() * 26)
    rotor1.innerHTML = v1
    rotor2.innerHTML = v2
    rotor3.innerHTML = v3
    return [v1, v2, v3]
}

main()