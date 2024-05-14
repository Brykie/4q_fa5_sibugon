let contacts = [];

function addcontact() {
    let newcontact = document.getElementById('contact').value.trim();
    if (newcontact !== "") {
        contacts.push(newcontact);

        if (contacts.length > 7) {
            contacts.shift();
        }
    }

    contactlist();
    document.getElementById('contact').value = "";
}

function removecontact() {
    if (contacts.length > 0)
    contacts.pop();
    contactlist();
}

function contactlist() {
    let list = "<ul>";
    contacts.forEach(contact => {list += "<li>" + contact + "</li>";});
    list += "</ul>";
    document.getElementById('output').innerHTML = list;
}


