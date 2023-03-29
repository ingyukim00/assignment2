let darkmode_switch = 0;
let cancel_switch = 0;
let newnote_switch = 0;
let notesArray = [];
let title = "";
let body = "";    // format: {title:"note one", body:"this is my first note"}

function DarkMode() {
    var body_element = document.body;
    var side_bar = document.querySelector("header");
    var darkmode_button = document.getElementById("darkmode_button");
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
    var cancel_button = document.getElementById("cancel_button");
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
    var text_area = document.getElementById("take_note")
    if (!(text_area.value === "")) {
        let title_input = prompt("Type for the title: ");
        title = title_input;
        body = text_area.value;
        format = {title: title, body: body};
        notesArray.push(format);
        const note_list = document.querySelector('header ul');
        const new_list = document.createElement("li");
        new_list.textContent = title;
        note_list.appendChild(new_list);
    }
};



console.log(document.querySelector('header ul'));


