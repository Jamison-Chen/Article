class AritcleMain {
    private backBar: HTMLElement;
    public constructor() {
        this.backBar = document.getElementById("back-bar") as HTMLElement;
    }
    public run(): void {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            this.backBar.style.display = "none";
        } else this.backBar.style.display = "flex";
    }
}

new AritcleMain().run();
