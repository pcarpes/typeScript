const person = {
    name: 'Mariana',
    age: 28,
    profession: 'Developer'
}

person.age = 25;

const andre: {name: string, age: number, profession: string} = {
    name: 'Andre',
    age: 25,
    profession: "Painter"
}

const paula: {name: string, age: number, profession: string} = {
    name: 'Paula',
    age: 25,
    profession: "Developer"
}

enum Profession {
    Teacher,
    Actress,
    Developer,
    SoccerPlayer
}

interface Person{
    name: string,
    age:number,
    profession?: Profession
}

interface Student extends Person {
    subjects: string[]
}

const vanessa: Person = {
    name: 'Vanessa',
    age: 23,
    profession: Profession.Developer
}

const maria: Person = {
    name: 'Maria',
    age: 23,
    profession: Profession.Developer
}

const jessica: Student = {
    name: 'Jessica',
    age: 28,
    profession: Profession.Developer,
    subjects: ['math', 'programming language']
}

const monica: Student = {
    name: 'Jessica',
    age: 28,
    subjects: ['math', 'programming language']
}

function toList (list: string []) {
    for (const item of list) {
        console.log('- ', item);
    }
}

toList (monica.subjects); 