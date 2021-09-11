/* 
let money = 5000;
let treasure = '';
let you = false; 
*/

let money: number = 80;
let treasure: string = 'the treasure hunter is dope';
let you: boolean = true;

const age: number = 21;

function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(23, 56);
function doubleConsole(number: number): void {
    console.log(2 * number);

}


//multi purpose
/*
function add(first: number | string, second: number): number | string {
    const result: string | number = first + second;
    return result;
}

const output: number = add(23, 56);
const fullName = add('adam', 'sandler');
*/