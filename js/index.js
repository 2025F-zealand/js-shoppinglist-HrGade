//Write your Javascript code here
console.log("Shoppinglist")

document.addEventListener("DOMContentLoaded", function () {
    function createListItem(className, id, text) {
        let li = document.createElement("li");

        // Sæt attributter
        li.setAttribute("class", className);
        li.setAttribute("id", id);

        // Opret en tekstnode og tilføj den til li
        let textNode = document.createTextNode(text);
        li.appendChild(textNode);

        return li;
    }

    function appendListItem(listId, listItem) {
        let list = document.getElementById(listId);

        if (list) {
            list.appendChild(listItem);
            console.log(`Item added to ${listId}:`, listItem); 
        } else {
            console.error(`List with id '${listId}' not found.`);
        }
    }

    // **Test om det virker**
    let newUnhealthyItem = createListItem("unhealthy", "5", "Chocolate");
    appendListItem("listUnhealthy", newUnhealthyItem);

    let newHealthyItem = createListItem("healthy", "6", "Bananas");
    appendListItem("list", newHealthyItem);
});