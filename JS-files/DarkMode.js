const DarkModeIn = document.getElementById("WhiteTheme");
const DarkModeOut = document.getElementById("BlackTheme");

function EnterDarkMode() {
    window.location.href = "/index-DarkMode.html";
};

function ExitDarkMode() {
    window.location.href = "/index.html";
};

if (DarkModeIn) {
    DarkModeIn.addEventListener("click", EnterDarkMode);
} 

if (DarkModeOut) {
    DarkModeOut.addEventListener("click", ExitDarkMode);
}

