var FallAsleep;
(function (FallAsleep) {
    class Sound extends FallAsleep.Form {
        audio;
        src;
        constructor(_position, _src) {
            super(_position);
            this.form.className = "sound";
            this.form.style.backgroundSize = "200px";
            if (_position.x + this.form.offsetWidth > this.wrapper.offsetWidth) {
                this.form.style.left = `${_position.x - this.form.offsetWidth}px`;
            }
            if (_position.y + this.form.offsetHeight > this.wrapper.offsetHeight) {
                this.form.style.top = `${_position.y - this.form.offsetHeight}px`;
            }
            this.src = "#" + _src;
            this.audio = document.querySelector(this.src);
            this.audio.play();
            this.audio.volume = 0.2;
            this.form.addEventListener("click", () => {
                this.pauseAud(this.src);
            });
            this.wrapper.append(this.form);
        }
        playAud(_src) {
            this.audio.play();
            this.form.removeEventListener("click", () => {
                this.playAud(_src);
            });
            this.form.addEventListener("click", () => {
                this.pauseAud(_src);
            });
        }
        pauseAud(_src) {
            console.log(this.audio);
            this.audio = document.querySelector(_src);
            this.audio.pause();
            this.form.removeEventListener("click", () => {
                this.pauseAud(_src);
            });
            this.form.style.backgroundImage = "url(./Icons/Speakers_mute.png)";
            this.form.style.backgroundSize = "180px";
            this.drag(this.form);
        }
    }
    FallAsleep.Sound = Sound;
})(FallAsleep || (FallAsleep = {}));
//# sourceMappingURL=sound.js.map