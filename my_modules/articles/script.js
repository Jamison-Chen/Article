"use strict";
class AritcleMain {
    constructor() {
        this.backBar = document.getElementById("back-bar");
    }
    run() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.backBar.style.display = "none";
        }
        else
            this.backBar.style.display = "flex";
    }
}
new AritcleMain().run();
