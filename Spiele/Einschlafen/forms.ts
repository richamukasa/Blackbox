namespace FallAsleep {
    export abstract class Form {
        postition: Vector;
        form: HTMLDivElement;
        wrapper: HTMLDivElement;
        automove: boolean;

        constructor(_position: Vector) {
            this.wrapper = document.querySelector("#gameWrap");
            this.postition = _position;
            this.form = document.createElement("div");
            this.form.style.left = `${_position.x}px`;
            this.form.style.top = `${_position.y}px`;

            this.movesItself;
            thoughtCount++;
            console.log(`Thoughts: ${thoughtCount}`);
        }

        drag(_element: HTMLDivElement): void {

            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            _element.onmousedown = dragMouseDown;

            function dragMouseDown(e): void {
                e = e || window.event;
                e.preventDefault();

                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElemment;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e): void {
                e = e || window.event;
                e.preventDefault();

                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;

                _element.style.top = `${_element.offsetTop - pos2}px`;
                _element.style.left = `${_element.offsetLeft - pos1}px`;
                console.log(_element.style.top);
            }

            function closeDragElemment(): void {
                document.onmouseup = null;
                document.onmousemove = null;
                if (parseInt(_element.style.top) < 0 || parseInt(_element.style.top) > 500 || parseInt(_element.style.left) < 0 || parseInt(_element.style.left) > 500) {
                    // _element.onmousedown = null;
                    thoughtCount--;
                    console.log(thoughtCount, "we out");
                }
            }
        }

        movesItself(): void {
            let x: number = Math.floor(Math.random() * 2);
            if (x == 0)
                this.automove = false;
            else
                this.automove = true;
        }
    }
}