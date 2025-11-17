const test: null = null;
const test2: any = null;
const test3: string = null;
const test4: number = null;

const test5: undefined = undefined;
const test6: any = undefined;
const test7: string = undefined;
const test8: number = undefined;

let smth; // in javascript ist undefined und in typescipt ist any

function getRndData () {
    if (Math.random() < 0.5) {
        return null;
    } else {
        return "  Some data  "
    }
}

const data = getRndData();
const trimmedData = data.trim(); // data ? data.trim() : null; oder data?.trim();
