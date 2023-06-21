namespace FallAsleep {
    let leftStyle: number;
    let topStyle: number;
    const test: HTMLDivElement | null = document.querySelector("#test"), header = test.querySelector("#header");

    function onDrag(_event: MouseEvent): void {
        test.style.left = `${leftStyle + _event.x}px`;
        test.style.top = `${topStyle + _event.y}px`;
        console.log("booboo");
    }

    function handleLoad(): void {
        
        leftStyle = parseInt(window.getComputedStyle(test).left);
        topStyle = parseInt(window.getComputedStyle(test).top);
        header.addEventListener("mousedown", () => {
            header.addEventListener("mousemove", onDrag);
        });

    }

    document.addEventListener("mouseup", ()=>{
        header.removeEventListener("mousemove", onDrag);
    });

    window.addEventListener("load", handleLoad);
}