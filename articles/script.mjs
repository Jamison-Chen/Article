// let windowWidth;
const backBar = document.getElementById("back-bar");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    backBar.style.display = "none";
} else {
    backBar.style.display = "flex";
}

// function applyRWD() {
//     windowWidth = window.innerWidth;
//     if (1024 <= windowWidth) {} else if (512 <= windowWidth && windowWidth < 1024) {} else if (windowWidth < 512) {}
// }

// applyRWD();