const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John",}';

const userObjAny = JSON.parse(userData); // any am  besten sowas meiden und sofort type vergeben
const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);

function logBirthdayMessage3(
  isBirthday: boolean,
  age: number,
  usserName: string
): string {
  // string => string bedeutet, dass die Funktion einen String zurückgibt
  if (isBirthday) {
    return `Happy Birthday ${usserName.toLocaleUpperCase()}, you are now ${
      age + 1
    } years old!`;
  } else {
    return "No birthday today."; // or just error
  }
}

logBirthdayMessage3(isBirthdayData, userNameData, 40);
