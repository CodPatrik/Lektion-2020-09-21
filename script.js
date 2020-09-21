 


// Ett antal x koordinater beskrivs som text strängar för att det måste vara så.
let x1 ="20px";
let x2 ="80px";
let x3 ="160px";
let x4 ="250px";

// Koordinaterna stoppas in i en lista bara för att visa att det går.
let xList = [x1,x2,x3,x4];

// Ytterligare en koordinat stoppas in i listan 
xList.push("350px");

// Visar listan med koordinater i konsollen
console.log(xList);

// Skapar en funktion som anropas när någon trycker på elementet i html dokumentet.
function hit(){
    clearInterval(game); // Avslutar "tids-loopen" vars adress finns i variabeln game.
    let boxen = document.getElementById("box"); // Leta igenom dokumentet efter ett element
                                                // med id=box och om den hittas tilldela adressen
                                                // till det elementet till variabeln boxen.
                                                // Så slipper man leta efter detta varje gång
                                                // Och istället använda adressen direkt.

    
    boxen.style.backgroundColor="black"; // Ändra bakgrundsfärgen på elementet med hjälp av adressen 
                                         // som nu även finns i variabeln som heter boxen.
    alert("Träff när x = "+xList[index]);  // Visar en pop up ruta med texten "Träff"
}


let index = 0;  // SKapar en variabel som ska hålla reda på listans index. 
                // dvs vilken av elementen i listan som ska användas.


// En variant av loop är att man låter ett program köras med hjälp av en timer som 
// kör programmet med vissa tidsintervall.
// Nedan är en sådan loop och även den är något som hamnar i minnet.
// För att kunna avbryta denna loopen så måste man ha adressen till den i minnet.
// Så här skapar jag en variabel som heter game som tilldelas adressen till denna loop.      


let game = setInterval(runGame,600); // funktionen runGame körs med ett intervall om 300ms

function runGame(){
    document.getElementById("box").style.left=xList[index]; // Tilldelar x koordinat från listan
    console.log(xList[index]);  //Visar x koordinat i konsollen
    index++;  // Ökar värdet på index med 1
    if(index > xList.length-1) index=0;  // Om index är större än listans längd sätt index=0
                                         // dvs börja om från början i listan.
}

/*

Man ser ofta koden ovan på sättet nedan.
Det kallas för anonymous function dvs en funktion utan namn
och om man tänker efter behöver den inget namn då det bara är 
loopen som anropar den.

let game = setInterval(()=>{

    document.getElementById("box").style.left=xList[index];
    console.log(xList[index]);
    index++;
    if(index > xList.length-1) index=0;

},600);

*/