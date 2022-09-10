var tolist = document.getElementById("tolist")
var id = 0;

function add() {
    id++;

    var inp = document.getElementById("todo")
    var li = document.createElement('li')
    li.setAttribute("id", id)
    var input = document.createElement('input')
    input.setAttribute("value", inp.value);
    input.setAttribute('disabled', 'disabled')
    li.appendChild(input);
    
    // let unplist = document.getElementsByTagName('li').length

    var del = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    del.setAttribute("onclick", "dele()")
    del.setAttribute("class", 'close')
    del.appendChild(delText)

    var edit = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    edit.setAttribute("onclick", 'edit(' + id + ')')
    edit.setAttribute("class", 'edit')
    edit.appendChild(editText)

    var done = document.createElement('button')
    done.style.display = "none"
    var doneText = document.createTextNode('DONE')
    done.setAttribute("onclick", 'done('+ id +')')
    done.setAttribute("class", 'done')
    done.setAttribute("id", 'done')
    done.appendChild(doneText)

    var a = li.appendChild(del)
    var b = li.appendChild(edit)
    var d = li.appendChild(done)
    var c = tolist.appendChild(li)

    inp.value = ""
}
function dele() {
    var delText = event.target.parentNode
    delText.remove()
}
function deleteall() {
    tolist.innerHTML = ""
}
function edit(num) {
    //getting that li which user click
    let li = document.getElementById(num)
    let inp = li.childNodes[0]
    inp.removeAttribute('disabled')
    inp.focus()
    inp.style.outline = "1px solid black"
    inp.setAttribute("class", 'highlightcolor')
    //display done button over edit button 
    let done = li.childNodes[3]
    done.style.display = "block"
}
function done(num) {
    let li = document.getElementById(num)
    let inp = li.childNodes[0]
    let value = event.target.parentNode.firstChild.value;
    event.target.parentNode.firstChild.nodeValue = value
    let done = li.childNodes[3]
    done.style.display = "none"
    inp.setAttribute('disabled', 'disabled')
    inp.removeAttribute('class')
    inp.style.outline = "none"
}