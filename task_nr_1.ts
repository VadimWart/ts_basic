const currRate: string = "1.05";

const fetchCurr = (response: string): number => {  	//Rein geht: String ("1.05")
													//Drin passiert: Umwandlung von String zu Number
													//Raus kommt: Number (1.05)
	const data: number  = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number) {
	if (available) {
		let res = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);


// currRate = "1.05"
//          ↓
// fetchCurr("1.05")
//          ↓
// JSON.parse("1.05")
//          ↓
//       1.05 (number)
//          ↓
// 1.05 * 500 * 1.05 = 551.25
