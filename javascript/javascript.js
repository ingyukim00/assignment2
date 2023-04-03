let darkmode_switch = 0;
let cancel_switch = 0;
let newnote_switch = 0;
let notesArray = [];
let title = "";
let body = "";    // format: {title:"note one", body:"this is my first note"}
var darkmode_button = document.getElementById("darkmode_button");
darkmode_button.addEventListener("click", DarkMode);
var cancel_button = document.getElementById("cancel_button");
cancel_button.addEventListener("click", cancel);
var newnote_button = document.getElementById("newnote_button");
newnote_button.addEventListener("click", NewNote);
var save_button = document.getElementById("save_button");
save_button.addEventListener("click", Save);

function DarkMode() {
    var body_element = document.body;
    var side_bar = document.querySelector("header");
    if (darkmode_switch === 0) {
        body_element.classList.toggle("dark_mode_body");
        side_bar.classList.toggle("dark_mode_sidebar");
        darkmode_button.textContent = "Light Mode";
        return darkmode_switch = 1;
    }
    else {
        body_element.classList.remove("dark_mode_body");
        side_bar.classList.remove("dark_mode_sidebar");
        darkmode_button.textContent = "Dark Mode";
        return darkmode_switch = 0;
    }
};


function cancel() {
    var text_area = document.getElementById("take_note");
    var save_button = document.getElementById("save_button");
    text_area.classList.toggle("hiding");
    save_button.classList.toggle("hiding");
    cancel_button.classList.toggle("hiding");
    return cancel_switch = 1;
};

function NewNote() {
    var text_area = document.getElementById("take_note");
    var save_button = document.getElementById("save_button");
    var cancel_button = document.getElementById("cancel_button");
    if (cancel_switch === 1) {
        text_area.classList.remove("hiding");
        save_button.classList.remove("hiding");
        cancel_button.classList.remove("hiding");
        return cancel_switch = 0;
    }
    else if (cancel_switch === 0) {
        text_area.value = "";
    };
};

function Save() {
    var text_area = document.getElementById("take_note");
    if (!(text_area.value === "")) {
        let title_input = prompt("Type for the title: ");
        let body_input = text_area.value;
        format = { title: title_input, body: body_input };
        if (notesArray.length === 0) {
            notesArray.push(format);
            const note_list = document.querySelector('header ul');
            const new_list = document.createElement("li");
            new_list.textContent = title_input;
            note_list.appendChild(new_list);
        }
        else {
            for (let i = 0; i < notesArray.length; i++) {
                console.log(i);
                if (notesArray[i].title === title_input) {
                    console.log(notesArray[i].title);
                    alert("You already have a same name of title.");
                    break
                }
                else if (i === notesArray.length - 1) {
                    notesArray.push(format);
                    const note_list = document.querySelector('header ul');
                    const new_list = document.createElement("li");
                    new_list.textContent = title_input;
                    note_list.appendChild(new_list);
                    break
                };

            };
        };
    };
};


note_lists = document.querySelector("header ul");
note_lists.addEventListener("click", function (event) {
    var text_area = document.getElementById("take_note")
    for (let item of notesArray) {
        if (item.title === event.target.textContent) {
            text_area.value = item.body;
        }
    }
});