interface Person {
    name: string;
    age: string;
    diagnose: string;
    circumstance: string;
}

enum LoadingState {
    START,
    PERSONA,
    LEVEL,
    SETTINGS,
    ABOUT
}

enum Diagnose {
    ADHD,
    DEPRESSION,
    DID,
    SCHIZOPHRENIA
}

let loadDiagnose: string;
let boxId: string;
let loadingState: LoadingState;

function handleLoad():void {
    let enterButton: HTMLDivElement = document.querySelector("#entryButton");
    loadingState = LoadingState.START;
    enterButton.addEventListener("click", loadDisclaimer);
    console.log("Beta");
}

function enterGame(): void {
    let clickedPersona: HTMLDivElement;
}

function loadDisclaimer(): void {
    let confirmButton: HTMLDivElement = document.createElement("div");
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    let body: HTMLBodyElement | null = document.querySelector("#body")
    confirmButton.classList.add("button", "disclaimer");
    confirmButton.id = "confirm";
    confirmButton.innerText = "VERSTANDEN";
    confirmButton.addEventListener("click", loadPersonas);
    body.style.backgroundColor = "#ddbf224c";

    wrapper.style.display = "block";
    wrapper.style.textAlign = "center";
    wrapper.style.fontSize = "40px";
    wrapper.innerHTML = "<p>Das hier ist ein Disclaimer. Ein baba Disclaimer.</p><br>" + "<p>So krass in Fact, dass ihr gar nicht anders könnt, als  zu</p><br>" + "<p> zu verstehen, dass dieses Spiel nicht zur Selbstdiagnose dient!</p>"
    wrapper.appendChild(confirmButton);
}

function loadLevelSelection(): void {
    if(boxId == null) {
        window.alert("Na hörma, jetzt wähl auch was aus!");
    } else {
        let body: HTMLBodyElement | null = document.querySelector("#body")
        let levelNames: string[] = [];
        let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");

        wrapper.innerHTML = "";
        body.style.background = "#3c5ba44c";
        
        loadingState = LoadingState.LEVEL;

        createBoxes("level");

        let clickBoxes: HTMLCollection | null = document.getElementsByClassName("level");

        for (let i: number = 0; i < clickBoxes.length; i++) {
                clickBoxes[i].id = `level${i + 1}`;
            }

        if (boxId == "adhd")
            levelNames = ["Online Unterricht", "Einschlafen", "Aufstehen", "Alltag"];
        else
            levelNames = ["Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!"];

        for (let i: number = 0; i < 4; i++) {
            clickBoxes[i].innerHTML = `<p>${levelNames[i]}</p>`;
        }

        createButton("stages", "active", "ZURÜCK", "return");
        createButton("stages", "inactive", "START", "confirm");

    }
}

function createBoxes(_class: string): void {
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    for (let i: number = 0; i < 4; i++) {
        let box: HTMLDivElement = document.createElement("div");
        box.classList.add(_class, "unselected");
        box.addEventListener("click", setId);
        wrapper.appendChild(box);
    }
}

function createButton(_stage: string, _state: string, _text: string,  _id: string): void {
    let button: HTMLDivElement = document.createElement("div");
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    button.classList.add("button", _stage, _state);
    button.id = _id;
    button.innerText = _text;
    wrapper.appendChild(button);

    if (_stage == "people" && _id == "return")
        button.addEventListener("click", loadDisclaimer);
    else if (_stage == "people" && _id == "confirm")
        button.addEventListener("click", loadLevelSelection);
    else if (_stage == "stages" && _id == "return")
        button.addEventListener("click", loadPersonas);
    else if (_stage == "stages" && _id == "confirm")
        button.addEventListener("click", loadLevels)
    else if (_stage == "game" && _id == "return")
        button.addEventListener("click", loadLevelSelection);
}

function loadLevels(): void {
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    let level: HTMLDivElement = document.createElement("div");

    boxId = "adhd";

    wrapper.innerHTML = "";
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";

    level.innerText = "Coming soon, for real for real."

    createButton("game", "active", "ZURÜCK", "return")
    wrapper.appendChild(level);  

}

function loadPersonas(): void {
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    let body: HTMLBodyElement | null = document.querySelector("#body")
    boxId = null;

    body.style.background = "#9e517c4c";
    wrapper.innerHTML = "";
    wrapper.style.display = "grid";
    wrapper.style.grid = "auto auto / auto auto";


    loadingState = LoadingState.PERSONA;

    let id: string[] = ["adhd", "depression", "did", "schizophrenia"];


    wrapper.style.width = "900px";
    wrapper.style.height = "900px";
    createBoxes("persona");


    let personaBoxes: HTMLCollection | null = document.getElementsByClassName("persona");

    for (let i: number = 0; i < personaBoxes.length; i++) {
        personaBoxes[i].id = id[i];
        personaBoxes[i].innerHTML = `<p>Name: ${returnPersona(i).name}</p>` + `<p>Alter: ${returnPersona(i).age}</p>` + `<p>Diagnose: ${returnPersona(i).diagnose}</p>` + `<p>Lebenssituation: ${returnPersona(i).circumstance}</p>`;
    }

    createButton("people", "active", "ZURÜCK", "return");
    createButton("people", "inactive", "WEITER", "confirm");
}

function setId(): void {
    let confirmButton: HTMLDivElement | null = document.querySelector("#confirm");
    let selectedBox: HTMLCollection |null = document.getElementsByClassName("selected");
    const confirmList = confirmButton.classList;
    confirmList.replace("inactive", "active");
    console.log(selectedBox.length);
    if (selectedBox.length > 0)
        selectedBox[0].classList.replace("selected", "unselected");

    this.classList.replace("unselected", "selected");
    
    console.log(confirmList);
    console.log(selectedBox.length);
    boxId = this.id;

}

function returnPersona(_index: number): Person {
    console.log("Hafermilch");
    let selection: Person[] = [];
    let names: string[] = ["Geoff", "Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!"];
    let ages: string[] = ["24", "Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!"];
    let diagnoses: string[] = ["ADS", "Depression", "DID", "Schizophrenie"];
    let circumstances: string[] = ["Student", "Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!"];

    for (let i: number = 0; i < 4; i++) {
        let person: Person = {
            name: names[i],
            age: ages[i],
            diagnose: diagnoses[i],
            circumstance: circumstances[i]
        };
        selection.push(person);
    }

    return selection[_index];
}

window.addEventListener("load", handleLoad);