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
        let clickBoxes: HTMLCollection = document.getElementsByClassName("persona");
        let confirmButton: HTMLDivElement | null = document.querySelector("#confirm");
        let returnButton: HTMLDivElement | null = document.querySelector("#return");
        let body: HTMLBodyElement | null = document.querySelector("#body")
        let levelNames: string[] = [];
        let buttons: HTMLCollection = document.getElementsByClassName("button");
        let selectedBox: HTMLCollection = document.getElementsByClassName("selected");

        if (selectedBox.length > 0)
            selectedBox[0].classList.replace("selected", "unselected");
        
        body.style.background = "#3c5ba44c";
        loadingState = LoadingState.LEVEL;

        confirmButton.classList.replace("people", "stages");
        confirmButton.classList.replace("active", "inactive");
        returnButton.classList.replace("people", "stages");

        for (let i: number = 0; i < clickBoxes.length; i++) {
            clickBoxes[i].innerHTML = "";
            clickBoxes[i].classList.add("level");
            clickBoxes[i].id = `level${i + 1}`;
        }
        clickBoxes = document.getElementsByClassName("level");

        if (boxId == "adhd")
            levelNames = ["Online Unterricht", "Einschlafen", "Aufstehen", "Alltag"];
        else
            levelNames = ["Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!"];

        for (let i: number = 0; i < 4; i++) {
            clickBoxes[i].innerHTML = `<p>${levelNames[i]}</p>`;
            clickBoxes[i].classList.remove("persona");
        }
        returnButton.removeEventListener;
        returnButton.addEventListener("click", loadPersonas);
        confirmButton.removeEventListener;
        confirmButton.addEventListener("click", loadLevels)
    }
}

function loadLevels(): void {
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    let returnButton: HTMLDivElement = document.createElement("div");
    let level: HTMLDivElement = document.createElement("div");
    const returnList = returnButton.classList;

    boxId = "adhd";

    wrapper.innerHTML = "";
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";

    level.innerText = "Coming soon, for real for real."

    returnList.add("button", "stages", "active");
    returnButton.id = "return";
    returnButton.innerText = "ZURÜCK"
    returnButton.addEventListener("click", loadLevelSelection);
    wrapper.appendChild(level);
    wrapper.appendChild(returnButton);

    

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
    let returnButton: HTMLDivElement = document.createElement("div");
    let confirmButton: HTMLDivElement = document.createElement("div");
    const returnList = returnButton.classList;
    const confirmList = confirmButton.classList;

    wrapper.style.width = "900px";
    wrapper.style.height = "900px";

    for (let i: number = 0; i < 4; i++) {
        let personaBox: HTMLDivElement = document.createElement("div");
        personaBox.classList.add("persona", "unselected");
        personaBox.id = id[i];
        personaBox.innerHTML = `<p>Name: ${returnPersona(i).name}</p>` + `<p>Alter: ${returnPersona(i).age}</p>` + `<p>Diagnose: ${returnPersona(i).diagnose}</p>` + `<p>Lebenssituation: ${returnPersona(i).circumstance}</p>`;
        personaBox.addEventListener("click", setId);
        wrapper.appendChild(personaBox);
    }

    returnList.add("button", "people", "active");
    returnButton.id = "return";
    returnButton.innerText = "ZURÜCK"
    returnButton.addEventListener("click", loadDisclaimer);
    wrapper.appendChild(returnButton);
    console.log(returnList);

    confirmList.add("button", "people", "inactive");
    confirmButton.id = "confirm";
    confirmButton.innerText = "WEITER";
    confirmButton.addEventListener("click", loadLevelSelection);
    wrapper.appendChild(confirmButton);
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