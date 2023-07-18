namespace FallAsleep {
    export let gobalWord: string = "";
    export let thoughtCount: number = 0;
    export let globalGame: boolean;

    var runGame;
    var runTimer;
    let globalX: number;
    let clock: HTMLDivElement[] = [];
    let soundLib: string[] = ["abubebe", "fire", "freeSeba", "freeSeba", "peace", "semiAutomatic", "benz", "jett", "mathTree", "omni", "paganini", "peppercorns", "lullaby", "sandmann", "phone", "bitconnect", "waves", "whatever"];

    export interface Color {
        r: number;
        g: number;
        b: number;
    }

    export function pickWord(_target: HTMLDivElement): void {
        if (globalGame) {
            gobalWord = _target.innerText;
            console.log(gobalWord);
        }
    }

    export function dropWord(_target: HTMLDivElement): void {
        _target.innerText = gobalWord;
        gobalWord = "";
        console.log(_target.innerText);
    }

    export function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max + 1) + _min);
    }

    function timer(): void {
        let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
        for (let i: number = 0; i < 4; i++) {
            console.log("chilli");
            for (let j: number = 0; j < 10; j++) {
                console.log("cheese");
                let timeStamp: HTMLDivElement = document.createElement("div");
                timeStamp.className = "timeStamp";
                if (i == 0) {
                    timeStamp.style.top = "7.5px";
                    timeStamp.style.left = `${70 * j + 75}px`;
                } else if (i == 1) {
                    timeStamp.style.right = "7.5px";
                    timeStamp.style.top = `${70 * j + 75}px`;
                } else if (i == 2) {
                    timeStamp.style.bottom = "7.5px";
                    timeStamp.style.right = `${70 * j + 75}px`;
                } else {
                    timeStamp.style.left = "7.5px";
                    timeStamp.style.bottom = `${70 * j + 75}px`;
                }
                clock.push(timeStamp);
                wrapper.append(timeStamp);
            }
        }

        startTimer();
    }

    function handleLoad(): void {
        document.getElementById("test").addEventListener("click", startGame);
    }

    function randomPosition(): Vector {
        let wrapper: HTMLDivElement = document.querySelector("#gameWrap");
        console.log(wrapper.clientWidth, wrapper.clientHeight);
        let x: number = Math.floor(Math.random() * wrapper.clientWidth);
        let y: number = Math.floor(Math.random() * wrapper.clientHeight);

        return new Vector(x, y);
    }

    function startTimer(): void {
        let time: number = 0;

        runTimer = window.setInterval(() => {
            clock[time].style.backgroundColor = "#9eadd2ff";
            time++;
            console.log("tick tock");
        }, 3000);
    }

    function startGame(): void {
        console.log("we in dis");
        globalGame = true;
        timer();
        runGame = window.setInterval(() => {
            let x: number = randomNumber(0, 3);
            if (x == 0) {
                spawnSentence();
                console.log("Diogenes");
            }
            else if (x == 1) {
                spawnShape();
                console.log("Monet");
            }
            else {
                spawnSound();
                console.log("K.Flay");
            }
        }, randomTime());

        window.setTimeout(stopGame, 120000);
        document.getElementById("test").removeEventListener("click", startGame);
        document.getElementById("test").addEventListener("click", stopGame);
    }

    function restart(): void {
        let wrapper: HTMLDivElement = document.querySelector("#wrapper");
        wrapper.innerHTML = "";

        let gameWrap: HTMLDivElement = document.createElement("div");
        gameWrap.id = "gameWrap";
        wrapper.append(gameWrap);
        startGame();
    }

    function stopGame(): void {
        globalGame = false;
        clearInterval(runGame);
        clearInterval(runTimer);
        if (thoughtCount <= 0) {
            console.log("I sleep");
        } else {
            console.log("Real shit!");
        }
        document.getElementById("test").removeEventListener("click", stopGame);
        document.getElementById("test").addEventListener("click", restart);
    }

    function spawnSound(): void {
        let x: number = Math.floor(Math.random() * soundLib.length)
        let soundSource: Sound = new Sound(randomPosition(), soundLib[x]);
        console.log(soundSource);
    }

    function spawnSentence(): void {
        globalX = Math.floor(Math.random() * 20);
        let sentenceSource: Sentence = new Sentence(randomPosition(), randomSentence(globalX), randomMixup(globalX));
        console.log(sentenceSource);
    }

    function spawnShape(): void {
        let shape: Shape = new Shape(randomPosition(), randomShape());
        console.log(shape);
    }

    function randomSentence(_x: number): string[] {
        if (_x == 0)
            return ["oh", "kinder", "drei", "uhr", "morgens"];
        else if (_x == 1)
            return ["der", "frühe", "vogel", "kann", "mich", "mal"];
        else if (_x == 2)
            return ["3", "+", "3", "=", "6"];
        else if (_x == 3)
            return ["die", "antwort", "ist", "42"];
        else if (_x == 4)
            return ["eis", "macht", "nicht", "schlank"];
        else if (_x == 5)
            return ["keine", "ahnung", "kein", "bock"];
        else if (_x == 6)
            return ["essen", "statt", "schlafen"];
        else if (_x == 7)
            return ["komm", "und", "schnapp", "sie", "dir"];
        else if (_x == 8)
            return ["13", "x", "13", "=", "169"];
        else if (_x == 9)
            return ["der", "mond", "ist", "aus", "käse"];
        else if (_x == 10)
            return ["ein", "wal", "ist", "kein", "fisch"];
        else if (_x == 11)
            return ["doppelt", "hält", "besser"];
        else if (_x == 12)
            return ["ist", "der", "ofen", "aus"];
        else if (_x == 13)
            return ["hagrid", "der", "haarige"];
        else if (_x == 14)
            return ["5", "x", "2^4", "=", "80"];
        else if (_x == 15)
            return ["alles", "hat", "ein", "ende"];
        else if (_x == 16)
            return ["lamas", "mit", "hüten"];
        else if (_x == 17)
            return ["wo", "sind", "die", "brownies"];
        else if (_x == 18)
            return ["zu", "sechst", "im", "mercedes"];
        else if (_x == 19)
            return ["down", "smash", "up", "b"];
    }

    function randomMixup(_x: number): string[] {
        if (_x == 0)
            return ["oh", "kinder", "drei", "uhr", "morgens"];
        else if (_x == 1)
            return ["der", "frühe", "vogel", "kann", "mich", "mal"];
        else if (_x == 2)
            return ["3", "+", "3", "=", "6"];
        else if (_x == 3)
            return ["die", "antwort", "ist", "42"];
        else if (_x == 4)
            return ["eis", "macht", "nicht", "schlank"];
        else if (_x == 5)
            return ["keine", "ahnung", "kein", "bock"];
        else if (_x == 6)
            return ["essen", "statt", "schlafen"];
        else if (_x == 7)
            return ["komm", "und", "schnapp", "sie", "dir"];
        else if (_x == 8)
            return ["13", "x", "13", "=", "169"];
        else if (_x == 9)
            return ["der", "mond", "ist", "aus", "käse"];
        else if (_x == 10)
            return ["ein", "wal", "ist", "kein", "fisch"];
        else if (_x == 11)
            return ["doppelt", "hält", "besser"];
        else if (_x == 12)
            return ["ist", "der", "ofen", "aus"];
        else if (_x == 13)
            return ["hagrid", "der", "haarige"];
        else if (_x == 14)
            return ["5", "x", "2^4", "=", "80"];
        else if (_x == 15)
            return ["alles", "hat", "ein", "ende"];
        else if (_x == 16)
            return ["lamas", "mit", "hüten"];
        else if (_x == 17)
            return ["wo", "sind", "die", "brownies"];
        else if (_x == 18)
            return ["zu", "sechst", "im", "mercedes"];
        else if (_x == 19)
            return ["down", "smash", "up", "b"];
    }

    function randomShape(): string {
        let x: number = randomNumber(0, 3);
        if (x == 0)
            return "circle";
        else if (x == 1)
            return "square";
        else
            return "triangle";
    }


    function randomTime(): number {
        return randomNumber(3000, 10000);
    }

    window.addEventListener("load", handleLoad);
}