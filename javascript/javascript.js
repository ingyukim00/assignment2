let dark_mode = 0;
function DarkMode() {
    var body_element = document.body;
    var side_bar = document.querySelector("header");
    var darkmode_button = document.querySelector("#darkmode_button");
    if (dark_mode === 0) {
        body_element.classList.toggle("dark_mode_body");
        side_bar.classList.toggle("dark_mode_sidebar");
        darkmode_button.textContent = "Light Mode"
        return dark_mode = 1;
    }
    else {
        body_element.classList.remove("dark_mode_body");
        side_bar.classList.remove("dark_mode_sidebar");
        darkmode_button.textContent = "Dark Mode"
        return dark_mode = 0;
    }
};