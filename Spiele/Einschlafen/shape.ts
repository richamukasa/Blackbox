namespace FallAsleep {
    export class Shape extends Form {

        color: Color;

        constructor(_position: Vector, _shape: string) {
            super(_position);
            this.color = {
                r: randomNumber(0, 255),
                g: randomNumber(0, 255),
                b: randomNumber(0, 255)
            };

            this.form.className = _shape;
            
            if (_position.x + this.form.offsetWidth > this.wrapper.offsetWidth) {
                this.form.style.left = `${_position.x - this.form.offsetWidth}px`;
            }
            if (_position.y + this.form.offsetHeight > this.wrapper.offsetHeight) {
                this.form.style.top = `${_position.y - this.form.offsetHeight}px`;
            }

            if (_shape == "triangle") {
                this.form.style.borderTop = `100px solid rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
            } else {
                this.form.style.backgroundColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
            }

            this.drag(this.form);
            this.wrapper.append(this.form);
            console.log("who dat");
        }
    }
}