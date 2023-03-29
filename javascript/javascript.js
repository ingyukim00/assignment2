let darkmode_switch = 0;
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

let cancel_switch = 0;
let newnote_switch = 0;

function cancel() {
    var text_area = document.getElementById("take_note");
    var save_button = document.getElementById("save_button");
    var cancel_button = document.getElementById("cancel_button");
    text_area.classList.toggle("hiding");
    save_button.classList.toggle("hiding");
    cancel_button.classList.toggle("hiding");
    return cancel_switch = 1;
};
