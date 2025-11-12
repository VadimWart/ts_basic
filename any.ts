const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const craterError = (msg: string) => {
    throw new Error(msg)
};

function logBirthdayMsg(
  isBirthday: boolean,
  age: number,
  usserName: string
): string {
  // string => string bedeutet, dass die Funktion einen String zurückgibt
  if (isBirthday === true) {
    return `Happy Birthday ${usserName.toLocaleUpperCase()}, age: ${
      age + 1
    } years old!`;
  } else if (isBirthday === false) {
    return 'to bad'
  }
  return craterError("Error"); // or just error
}

logBirthdayMsg(isBirthdayData, ageData, userNameData);
