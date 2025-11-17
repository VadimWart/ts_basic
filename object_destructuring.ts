const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
};

const craterError = (msg: string) => {
  throw new Error(msg);
};

function logBirthdayMsg(data: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}): string {
  // string => string bedeutet, dass die Funktion einen String zurückgibt
  if (data.isBirthdayData) {
    return `Happy Birthday ${data.userNameData.toLocaleUpperCase()}, age: ${
      data.ageData + 1
    } years old!`;
  } else {
    return craterError("Error"); // or just error
  }
}

//logBirthdayMsg();
console.log(logBirthdayMsg(userData));



////////destructuring



const isBirthdayData2: boolean = true;
let ageData2: number = 40;
const userNameData2: string = "John";

const userData2 = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error",
  },
};

const craterError2 = (msg: string) => {
  throw new Error(msg);
};

function logBirthdayMsg2({isBirthdayData, userNameData, ageData, messages: {error}}: { 
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  messages: {error: string};
}): string {
  // string => string bedeutet, dass die Funktion einen String zurückgibt
  if (isBirthdayData) {
    return `Happy Birthday ${userNameData.toLocaleUpperCase()}, age: ${
      ageData + 1
    } years old!`;
  } else {
    return craterError(error); // or just error
  }
}

//logBirthdayMsg();
console.log(logBirthdayMsg(userData));
