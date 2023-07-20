namespace Documentation {
    let mynd: string[] = ["M", "Y", "N", "D"];

    function handleLoad(): void {
        console.log("ghetto");

        let root: HTMLDivElement | null = document.querySelector("#root");
        let rootWrap: HTMLDivElement = document.createElement("div");
        rootWrap.id = "rootWrap";

        for (let i: number = 0; i < 4; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.id = mynd[i];
            div.className = "link";
            div.innerText = mynd[i];
            div.addEventListener("mouseenter", () => {
                showChapter(i, div);
            });

            div.addEventListener("mouseleave", () => {
                showLetter(div);
            });
            rootWrap.append(div);
        }

        root.append(rootWrap);

        for (let i: number = 1; i < 4; i++) {
            let select: HTMLDivElement = document.querySelector(`#select${i}`);
            let selectWrap: HTMLDivElement = document.createElement("div");
            selectWrap.className = "selectWrap";
            for (let n: number = 0; n < 4; n++) {
                let div: HTMLDivElement = document.createElement("div");
                div.className = "selection";
                div.innerText = `${n + 1}`
                div.addEventListener("mouseenter", () => {
                    showHeadline(i, n);
                });

                div.addEventListener("click", () => {
                    showText(i, n);
                });
                selectWrap.append(div);
            }
            select.append(selectWrap);
        }
    }

    function showChapter(_chapter: number, _div: HTMLDivElement): void {
        console.log("tmm");
        _div.innerText = "";
        let link: HTMLAnchorElement = document.createElement("a");
        link.href = `#chapter${_chapter + 1}`;
        link.innerText = `${_chapter + 1}`
        _div.append(link);
        console.log("fr");
    }

    function showLetter(_div: HTMLDivElement): void {
        _div.innerHTML = _div.id;
        console.log("wah");
    }

    function showHeadline(_chapter: number, _id: number): void {
        console.log("ham");
        let headline: HTMLHeadingElement | null = document.querySelector(`#headline${_chapter}`);
        if (_chapter == 1) {
            if (_id == 0)
                headline.innerText = "Beschreibung der Anwendung";
            else if (_id == 1)
                headline.innerText = "Ziele und Hintergrund der Anwendung";
            else if (_id == 2)
                headline.innerText = "Besonderheiten und Konsequenzen";
            else if (_id == 3)
                headline.innerText = "Der Medienträger + integrierte Medien";
        } else if (_chapter == 2) {
            if (_id == 0)
                headline.innerText = "Auswahlmöglichkeit Nummer 1 - Schule, Uni oder Arbeit";
            else if (_id == 1)
                headline.innerText = "Auswahlmöglichkeit Nummer 2 - Howto: Relax";
            else if (_id == 2)
                headline.innerText = "Auswahlmöglichkeit Nummer 3 - Verpeilt";
            else if (_id == 3)
                headline.innerText = "Auswahlmöglichkeit Nummer 4 - HyperMYND";
        } else if (_chapter == 3) {
            if (_id == 0)
                headline.innerText = "Ben (ADHS/ADS)";
            else if (_id == 1)
                headline.innerText = "Nina (Entwurf - Additive Depressionen)";
            else if (_id == 2)
                headline.innerText = "Emma (Paranoide Schizophrenie)";
            else if (_id == 3)
                headline.innerText = "Wer bin ich?“ (Anfragen von Spielern)";
        }
    }


    function showText(_chapter: number, _id: number): void {
        let detail: HTMLDivElement | null = document.querySelector(`#detail${_chapter}`);
        if (_chapter == 1) {
            if (_id == 0)
                detail.innerHTML = "<p>„MYND“ steht für „my mind“ und bedeutet Übersetzt „mein Verstand“. Es ist zudem der Titel einer interaktiven<br>Anwendung, die den Rezipienten auf psychische Krankheiten aufmerksam macht. Das Spiel beginnt mit der Auswahl<br>einer Einschränkung in Form von vordefinierten Personas. Eine Persona steht für dabei für eine psychische<br>Krankheit. Die Auswahl bringt den Rezipienten in ein zweites Auswahlen, dass eine Reihe an Herausforderungen<br>bietet. Diese beinhalten jeweils eine Alltagssituation, Inder die mentale Behinderung den Schwierigkeitsgrad<br>beeinflusst. Diese Anwendung ist an diejenigen gerichtet, die sich in der Thematik weiterbilden möchten. </p>";
            else if (_id == 1)
                detail.innerHTML = "<p>Das Angebot der Herausforderungen lassen den Rezipienten in der Point-Of-View-Ansicht(=POV), die<br>Herausforderungen des Alltages mit dem eigenen Alltag leicht vergleichen. Die Herausforderungen behandeln<br>oberflächliche Aufgaben, die auch psychisch gesunden Menschen schwer fallen können, sodass eine Sympathie für<br>das Spiel garantiert werden kann. Ziel ist es, das Rezipienten mit Betroffenen Menschen „mitfühlen“ können und<br>eine generelle Achtsamkeit bzw. Aufklärung gegenüber der jeweiligen psychischen Krankheit und dessen<br>Beeinträchtigungen geschaffen wird. Die Anwendung fokussiert auf die Zielgruppe von Rezipienten im Alter<br>zwischen 15 und 30 Jahren. Darunter zählen nicht nur Betroffene Personen, die an psychischen Krankheiten leiden,<br>und sich selbst besser verstehen möchten. Ebenso das direkte und indirekte Umfeld, die Betroffene besser<br>nachvollziehen wollen.</p>";
            else if (_id == 2)
                detail.innerHTML = "<p>Die Anwendung behandelt psychische Krankheiten in Bezug auf gezielte Alltagssituationen, das als erste<br>Besonderheit gilt.Die nächste Besonderheit ist das einblenden einer Warnung, die sich auf eine der Konsequenzen<br>der Anwendung bezieht.Diese bezieht sich auf das mitfühlen und sich identifizieren mit der jeweiligen Person<br>und dementsprechend psychischen Krankheit.Die Warnung besagt, dass die Anwendung keine Diagnosen stellen kann<br>und nicht zur selbst - Diagnose genutzt werden kann. Bei Auffälligkeiten und starken Überschneidungen der eigenen<br>Verhaltensweisen zu den psychisch kranken Personas soll eine fachlich kompetente Person kontaktiert werden.Eine<br>weitere Besonderheit ist die spielerische Ausarbeitung von Situationen, die für Betroffene, in der Bewältigung,<br>schwierig sein kann. Die einzelnen Spiele zur jeweiligen Situation beinhalten außergewöhnliche Effekte, die<br>inhaltlich auf die Herausforderung abgestimmt sind. Unter Effekte zählen unter anderem Audiodateien, die die<br>Erfahrung verstärken und zum Teil alleinig ausmachen. Dies gilt ebenfalls für die Einbindung von<br>Videomaterialien und jeder Art von Animationen. In jedem Fall gezielt in Nutzung.</p>";
            else if (_id == 3)
                detail.innerHTML = "<p>Die Anwendung ist ausschließlich im Browser verfügbar. Die Zielgruppe hat ausreichende Kenntnisse innerhalb<br>dieser Umgebung und kann das voll potenzial darin ausschöpfen. Im Hintergrund können Materialien schnell geladen<br>werden, was sich auf die Aufmerksamkeitsspanne der Zielgruppe bezieht. </p>";
        } else if (_chapter == 2) {
            if (_id == 0)
                detail.innerHTML = "<p>In dieser Herausforderung wird der Rezipient in Form der Persona, an einem online Unterricht teilnehmen. Die<br>Aufgabe besteht darin den Fokus zu halten und die Informationen des Lehrenden aufzunehmen. Dieses Ziel wird<br>durch visuelle Einflüsse wie verschwommene Texte oder hyper-fokussierte Wörter erschwert. Genauso werden<br>Audiodateien abgespielt, die die Gedanken von Ben verkörpern. Diese sind wild ineinander verknüpft, und geben an<br>vielen Stellen keinen Sinn. Diese Gedanken und die Effekte bilden den Schwierigkeitsgrad mit 7 von 10. Der<br>Hinweis darin ist, sich selbst erinnern zu müssen, wobei es in dieser MYND-Challenge geht.</p>";
            else if (_id == 1)
                detail.innerHTML = "<p>In dieser Herausforderung ist Ben in einem „Hoch“ von Chaotischen Gedanken. Das bedeutet, dass Ben sehr<br>aufgedreht ist, wobei es an der Zeit ist ins Bett zu gehen. Rezipienten sehen der Umrandung eines Kopfes mit<br>vielen verschiedenen Formen darin. Diese verkörpern den emotionalen Palast, der abgeworfen werden muss, damit<br>man entspannen kann. Dafür muss der Spieler durch „Drag and Drop“ die Formen aus dem Kopf ziehen. Gleichzeitig<br>erscheinen immer mehr Formen im Kopf der Persona, sodass die Aufgabe unmöglich erscheint. Der Schwierigkeitsgrad<br>liegt hier bei 6 von 10 mit dem Hinweis auf Konstanz und Beibehalten.</p>";
            else if (_id == 2)
                detail.innerHTML = "<p>Diese Herausforderung ist vom Prinzip her wie ein Memorie-Spiel. Das bedeutet, dass man sich an Objekte erinnern<br>muss, die im Moment nicht sichtbar sind. Alltagsgegenstände wie das Handy, der Schlüssel oder die Trinkflasche<br>werden hierbei immer wieder aus den Augen der Persona verschwinden. Ziel ist es letztendlich, die Gegenstände im<br>Moment der Abfrage gefunden werden ist. Die Persona läuft innerhalb von einer Minute 3 mal durch einen<br>Kreisförmige Gang. Währenddessen werden Objekte gesichtet, aufgenommen und abgelegt. Beeinflussen kann das der<br>Rezipient nicht. Hierbei geht es alleinig um die Fähigkeit, sich auf mehrere Objekte zu fokussieren, selbst wenn<br>sich die Umstände in kurzer Zeit mehrmals ändern.</p>";
            else if (_id == 3)
                detail.innerHTML = "<p>Der HyperMynd verkörpert den typischen Hyperfokus von Personen, die an ADHS/ADS leiden.</p>";
        } else if (_chapter == 3) {
            if (_id == 0)
                detail.innerHTML = "<p>Ben wurde schon im frühen Alter von 6 Jahren diagnostiziert. Heute ist er 24 Jahre alt und bestehend ist die<br>Diagnose für ADHS/ADS. Er ist Student im Bereich Medien und arbeitet nicht währenddessen. Zusammen mit seiner<br>Freundin von 4 Jahren teilt er sich eine Wohnung nähe der Universität und ist damit in einem finanziellen<br>Mittelstand. Er hat zwei jüngere Geschwister mit sich liebenden Eltern. Sein Vater hat die Symptome von Ben als<br>erstes erkennt und untersuchen lassen. Er viel auf durch typische Verhaltensweisen, wie<br>Konzentrationsschwierigkeiten oder auch das gedanklichen „abtriften“ innerhalb von Konversationen. Die früh<br>erkannte Krankheit verhalf ihm, seine Schwierigkeiten fachgerecht zu bewältigen, so kam es zur regelmäßigen<br>Annahme von Ritalin. Heute verzichtet er auf Medikamente, wenn es ihm möglich ist, da er von Nebenwirkungen<br>geplagt wurde. In Schulzeiten wurde er für sein ADHS-Verhalten von Gleichaltrigen diskriminiert und unterdrückt.<br>Als Erwachsener kann er die Konsequenzen seiner mentalen Einschränkung genau erkennen. Er ist ein sehr<br>emphatischer Mensch, der sein Umfeld wie ein Buch lesen kann und erkennt, falls etwas nicht stimmen sollte.<br>Gleichzeitig weiß er, dass er sich nicht mit anderen Studenten in beispielsweise Prüfungsphasen vergleichen<br>kann. Hier ist er beeinträchtigt, und auf sich selbst gestellt. Das bedeutet für ihn heute sowie in der Zukunft<br>eine große Herausforderung.</p>";
            else if (_id == 1)
                detail.innerHTML = "<p>Nina ist 22 Jahre alt und konnte erst mit 20 Jahren diagnostiziert werden. Sie kommt aus einer Familie, in der<br>psychische Krankheiten nicht als wichtig empfunden werden. Deshalb hat sie sich erst als unabhängige, erwachsene<br>Frau dazu entschlossen, zum Arzt zu gehen. Ihr fällt es schwer, sich zu entspannen. Sie fühlt sich, als würde<br>ihr Herzschlag dauerhaft über 120BPM stehen. Dabei ist das nicht der Fall. Als Studentin aus der finanziellen<br>Oberschicht hat sie mit dem Vorurteil zu kämpfen, dass sie keinen Grund für Sorgen habe. Dennoch trägt sie die<br>Diagnose einer additiven Depression. Sie lebt in einer WG mit Gleichaltrigen, die ihre keine Stabilität geben.<br>Die suche nach dem nächsten emotionalen Streit under Herausfordernde Situation bietet ihr, den eigenen Kopf<br>temporär frei zu bekommen. Nina hat einen Hintergrund zu Drogenmissbrauch um ihre ruhe finden zu können. Der<br>Verzicht darauf, trotz bestehender Ruhe ist ihre schwierigste Herausforderung.</p>";
            else if (_id == 2)
                detail.innerHTML = "<p>Emma ist 30 Jahre alt, hat einen Mann und eine Tochter von 2 Jahren. Sie ist aktuell Vollzeit Hausfrau und Mutter<br>im finanziellen Mittelstand. Sie bekam ihre Diagnose mit 16Jahren, als sie den Höhepunkt ihrer Paranoiden<br>Schizophrenie erlebte. Der Höhepunkt wurde von der damaligen Lebenssituation herausgefordert. Innerhalb dieser<br>Zeit erlitt sie den Verlust des Vaters, hatte schlechte Noten in der Schule und war unzufrieden mit sich selbst.<br>Emotionale Probleme neben der Schizophrenie, die sie in allen Befürchtungen bestärkte, sodass sie regelmäßige<br>Panikattacken hatte. Heute hat sie weniger dieser Attacken, leidet dennoch unter den verschiedenen Eindrücken,<br>die nur ihr preisgegeben werden. Sie hört Stimmen, die darauf warten, dass Emma einen schlechten Gedanken fasst.<br>Die Folge daraus sind Befürworter der Sorgen, eine absurder und schlimmer als die andere. Ihre größte<br>Herausforderung ist es, die Stimmen und Gedanken zu Kontrollieren, damit die Situation nicht eskalieren kann.</p>";
            else if (_id == 3)
                detail.innerHTML = "<p>Diese persona trägt keinen Namen. Die Parameter zum Alter, Lebensstatus sowie Diagnose sind nicht gegeben. Somit<br>kann der Rezipient in form eines Formulars eine spezifische Persona anfragen. Diese Anfrage könnten im nächsten<br>Update der Anwendung eingebunden werden.</p>";
        }
    }

    window.addEventListener("load", handleLoad);
}
