add = document.getElementById("add")
list = document.getElementById("list")
add.addEventListener("click", handle)

function handle(){
    input = document.getElementById("input")
    list.innerHTML += "<div class='list-items'><input type='checkbox' class='list-checkbox'> <label class='list-label'>" + input.value + "</label></div>"
    input.value = ""

    list_checkbox = document.getElementsByClassName("list-checkbox")
    
}

