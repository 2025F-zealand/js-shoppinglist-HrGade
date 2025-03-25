//Write your Javascript code here
console.log("Shoppinglist")

function createListItem(className, id, text)
{
    //Lav li-element
    let li = createElement("li");


    //set classname
    li.className = className
    li.setAttribute("class", className);

    //set id
    li.id = id;
    li.setAttribute("id", id);

    //lav en tekst-note og forbind den til en variabel textNode
    li.textContent = text;
    let textNode = document.createTextNode(text);

    //Append her tekst-noten til "li-elementet"
    li.appendChild(textNode);
    
    return li;
}

let newItem = createListItem("list-item", "item1", "Milk");

console.log(newItem);