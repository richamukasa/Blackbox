namespace FallAsleep {
    export class Sentence extends Form {
        checkDiv: HTMLDivElement[];
        dragWrap: HTMLDivElement;
        dropWrap: HTMLDivElement;
        sentence: string[];
        mixup: string[];
        mix: string[];
        word: string[];
        wordCount: number;

        constructor(_position: Vector, _sentence: string[], _mixup: string[]) {
            super(_position);

            this.sentence = _sentence;
            console.log(this.sentence);
            console.log(_sentence);
            this.mixup = _mixup;
            this.mix = [];
            this.word = [];
            this.checkDiv = [];

            this.wordCount = 0;
            this.form.className = "formWrap";
            this.form.style.width = `${100 * _sentence.length + 10}px`;
            if (_position.x + this.form.offsetWidth > this.wrapper.offsetWidth) {
                this.form.style.left = `${_position.x - this.form.offsetWidth}px`;
            }
            if (_position.y + this.form.offsetHeight > this.wrapper.offsetHeight) {
                this.form.style.top = `${_position.y - this.form.offsetHeight}px`;
            }

            this.dragWrap = document.createElement("div");
            this.dragWrap.className = "dragWrap";
            this.dragWrap.style.width = `${100 * _sentence.length}px`;

            this.dropWrap = document.createElement("div");
            this.dropWrap.className = "dropWrap";
            this.dropWrap.style.width = `${100 * _sentence.length}px`;

            while (this.mixup.length > 1) {
                console.log(this.sentence);
                let x: number = Math.floor(Math.random() * this.mixup.length)
                this.mix.push(this.mixup[x]);
                this.mixup.splice(x, 1);
            }

            if (this.mixup.length == 1) {
                this.mix.push(this.mixup[0]);
                this.mixup.pop();
            }

            for (let i: number = 0; i < this.mix.length; i++) {
                console.log(_sentence);
                let wordDrag: HTMLDivElement = document.createElement("div");
                let wordDrop: HTMLDivElement = document.createElement("div");

                wordDrag.classList.add("word");
                wordDrag.id = `data${i}`;
                wordDrag.draggable = true;
                wordDrag.style.left = `${100 * i + 10}px`;
                wordDrag.innerText = this.mix[i];
                wordDrag.addEventListener("click", () => {
                    pickWord(wordDrag);
                });

                wordDrop.classList.add("word", "sentenceWrap");
                wordDrop.style.left = `${100 * i + 10}px`;
                wordDrop.addEventListener("click", () => {
                    console.log("shmovin");
                    this.dropWord(wordDrop);
                });
                this.checkDiv.push(wordDrop);

                this.dragWrap.append(wordDrag);
                this.dropWrap.append(wordDrop);
            }

            this.form.append(this.dropWrap, this.dragWrap);
            this.wrapper.append(this.form);
        }

        dropWord(_target: HTMLDivElement): void {
            if (globalGame) {
                console.log(this.sentence);
                dropWord(_target);
    
                let sentenceWrap: HTMLCollection = this.dropWrap.getElementsByClassName("sentenceWrap");
                console.log(sentenceWrap);
    
                for (let i: number = 0; i < sentenceWrap.length; i++) {
                    console.log("oida");
                    console.log(sentenceWrap[i].innerHTML);
                    if (sentenceWrap[i].innerHTML == "") {
                        console.log("dip");
                        return;
                    }
                }
                this.checkSentence();
            }
        }


        checkSentence(): void {
            console.log("chocolate");
            let sentenceWrap: HTMLCollection = this.dropWrap.getElementsByClassName("sentenceWrap");
            let correct: HTMLCollection = this.dropWrap.getElementsByClassName("correct");
            console.log(correct.length, sentenceWrap);

            for (let i: number = 0; i < sentenceWrap.length; i++) {
                console.log("correct");
                if (sentenceWrap[i].innerHTML == this.sentence[i]) {
                    if (!sentenceWrap[i].classList.contains("correct")) {
                        sentenceWrap[i].classList.add("correct");
                        console.log();
                        sentenceWrap[i].removeEventListener("click", () => {
                            console.log("cuck");
                            this.dropWord(this.checkDiv[i]);
                        });
                    } else if (sentenceWrap[i].classList.contains("incorrect")) {
                        console.log("corrected");
                        sentenceWrap[i].classList.replace("incorrect", "correct");
                    }

                } else {
                    console.log("incorrect");
                    if (!sentenceWrap[i].classList.contains("incorrect"))
                        sentenceWrap[i].classList.add("incorrect");
                }
            }

            for (let correctWord of correct) {
                correctWord.classList.remove("word");
            }

            this.confirm();
        }

        confirm(): void {
            console.log("cheesecake");

            let incorrect: HTMLCollection = this.dropWrap.getElementsByClassName("incorrect");
            console.log(incorrect);

            if (incorrect.length > 0) {
                this.dragWrap.innerHTML = "";
                for (let i: number = 0; i < incorrect.length; i++) {
                    console.log("birdman")
                    console.log(incorrect[i].innerHTML);
                    let wordDrag: HTMLDivElement = document.createElement("div");
                    wordDrag.classList.add("word");
                    wordDrag.id = `data${i}`;
                    wordDrag.draggable = true;
                    wordDrag.style.left = `${100 * i + 10}px`;
                    wordDrag.innerText = incorrect[i].innerHTML;
                    wordDrag.addEventListener("click", () => {
                        pickWord(wordDrag);
                    });
                    incorrect[i].innerHTML = "";
                    this.dragWrap.append(wordDrag);
                }

                for (let incorrectWord of incorrect)
                    incorrectWord.classList.remove("incorrect");

            } else {
                console.log("skeet");
                this.form.removeChild(this.dragWrap);
                this.form.style.height = "70px";
                this.drag(this.form);
            }
        }

    }
}