interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
    previousClubs?: string[]
}
const messy: Player = {
    name: 'lionel messi',
    club: 'PSG',
    salary: 100000,
    wife: 'Antonalo roccuzzo',


}
const dybala: Player = {
    name: 'Dybala',
    club: 'barcelona',
    salary: 50000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer {
    name: string
    language: string,
    codeEditor: string,
    typespeed: number,
}

const zuku: Developer = {
    name: 'js dude',
    language: 'english',
    codeEditor: 'vs code',
    typespeed: 65,
}