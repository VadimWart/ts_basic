let userName: string = "Alice"; // mit string deklariert das userName eine String sein muss und wird nicht zu einer Zahl geändert etc

userName.isInteger(); // Fehler: Property 'isInteger' does not exist on type 'string'

userName = 5; // jetzt kann man userName keine Zahl mehr zuweisen, da es als String deklariert ist

// '', "", `` - sind alles String Literale
// 10, 0.5 -50, 0000.1, 0xA  - sind alles Number Literale
// true, false - sind Boolean Literale


// JavaScript Template Literals
const isBirthdayJS = 1;
const ageJS = 40;
const userNameJS = "John";

if (isBirthdayJS) {
    console.log(`Happy Birthday ${userNameJS}, you are now ${ageJS + 1} years old!`); // `` werden benutzt für interpolationen ${userNameJS}, ${ageJS + 1
}

// TypeScript Template Literals
const isBirthdayTS: boolean = true;
const ageTS: number = 40;
const userNameTS: string = "John";

if (isBirthdayTS) {
    console.log(`Happy Birthday ${userNameTS}, you are now ${ageTS + 1} years old!`); // `` werden benutzt für interpolationen ${userNameTS}, ${ageTS + 1
}