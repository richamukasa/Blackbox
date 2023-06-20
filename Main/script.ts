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
    let settings: HTMLDivElement = document.querySelector("#settings");
    loadingState = LoadingState.START;
    enterButton.addEventListener("click", loadDisclaimer);
    settings.addEventListener("click", w3_open);
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
    let names: string[] = ["Ben", "Nina", "Emma", "Wer bin ich?"];
    let ages: string[] = ["24", "22", "Paranoide Schizophrenie", "Kommt demnächst!"];
    let diagnoses: string[] = ["ADS", "Additive Depression", "DID", "Kommt demnächst!"];
    let circumstances: string[] = ["Ben wurde schon im frühen Alter von 6 Jahren diagnostiziert. Heute ist er 24 Jahre alt und bestehend ist die Diagnose für ADHS/ADS. Er ist Student im Bereich Medien und arbeitet nicht währenddessen. Zusammen mit seiner Freundin von 4 Jahren teilt er sich eine Wohnung nähe der Universität und ist damit in einem finanziellen Mittelstand. Er hat zwei jüngere Geschwister mit sich liebenden Eltern. Sein Vater hat die Symptome von Ben als erstes erkennt und untersuchen lassen. Er viel auf durch typische Verhaltensweisen, wie Konzentrationsschwierigkeiten oder auch das gedanklichen „abtriften“ innerhalb von Konversationen. Die früh erkannte Krankheit verhalf ihm, seine Schwierigkeiten fachgerecht zu bewältigen, so kam es zur regelmäßigen Annahme von Ritalin. Heute verzichtet er auf Medikamente, wenn es ihm möglich ist, da er von Nebenwirkungen geplagt wurde. In Schulzeiten wurde er für sein ADHS-Verhalten von Gleichaltrigen diskriminiert und unterdrückt. Als Erwachsener kann er die Konsequenzen seiner mentalen Einschränkung genau erkennen. Er ist ein sehr emphatischer Mensch, der sein Umfeld wie ein Buch lesen kann und erkennt, falls etwas nicht stimmen sollte. Gleichzeitig weiß er, dass er sich nicht mit anderen Studenten in beispielsweise Prüfungsphasen vergleichen kann. Hier ist er beeinträchtigt, und auf sich selbst gestellt. Das bedeutet für ihn heute sowie in der Zukunft eine große Herausforderung.", "Nina ist 22 Jahre alt und konnte erst mit 20 Jahren diagnostiziert werden. Sie kommt aus einer Familie, in der psychische Krankheiten nicht als wichtig empfunden werden. Deshalb hat sie sich erst als unabhängige, erwachsene Frau dazu entschlossen, zum Arzt zu gehen. Ihr fällt es schwer, sich zu entspannen. Sie fühlt sich, als würde ihr Herzschlag dauerhaft über 120BPM stehen. Dabei ist das nicht der Fall. Als Studentin aus der finanziellen Oberschicht hat sie mit dem Vorurteil zu kämpfen, dass sie keinen Grund für Sorgen habe. Dennoch trägt sie die Diagnose einer additiven Depression. Sie lebt in einer WG mit Gleichaltrigen, die ihre keine Stabilität geben. Die suche nach dem nächsten emotionalen Streit under Herausfordernde Situation bietet ihr, den eigenen Kopf temporär frei zu bekommen. Nina hat einen Hintergrund zu Drogenmissbrauch um ihre ruhe finden zu können. Der Verzicht darauf, trotz bestehender Ruhe ist ihre schwierigste Herausforderung.", "Emma ist 30 Jahre alt, hat einen Mann und eine Tochter von 2 Jahren. Sie ist aktuell Vollzeit Hausfrau und Mutter im finanziellen Mittelstand. Sie bekam ihre Diagnose mit 16Jahren, als sie den Höhepunkt ihrer Paranoiden Schizophrenie erlebte. Der Höhepunkt wurde von der damaligen Lebenssituation herausgefordert. Innerhalb dieser Zeit erlitt sie den Verlust des Vaters, hatte schlechte Noten in der Schule und war unzufrieden mit sich selbst. Emotionale Probleme neben der Schizophrenie, die sie in allen Befürchtungen bestärkte, sodass sie regelmäßige Panikattacken hatte. Heute hat sie weniger dieser Attacken, leidet dennoch unter den verschiedenen Eindrücken, die nur ihr preisgegeben werden. Sie hört Stimmen, die darauf warten, dass Emma einen schlechten Gedanken fasst. Die Folge daraus sind Befürworter der Sorgen, eine absurder und schlimmer als die andere. Ihre größte Herausforderung ist es, die Stimmen und Gedanken zu Kontrollieren, damit die Situation nicht eskalieren kann.", "Kommt demnächst!"];

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

function w3_open() {
    let settings: HTMLDivElement = document.querySelector("#settings");
    settings.innerHTML = "&times";
    settings.removeEventListener("click", w3_open);
    settings.addEventListener("click", w3_close);

    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    let settings: HTMLDivElement = document.querySelector("#settings");
    settings.innerHTML = "☰";
    settings.removeEventListener("click", w3_close);
    settings.addEventListener("click", w3_open);

    document.getElementById("mySidebar").style.display = "none";
  }

window.addEventListener("load", handleLoad);