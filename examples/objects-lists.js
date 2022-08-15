"use strict";
const person = {
    name: 'Mariana',
    age: 28,
    profession: 'Developer'
};
person.age = 25;
const andre = {
    name: 'Andre',
    age: 25,
    profession: "Painter"
};
const paula = {
    name: 'Paula',
    age: 25,
    profession: "Developer"
};
var Profession;
(function (Profession) {
    Profession[Profession["Teacher"] = 0] = "Teacher";
    Profession[Profession["Actress"] = 1] = "Actress";
    Profession[Profession["Developer"] = 2] = "Developer";
    Profession[Profession["SoccerPlayer"] = 3] = "SoccerPlayer";
})(Profession || (Profession = {}));
const vanessa = {
    name: 'Vanessa',
    age: 23,
    profession: Profession.Developer
};
const maria = {
    name: 'Maria',
    age: 23,
    profession: Profession.Developer
};
const jessica = {
    name: 'Jessica',
    age: 28,
    profession: Profession.Developer,
    subjects: ['math', 'programming language']
};
const monica = {
    name: 'Jessica',
    age: 28,
    subjects: ['math', 'programming language']
};
function toList(list) {
    for (const item of list) {
        console.log('- ', item);
    }
}
toList(monica.subjects);
