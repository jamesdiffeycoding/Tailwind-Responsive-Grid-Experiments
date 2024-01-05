let container = document.getElementById("container")

let currentTheme=1;
function toggleThemeFunction() {
    if (currentTheme == 0) {
        container.style.color = "white";
        container.style.backgroundColor = "#1f2937";
        currentTheme = 1;
    } else if (currentTheme == 1) {
        container.style.color = "white";
        container.style.backgroundColor = "#424242";
        currentTheme = 2;
    } else if (currentTheme == 2) {
        container.style.color = "white";
        container.style.backgroundColor = "#0a5e9c ";
        currentTheme = 3;
    } else if (currentTheme == 3) {
        container.style.color = "white";
        container.style.backgroundColor = "#800080";
        currentTheme = 4;
    }
    else if (currentTheme == 4) {
        container.style.color = "#141414";
        container.style.backgroundColor = "#fed7aa";
        currentTheme = 5;
    }else if (currentTheme == 5) {
        container.style.color = "white";
        container.style.backgroundColor = "#756d59 ";
        currentTheme = 0;
    }
}

let button = document.getElementById("toggle-theme-btn")
button.addEventListener("click", toggleThemeFunction)
console.log(button)
console.log(container)