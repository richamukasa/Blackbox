var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["START"] = 0] = "START";
    LoadingState[LoadingState["PERSONA"] = 1] = "PERSONA";
    LoadingState[LoadingState["LEVEL"] = 2] = "LEVEL";
    LoadingState[LoadingState["SETTINGS"] = 3] = "SETTINGS";
    LoadingState[LoadingState["ABOUT"] = 4] = "ABOUT";
})(LoadingState || (LoadingState = {}));
var Diagnose;
(function (Diagnose) {
    Diagnose[Diagnose["ADHD"] = 0] = "ADHD";
    Diagnose[Diagnose["DEPRESSION"] = 1] = "DEPRESSION";
    Diagnose[Diagnose["DID"] = 2] = "DID";
    Diagnose[Diagnose["SCHIZOPHRENIA"] = 3] = "SCHIZOPHRENIA";
})(Diagnose || (Diagnose = {}));
let loadDiagnose;
let boxId;
let loadingState;
let levelNames = [];
function handleLoad() {
    let enterButton = document.querySelector("#entryButton");
    let settings = document.querySelector("#settings");
    loadingState = LoadingState.START;
    enterButton.addEventListener("click", loadDisclaimer);
    settings.addEventListener("click", w3_open);
    console.log("Beta");
}
function enterGame() {
    let clickedPersona;
}
function loadDisclaimer() {
    let confirmButton = document.createElement("div");
    let wrapper = document.querySelector("#wrapper");
    let body = document.querySelector("#body");
    let setLinks = document.getElementsByClassName("setLinksStart");
    if (setLinks.length == 0)
        setLinks = document.getElementsByClassName("setLinksPers");
    for (let setLink of setLinks) {
        setLink.classList.add("setLinksDis");
    }
    setLinks = document.getElementsByClassName("setLinksDis");
    for (let setLink of setLinks) {
        if (setLink.classList.contains("setLinksStart"))
            setLink.classList.remove("setLinksStart");
        else if (setLink.classList.contains("setLinksPers"))
            setLink.classList.remove("setLinksPers");
    }
    document.querySelector("#settings").className = "settingsDis";
    confirmButton.classList.add("button", "disclaimer");
    confirmButton.id = "confirm";
    confirmButton.innerText = "VERSTANDEN";
    confirmButton.addEventListener("click", loadPersonas);
    body.style.backgroundColor = "#ddbf224c";
    body.style.color = "#000";
    wrapper.style.display = "block";
    wrapper.style.textAlign = "center";
    wrapper.style.fontSize = "40px";
    wrapper.innerHTML = "<p>Folgende Inhalte sind auf wissenschaftlichen und nicht wissenschaftlichen Quellen basiert. Manche sind frei erfunden.</p>" + "<p>Falls du dich mit den Personas, deren Verhaltensweisen oder weiteren psychischen Beschwerden identifizierst, empfehlen wir einen Fachartzt zu kontaktieren.</p>" + "<p> Diese Anwendung ist nicht in der Lage eine Diagnose für dich oder andere zu stellen, sondern gilt der Unterhaltung und Förderung von Aufklärung zu psychischen Krankheiten, sowie dessen hohen Maß an Individualitaet.</p>";
    wrapper.appendChild(confirmButton);
}
function loadLevels() {
    let wrapper = document.querySelector("#wrapper");
    let detail = document.createElement("div");
    let buttonWrap = document.createElement("div");
    boxId = "adhd";
    buttonWrap.id = "buttonWrap";
    detail.id = "detail";
    detail.classList.add("levelDetail");
    detail.innerText = "Coming soon, for real for real.";
    wrapper.innerHTML = "";
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";
    wrapper.append(detail, buttonWrap);
    createButton("game", "active", "ZURÜCK", "return");
    createLink("game", "active", "SPIELEN", "confirm");
}
function loadLevelSelection() {
    if (boxId == null) {
        window.alert("Na hörma, jetzt wähl auch was aus!");
    }
    else {
        let body = document.querySelector("#body");
        let wrapper = document.querySelector("#wrapper");
        let setLinks = document.getElementsByClassName("setLinksPers");
        let selection = document.createElement("div");
        let detail = document.createElement("div");
        let buttonWrap = document.createElement("div");
        selection.id = "selection";
        detail.id = "detail";
        detail.classList.add("levelDetail");
        buttonWrap.id = "buttonWrap";
        for (let setLink of setLinks) {
            setLink.classList.replace("setLinksPers", "setLinksLevel");
        }
        document.querySelector("#settings").className = "settingsLevel";
        body.style.background = "#3c5ba44c";
        wrapper.innerHTML = "";
        wrapper.append(selection, detail, buttonWrap);
        loadingState = LoadingState.LEVEL;
        if (boxId == "adhd")
            levelNames = ["Online Unterricht", "Howto: Relax", "Verlegt, Verloren,Vergessen", "DIY"];
        else
            levelNames = ["Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!", "Kommt demnächst!"];
        for (let i = 0; i < 4; i++) {
            createBoxes("level", levelNames[i]);
        }
        createButton("stages", "active", "ZURÜCK", "return");
        createButton("stages", "inactive", "START", "confirm");
    }
}
function loadPersonas() {
    let wrapper = document.querySelector("#wrapper");
    let body = document.querySelector("#body");
    let selection = document.createElement("div");
    let detail = document.createElement("div");
    let buttonWrap = document.createElement("div");
    let setLinks = document.getElementsByClassName("setLinksDis");
    if (setLinks.length == 0)
        setLinks = document.getElementsByClassName("setLinksLevel");
    for (let setLink of setLinks) {
        setLink.classList.add("setLinksPers");
    }
    setLinks = document.getElementsByClassName("setLinksPers");
    for (let setLink of setLinks) {
        if (setLink.classList.contains("setLinksDis"))
            setLink.classList.remove("setLinksDis");
        else if (setLink.classList.contains("setLinksLevel"))
            setLink.classList.remove("setLinksLevel");
    }
    document.querySelector("#settings").className = "settingsPers";
    selection.id = "selection";
    detail.id = "detail";
    detail.classList.add("personaDetail");
    buttonWrap.id = "buttonWrap";
    boxId = null;
    body.style.background = "#9e517c4c";
    wrapper.innerHTML = "";
    wrapper.append(selection, detail, buttonWrap);
    loadingState = LoadingState.PERSONA;
    let id = ["adhd", "depression", "did", "schizophrenia"];
    for (let i = 0; i < 4; i++) {
        createBoxes("persona", returnPersona(i).name);
    }
    let personaBoxes = document.getElementsByClassName("container");
    for (let i = 0; i < personaBoxes.length; i++) {
        personaBoxes[i].id = id[i];
    }
    createButton("people", "active", "ZURÜCK", "return");
    createButton("people", "inactive", "WEITER", "confirm");
}
function createBoxes(_class, _content) {
    let selection = document.querySelector("#selection");
    let box = document.createElement("div");
    let text = document.createElement("div");
    let background = document.createElement("div");
    box.classList.add("container", "unselected");
    text.classList.add(_class, "text");
    text.innerHTML = _content;
    background.classList.add(_class, "background");
    box.append(background, text);
    box.addEventListener("click", setId);
    selection.appendChild(box);
}
function createButton(_stage, _state, _text, _id) {
    let button = document.createElement("div");
    let buttonWrap = document.querySelector("#buttonWrap");
    button.classList.add("button", _stage, _state);
    button.id = _id;
    button.innerHTML = _text;
    buttonWrap.appendChild(button);
    if (_stage == "people" && _id == "return")
        button.addEventListener("click", loadDisclaimer);
    else if (_stage == "people" && _id == "confirm")
        button.addEventListener("click", loadLevelSelection);
    else if (_stage == "stages" && _id == "return")
        button.addEventListener("click", loadPersonas);
    else if (_stage == "stages" && _id == "confirm")
        button.addEventListener("click", loadLevels);
    else if (_stage == "game" && _id == "return")
        button.addEventListener("click", loadLevelSelection);
}
function createLink(_stage, _state, _text, _id) {
    createButton(_stage, _state, _text, _id);
    let playButton = document.querySelector(_id);
    let link = document.createElement("a");
    link.href = "https://richamukasa.github.io/Blackbox/Spiele/Einschlafen/einschlafen.html";
    link.target = "_blank";
    link.innerText = "SPIELEN";
    playButton.innerHTML = "";
    playButton.append(link);
}
function setId() {
    let confirmButton = document.querySelector("#confirm");
    let selectedBox = document.getElementsByClassName("selected");
    const confirmList = confirmButton.classList;
    confirmList.replace("inactive", "active");
    console.log(selectedBox.length);
    if (selectedBox.length > 0)
        selectedBox[0].classList.replace("selected", "unselected");
    this.classList.replace("unselected", "selected");
    console.log(confirmList);
    console.log(selectedBox.length);
    boxId = this.id;
    showDetail(boxId);
}
function showDetail(_id) {
    let detail = document.querySelector("#detail");
    let ages = ["24", "22", "Paranoide Schizophrenie", "Kommt demnächst!"];
    let diagnoses = ["ADHS/ADS", "Additive Depression", "DID", "Kommt demnächst!"];
    let circumstances = ["Ben wurde schon im frühen Alter von 6 Jahren diagnostiziert. Heute ist er 24 Jahre alt und bestehend ist die Diagnose für ADHS/ADS. Er ist Student im Bereich Medien und arbeitet nicht währenddessen. Zusammen mit seiner Freundin von 4 Jahren teilt er sich eine Wohnung nähe der Universität und ist damit in einem finanziellen Mittelstand. Er hat zwei jüngere Geschwister mit sich liebenden Eltern. Sein Vater hat die Symptome von Ben als erstes erkennt und untersuchen lassen. Er viel auf durch typische Verhaltensweisen, wie Konzentrationsschwierigkeiten oder auch das gedanklichen „abtriften“ innerhalb von Konversationen. Die früh erkannte Krankheit verhalf ihm, seine Schwierigkeiten fachgerecht zu bewältigen, so kam es zur regelmäßigen Annahme von Ritalin. Heute verzichtet er auf Medikamente, wenn es ihm möglich ist, da er von Nebenwirkungen geplagt wurde. In Schulzeiten wurde er für sein ADHS-Verhalten von Gleichaltrigen diskriminiert und unterdrückt. Als Erwachsener kann er die Konsequenzen seiner mentalen Einschränkung genau erkennen. Er ist ein sehr emphatischer Mensch, der sein Umfeld wie ein Buch lesen kann und erkennt, falls etwas nicht stimmen sollte. Gleichzeitig weiß er, dass er sich nicht mit anderen Studenten in beispielsweise Prüfungsphasen vergleichen kann. Hier ist er beeinträchtigt, und auf sich selbst gestellt. Das bedeutet für ihn heute sowie in der Zukunft eine große Herausforderung.", "Nina ist 22 Jahre alt und konnte erst mit 20 Jahren diagnostiziert werden. Sie kommt aus einer Familie, in der psychische Krankheiten nicht als wichtig empfunden werden. Deshalb hat sie sich erst als unabhängige, erwachsene Frau dazu entschlossen, zum Arzt zu gehen. Ihr fällt es schwer, sich zu entspannen. Sie fühlt sich, als würde ihr Herzschlag dauerhaft über 120BPM stehen. Dabei ist das nicht der Fall. Als Studentin aus der finanziellen Oberschicht hat sie mit dem Vorurteil zu kämpfen, dass sie keinen Grund für Sorgen habe. Dennoch trägt sie die Diagnose einer additiven Depression. Sie lebt in einer WG mit Gleichaltrigen, die ihre keine Stabilität geben. Die suche nach dem nächsten emotionalen Streit under Herausfordernde Situation bietet ihr, den eigenen Kopf temporär frei zu bekommen. Nina hat einen Hintergrund zu Drogenmissbrauch um ihre ruhe finden zu können. Der Verzicht darauf, trotz bestehender Ruhe ist ihre schwierigste Herausforderung.", "Emma ist 30 Jahre alt, hat einen Mann und eine Tochter von 2 Jahren. Sie ist aktuell Vollzeit Hausfrau und Mutter im finanziellen Mittelstand. Sie bekam ihre Diagnose mit 16Jahren, als sie den Höhepunkt ihrer Paranoiden Schizophrenie erlebte. Der Höhepunkt wurde von der damaligen Lebenssituation herausgefordert. Innerhalb dieser Zeit erlitt sie den Verlust des Vaters, hatte schlechte Noten in der Schule und war unzufrieden mit sich selbst. Emotionale Probleme neben der Schizophrenie, die sie in allen Befürchtungen bestärkte, sodass sie regelmäßige Panikattacken hatte. Heute hat sie weniger dieser Attacken, leidet dennoch unter den verschiedenen Eindrücken, die nur ihr preisgegeben werden. Sie hört Stimmen, die darauf warten, dass Emma einen schlechten Gedanken fasst. Die Folge daraus sind Befürworter der Sorgen, eine absurder und schlimmer als die andere. Ihre größte Herausforderung ist es, die Stimmen und Gedanken zu Kontrollieren, damit die Situation nicht eskalieren kann.", "Kommt demnächst!"];
    let levelDetail = ["<p>Dauer: 3 Minuten plus Quiz</p><p>Schwierigkeitsgrad: 7/10</p><p>Aufgabe</p><p></p>Merke dir die Unterrichtsthemen so gut, dass du am Ende ein Quiz darüber bestehen kannst.", "In dieser Herausforderung ist Ben in einem „Hoch“ von Chaotischen Gedanken. Das bedeutet, dass Ben sehr aufgedreht ist, wobei es an der Zeit ist ins Bett zu gehen. Rezipienten sehen der Umrandung eines Kopfes mit vielen verschiedenen Formen darin. Diese verkörpern den emotionalen Palast, der abgeworfen werden muss, damit man entspannen kann. Dafür muss der Spieler durch „Drag and Drop“ die Formen aus dem Kopf ziehen. Gleichzeitig erscheinen immer mehr Formen im Kopf der Persona, sodass die Aufgabe unmöglich erscheint. Der Schwierigkeitsgrad liegt hier bei 6 von 10 mit dem Hinweis auf Konstanz und Beibehalten.", "Diese Herausforderung ist vom Prinzip her wie ein Memorie-Spiel. Das bedeutet, dass man sich an Objekte erinnern muss, die im Moment nicht sichtbar sind. Alltagsgegenstände wie das Handy, der Schlüssel oder die Trinkflasche werden hierbei immer wieder aus den Augen der Persona verschwinden. Ziel ist es letztendlich, die Gegenstände im Moment der Abfrage gefunden werden ist. Die Persona läuft innerhalb von einer Minute 3 mal durch einen Kreisförmige Gang. Währenddessen werden Objekte gesichtet, aufgenommen und abgelegt. Beeinflussen kann das der Rezipient nicht. Hierbei geht es alleinig um die Fähigkeit, sich auf mehrere Objekte zu fokussieren, selbst wenn sich die Umstände in kurzer Zeit mehrmals ändern.", "Kommt demnächst!"];
    if (_id == "adhd")
        detail.innerHTML = `Alter: ${ages[0]}<br><br>` + `Diagnose: ${diagnoses[0]}<br><br>` + `Lebenssituation:<br>` + circumstances[0];
    else if (_id == "depression")
        detail.innerHTML = `Alter: ${ages[1]}<br><br>` + `Diagnose: ${diagnoses[1]}<br><br>` + `Lebenssituation:<br>` + circumstances[1];
    else if (_id == "did")
        detail.innerHTML = `Alter: ${ages[2]}<br><br>` + `Diagnose: ${diagnoses[2]}<br><br>` + `Lebenssituation:<br>` + circumstances[2];
    else if (_id == "schizophrenia")
        detail.innerHTML = `Alter: ${ages[3]}<br><br>` + `Diagnose: ${diagnoses[3]}<br><br>` + `Lebenssituation:<br>` + circumstances[3];
    else if (_id == "level1")
        detail.innerHTML = levelDetail[0];
    else if (_id == "level2")
        detail.innerHTML = levelDetail[1];
    else if (_id == "level3")
        detail.innerHTML = levelDetail[2];
    else if (_id == "level4")
        detail.innerHTML = levelDetail[3];
}
function returnPersona(_index) {
    console.log("Hafermilch");
    let selection = [];
    let names = ["Ben", "Nina", "Emma", "Wer bin ich?"];
    let ages = ["24", "22", "Paranoide Schizophrenie", "Kommt demnächst!"];
    let diagnoses = ["ADS", "Additive Depression", "DID", "Kommt demnächst!"];
    let circumstances = ["Ben wurde schon im frühen Alter von 6 Jahren diagnostiziert. Heute ist er 24 Jahre alt und bestehend ist die Diagnose für ADHS/ADS. Er ist Student im Bereich Medien und arbeitet nicht währenddessen. Zusammen mit seiner Freundin von 4 Jahren teilt er sich eine Wohnung nähe der Universität und ist damit in einem finanziellen Mittelstand. Er hat zwei jüngere Geschwister mit sich liebenden Eltern. Sein Vater hat die Symptome von Ben als erstes erkennt und untersuchen lassen. Er viel auf durch typische Verhaltensweisen, wie Konzentrationsschwierigkeiten oder auch das gedanklichen „abtriften“ innerhalb von Konversationen. Die früh erkannte Krankheit verhalf ihm, seine Schwierigkeiten fachgerecht zu bewältigen, so kam es zur regelmäßigen Annahme von Ritalin. Heute verzichtet er auf Medikamente, wenn es ihm möglich ist, da er von Nebenwirkungen geplagt wurde. In Schulzeiten wurde er für sein ADHS-Verhalten von Gleichaltrigen diskriminiert und unterdrückt. Als Erwachsener kann er die Konsequenzen seiner mentalen Einschränkung genau erkennen. Er ist ein sehr emphatischer Mensch, der sein Umfeld wie ein Buch lesen kann und erkennt, falls etwas nicht stimmen sollte. Gleichzeitig weiß er, dass er sich nicht mit anderen Studenten in beispielsweise Prüfungsphasen vergleichen kann. Hier ist er beeinträchtigt, und auf sich selbst gestellt. Das bedeutet für ihn heute sowie in der Zukunft eine große Herausforderung.", "Nina ist 22 Jahre alt und konnte erst mit 20 Jahren diagnostiziert werden. Sie kommt aus einer Familie, in der psychische Krankheiten nicht als wichtig empfunden werden. Deshalb hat sie sich erst als unabhängige, erwachsene Frau dazu entschlossen, zum Arzt zu gehen. Ihr fällt es schwer, sich zu entspannen. Sie fühlt sich, als würde ihr Herzschlag dauerhaft über 120BPM stehen. Dabei ist das nicht der Fall. Als Studentin aus der finanziellen Oberschicht hat sie mit dem Vorurteil zu kämpfen, dass sie keinen Grund für Sorgen habe. Dennoch trägt sie die Diagnose einer additiven Depression. Sie lebt in einer WG mit Gleichaltrigen, die ihre keine Stabilität geben. Die suche nach dem nächsten emotionalen Streit under Herausfordernde Situation bietet ihr, den eigenen Kopf temporär frei zu bekommen. Nina hat einen Hintergrund zu Drogenmissbrauch um ihre ruhe finden zu können. Der Verzicht darauf, trotz bestehender Ruhe ist ihre schwierigste Herausforderung.", "Emma ist 30 Jahre alt, hat einen Mann und eine Tochter von 2 Jahren. Sie ist aktuell Vollzeit Hausfrau und Mutter im finanziellen Mittelstand. Sie bekam ihre Diagnose mit 16Jahren, als sie den Höhepunkt ihrer Paranoiden Schizophrenie erlebte. Der Höhepunkt wurde von der damaligen Lebenssituation herausgefordert. Innerhalb dieser Zeit erlitt sie den Verlust des Vaters, hatte schlechte Noten in der Schule und war unzufrieden mit sich selbst. Emotionale Probleme neben der Schizophrenie, die sie in allen Befürchtungen bestärkte, sodass sie regelmäßige Panikattacken hatte. Heute hat sie weniger dieser Attacken, leidet dennoch unter den verschiedenen Eindrücken, die nur ihr preisgegeben werden. Sie hört Stimmen, die darauf warten, dass Emma einen schlechten Gedanken fasst. Die Folge daraus sind Befürworter der Sorgen, eine absurder und schlimmer als die andere. Ihre größte Herausforderung ist es, die Stimmen und Gedanken zu Kontrollieren, damit die Situation nicht eskalieren kann.", "Kommt demnächst!"];
    for (let i = 0; i < 4; i++) {
        let person = {
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
    let settings = document.querySelector("#settings");
    settings.innerHTML = "&times";
    settings.removeEventListener("click", w3_open);
    settings.addEventListener("click", w3_close);
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    let settings = document.querySelector("#settings");
    settings.innerHTML = "☰";
    settings.removeEventListener("click", w3_close);
    settings.addEventListener("click", w3_open);
    document.getElementById("mySidebar").style.display = "none";
}
window.addEventListener("load", handleLoad);
//# sourceMappingURL=script.js.map