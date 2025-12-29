add = document.getElementById("add")
list = document.getElementById("list")
add.addEventListener("click", handle)

function handle(){
    input = document.getElementById("input")
    if (input.value.trim()==""){
        add.style.backgroundColor="red"
    }
    else{

        add.style.backgroundColor="rgb(130, 229, 130)"
        list.innerHTML += "<div class='list-items'><input type='checkbox' class='list-checkbox'> <label class='list-label'>" + input.value + "</label></div>"
        input.value = ""

        list_checkbox = document.getElementsByClassName("list-checkbox")
        list_items = document.getElementsByClassName("list-items")

        for (let i=0; i<list_checkbox.length; i++){
            list_checkbox[i].addEventListener("click", wipe)
        }
        
        function wipe(){
        let item = this.parentElement
        item.classList.add("done")
        setTimeout(() => {
            item.innerHTML = ""
        }, 1000)
        }
    }
    

    
}



