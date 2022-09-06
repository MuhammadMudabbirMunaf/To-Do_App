
function NewConstructor (id, title, complete) {
    this.id = id;
    this.title = title;
    this.complete = complete;
}
var array = [];
var count = 0;
function add() {
    var addInArray = document.getElementById("input1");
    // console.log(addInArray.value);
    array.push(new NewConstructor(count, addInArray.value, 0))
    count++
    for (var i = 0; i < array.length; i++) {
        document.getElementById("getDiv").innerHTML = array[i].title;
    }
}