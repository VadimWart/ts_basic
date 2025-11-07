// let userName: string = "Alice"; // mit string deklariert das userName eine String sein muss und wird nicht zu einer Zahl geändert etc

// userName.isInteger(); // Fehler: Property 'isInteger' does not exist on type 'string'

// userName = 5; // jetzt kann man userName keine Zahl mehr zuweisen, da es als String deklariert ist

// '', "", `` - sind alles String Literale
// 10, 0.5 -50, 0000.1, 0xA  - sind alles Number Literale
// true, false - sind Boolean Literale

// JavaScript Template Literals
const isBirthdayJS = 1;
const ageJS = 40;
const userNameJS = "John";

if (isBirthdayJS) {
  console.log(
    `Happy Birthday ${userNameJS}, you are now ${ageJS + 1} years old!`
  ); // `` werden benutzt für interpolationen ${userNameJS}, ${ageJS + 1
}

// TypeScript Template Literals
const isBirthdayTS: boolean = true;
const ageTS: number = 40;
const userNameTS: string = "John";

if (isBirthdayTS) {
  console.log(
    `Happy Birthday ${userNameTS}, you are now ${ageTS + 1} years old!`
  ); // `` werden benutzt für interpolationen ${userNameTS}, ${ageTS + 1
}

///// Use system types in  Functions

// TypeScript Template Literals
const isBirthdayTSData: boolean = true;
const ageTSData: number = 40;
const userNameTSData: string = "John";

function logBirthdayMessage(isBirthdayTS2: boolean, ageTS2: number, usserNameTS2: string): void { // void bedeutet, dass die Funktion nichts zurückgibt
    if (isBirthdayTS2) {
        console.log('Happy Birthday ${usserNameTS2}, you are now ${ageTS2 + 1} years old!');
    }

}

logBirthdayMessage(isBirthdayTSData, ageTSData, userNameTSData);


function logBirthdayMessage2(isBirthdayTS2: boolean, ageTS2: number, usserNameTS2: string): string { // string bedeutet, dass die Funktion einen String zurückgibt
    if (isBirthdayTS2) {
        return 'Happy Birthday ${usserNameTS2}, you are now ${ageTS2 + 1} years old!';
    } else {
        return 'No birthday today.'; // or just error
    }

}

logBirthdayMessage2(isBirthdayTSData, ageTSData, userNameTSData);


const logBirthdayMessage3 = (isBirthdayTS3: boolean, ageTS3: number, usserNameTS3: string): string => { // string => string bedeutet, dass die Funktion einen String zurückgibt
    if (isBirthdayTS3) {
        return `Happy Birthday ${usserNameTS3}, you are now ${ageTS3 + 1} years old!`;
    } else {
        return 'No birthday today.'; // or just error
    }
}

logBirthdayMessage3(isBirthdayTSData, ageTSData, userNameTSData);