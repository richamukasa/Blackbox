var FallAsleep;
(function (FallAsleep) {
    let crc2;
    let leftStyle;
    let topStyle;
    function onDrag(_event) {
        const test = document.querySelector("#test");
        console.log(leftStyle, topStyle);
        test.style.position = "absolute";
        test.style.left = `${leftStyle + _event.x}px`;
        test.style.top = `${topStyle + _event.y}px`;
        console.log(test.style.left, _event.x, _event.y);
    }
    function handleLoad() {
        // const test: HTMLDivElement | null = document.querySelector("#test");
        // leftStyle = parseInt(window.getComputedStyle(test).left);
        // topStyle = parseInt(window.getComputedStyle(test).top);
        // test.addEventListener("mousedown", () => {
        //     test.addEventListener("mousemove", onDrag);
        // });
        // document.addEventListener("mouseup", () => {
        //     for (let form of document.getElementsByClassName("form")) {
        //         form.removeEventListener("mousedown", this.drag);
        //     }
        // });
        let square = new FallAsleep.Form("square", 10, 10);
        document.addEventListener("mousemove", () => {
            let event = this.event;
            console.log(event.x, event.y);
        });
    }
    window.addEventListener("load", handleLoad);
})(FallAsleep || (FallAsleep = {}));
//# sourceMappingURL=main.js.map