const inputBox = document.getElementById("input-box");
const listContenr = document.getElementById("list-container");
function addTask() {
         if (inputBox.value==='') {
             alert("You must write something!");
         } else {
             let li = document.createElement('li');
             li.innerHTML = inputBox.value;
             listContenr.appendChild(li);
             let span = document.createElement("span");
             span.innerHTML = "\u00d7";
             li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContenr.addEventListener("click", function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }    
}, false);
    
function saveData() {
    localStorage.setItem("data", listContenr.innerHTML);
}

function showTask(){
    listContenr.innerHTML = localStorage.getItem("data");     
}
showTask();
