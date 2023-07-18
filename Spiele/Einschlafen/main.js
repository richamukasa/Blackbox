var FallAsleep;
(function (FallAsleep) {
    FallAsleep.gobalWord = "";
    FallAsleep.thoughtCount = 0;
    var runGame;
    var runTimer;
    let globalX;
    let clock = [];
    let soundLib = ["abubebe", "fire", "freeSeba", "freeSeba", "peace", "semiAutomatic", "benz", "jett", "mathTree", "omni", "paganini", "peppercorns", "lullaby", "sandmann", "phone", "bitconnect", "waves", "whatever"];
    function pickWord(_target) {
        if (FallAsleep.globalGame) {
            FallAsleep.gobalWord = _target.innerText;
            console.log(FallAsleep.gobalWord);
        }
    }
    FallAsleep.pickWord = pickWord;
    function dropWord(_target) {
        _target.innerText = FallAsleep.gobalWord;
        FallAsleep.gobalWord = "";
        console.log(_target.innerText);
    }
    FallAsleep.dropWord = dropWord;
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * (_max + 1) + _min);
    }
    FallAsleep.randomNumber = randomNumber;
    function timer() {
        let wrapper = document.querySelector("#wrapper");
        for (let i = 0; i < 4; i++) {
            console.log("chilli");
            for (let j = 0; j < 10; j++) {
                console.log("cheese");
                let timeStamp = document.createElement("div");
                timeStamp.className = "timeStamp";
                if (i == 0) {
                    timeStamp.style.top = "7.5px";
                    timeStamp.style.left = `${70 * j + 75}px`;
                }
                else if (i == 1) {
                    timeStamp.style.right = "7.5px";
                    timeStamp.style.top = `${70 * j + 75}px`;
                }
                else if (i == 2) {
                    timeStamp.style.bottom = "7.5px";
                    timeStamp.style.right = `${70 * j + 75}px`;
                }
                else {
                    timeStamp.style.left = "7.5px";
                    timeStamp.style.bottom = `${70 * j + 75}px`;
                }
                clock.push(timeStamp);
                wrapper.append(timeStamp);
            }
        }
        startTimer();
    }
    function handleLoad() {
        document.getElementById("test").addEventListener("click", startGame);
    }
    function randomPosition() {
        let wrapper = document.querySelector("#gameWrap");
        console.log(wrapper.clientWidth, wrapper.clientHeight);
        let x = Math.floor(Math.random() * wrapper.clientWidth);
        let y = Math.floor(Math.random() * wrapper.clientHeight);
        return new FallAsleep.Vector(x, y);
    }
    function startTimer() {
        let time = 0;
        runTimer = window.setInterval(() => {
            clock[time].style.backgroundColor = "#9eadd2ff";
            time++;
            console.log("tick tock");
        }, 3000);
    }
    function startGame() {
        console.log("we in dis");
        FallAsleep.globalGame = true;
        timer();
        runGame = window.setInterval(() => {
            let x = randomNumber(0, 3);
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
    function restart() {
        let wrapper = document.querySelector("#wrapper");
        wrapper.innerHTML = "";
        let gameWrap = document.createElement("div");
        gameWrap.id = "gameWrap";
        wrapper.append(gameWrap);
        startGame();
    }
    function stopGame() {
        FallAsleep.globalGame = false;
        clearInterval(runGame);
        clearInterval(runTimer);
        if (FallAsleep.thoughtCount <= 0) {
            console.log("I sleep");
        }
        else {
            console.log("Real shit!");
        }
        document.getElementById("test").removeEventListener("click", stopGame);
        document.getElementById("test").addEventListener("click", restart);
    }
    function spawnSound() {
        let x = Math.floor(Math.random() * soundLib.length);
        let soundSource = new FallAsleep.Sound(randomPosition(), soundLib[x]);
        console.log(soundSource);
    }
    function spawnSentence() {
        globalX = Math.floor(Math.random() * 20);
        let sentenceSource = new FallAsleep.Sentence(randomPosition(), randomSentence(globalX), randomMixup(globalX));
        console.log(sentenceSource);
    }
    function spawnShape() {
        let shape = new FallAsleep.Shape(randomPosition(), randomShape());
        console.log(shape);
    }
    function randomSentence(_x) {
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
    function randomMixup(_x) {
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
    function randomShape() {
        let x = randomNumber(0, 3);
        if (x == 0)
            return "circle";
        else if (x == 1)
            return "square";
        else
            return "triangle";
    }
    function randomTime() {
        return randomNumber(3000, 10000);
    }
    window.addEventListener("load", handleLoad);
})(FallAsleep || (FallAsleep = {}));
//# sourceMappingURL=main.js.map