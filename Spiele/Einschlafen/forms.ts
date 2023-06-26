namespace FallAsleep {
    export class Form {
        className: string;
        left: number;
        top: number;
        form: HTMLDivElement;

        constructor(_className: string, _left: number, _top: number) {
            this.className = _className;
            this.form = document.createElement("div");
            this.form.classList.add("form", this.className);
            this.form.style.left = `${_left}px`;
            this.form.style.top = `${top}px`
            this.form.addEventListener("mousedown", () => {
                this.form.addEventListener("mousemove", this.drag);
            });
            document.querySelector("body").append(this.form);

            this.left = parseInt(window.getComputedStyle(this.form).left);
            this.top = parseInt(window.getComputedStyle(this.form).top);

        }

        drag(_event: MouseEvent): void {
            this.form.style.left = `${this.left + _event.x}px`;
            this.form.style.top = `${this.top + _event.y}px`;
    
            console.log(_event.x, _event.y);
        }
    }
}