var items = ["item1", "item2", "item3", "item4"];
var list = document.createElement("ul");
document.querySelector(".card-header").appendChild(list);
list.className = "list-group";


items.forEach(function (item) {
    list.classList.add("list-group-flush");
    list.id = "myList";
    var li = document.createElement("li");
    //! appended items name as a text to list

    var t = document.createTextNode(item);
    li.className = "list-group-item";
    li.appendChild(t);
    list.appendChild(li);
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");


    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    
    




    


    })