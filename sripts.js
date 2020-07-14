let list = [];
let noA = 0;
let noU = 0;
let noD = 0
let done = false;
let all = true;
const addTodo = () => {
    noA++
    noU++
    item = document.getElementById("todoInput").value
        // // if (list.map((el) => el.text.includes(item))) {
        // //     document.getElementById("todoInput").value = 'you already have this todo'
        // } else {
    list.push({ text: `${item}`, isDone: false, listNo: 1 })
    document.getElementById("todoInput").value = ''
        // }
    render()
}

const toogle = (index) => {
    if (list[index].isDone === false) {
        list[index].isDone = true
        noD++
        noU--
    } else {
        list[index].isDone = false
        noD--
        noU++
    }
    render()

}


document.addEventListener("keyup", keyUp)
const remove = ((index) => {
    noA--
    if (!list[index].isDone) {
        noU--
    } else {
        noD--
    }
    list.splice(index, 1)
    render()
})

function keyUp( /** @type [KeyboardEvent]*/ ev) {
    switch (ev.keyCode) {
        case 13: //left key (stop rotating)
            addTodo()
            break;
    }
}

function render() {
    let listOut = list.map((el, index) => {
        if (!el.isDone) {
            if (done === false || all === true) {
                return (`<li class="d-flex" style="justify-content:space-between;border: 1px solid black"><span>${el.text}</span><span><button onclick="toogle(${index})"> done</button><button onclick="remove(${index})"> remove </button></span></li>`)
            }
        } else {
            if (done === true || all === true) {
                return (`<li class="d-flex" style="justify-content:space-between;border: 1px solid black"><span>${el.text}</span><span><button onclick="toogle(${index})"> undone</button><button onclick="remove(${index})"> remove </button></span></li>`)
            }
        }
    }).join('')

    document.getElementById("todoOutput").innerHTML = listOut
    document.getElementById("noA").innerHTML = noA
    document.getElementById("noU").innerHTML = noU
    document.getElementById("noD").innerHTML = noD

}

const showDone = () => {
    done = true
    all = false
    render()
}
const showUndone = () => {
    done = false
    all = false
    render()
}
const showAll = () => {
    all = true
    render()
}