const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};
const dropChars = (string, charCount = 2) => {
  return string.slice(0, string.length - charCount);
};

console.warn(
  `Folosind obiectul person si reduce, afiseaza in consola un string care
  contine skillurile de pe pozitiile pare ale arrayului, separate prin virgula`,
);

const string1 = person.skills.reduce((string1, skill, index) => {
  if (index % 2 === 0) {
    string1 += `${skill},`;
  }

  return string1;
}, '');

console.log(string1.slice(0, string1.length - 2));

console.warn(` In mod similar, afiseaza skillurile care NU incep cu j.`);

const string2 = person.skills.reduce((string2, skill) => {
  if (!skill.startsWith('j')) {
    string2 += `${skill}, `;
  }
  return string2;
}, '');

console.log(dropChars(string2));

console.warn(
  ` Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
  `,
);

const sentence = person.friends.reduce(
  (sentence, { name, surname }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';
    sentence += `${name} ${surname}${punctuation}`;

    return sentence;
  },
  'Prietenii mei se numesc ',
);
console.log(sentence);

console.warn(`
Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
 doar daca varsta este mai mare sau egala cu 30 de ani.`);

const string3 = person.friends.reduce((string3, { age }) => {
  if (age >= 30) {
    string3 += age;
  }

  return string3;
}, 0);

console.log(string3);

console.warn(
  `Folosind reduce, afiseaza suma anilor de nastere ai persoanelor.
  `,
);

const sumAge = person.friends.reduce((sumAge, { age }) => {
  const curentYear = 2022;
  const birthYear = curentYear - age;

  sumAge += birthYear;
  return sumAge;
}, 0);

console.log(sumAge);

console.warn(
  ` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. `,
);

const string4 = person.friends.reduce((string4, { name, age }) => {
  const ageDiff = person.age - age;
  string4 += `Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani. `;

  return string4;
}, '');

console.log(string4);

console.warn(
  `Folosind obiectul person si reduce, afiseaza in consola un string care
  contine skillurile persoanei, separate prin virgula
  `,
);

const string5 = person.skills.reduce((string5, skill, index) => {
  const punctuation = index === person.skills.length - 1 ? '.' : ', ';

  string5 += `${skill}${punctuation}`;
  return string5;
}, '');

console.log(string5);

console.warn(` In mod similar, afiseaza skillurile care incep cu c `);

const string8 = person.skills.reduce((string8, skill) => {
  if (skill.startsWith('c')) {
    string8 += `${skill},`;
  }

  return string8;
}, '');
console.log(string8);

console.warn(
  `Folosind reduce afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."
  `,
);

const string9 = person.friends.reduce((string9, { surname }, index) => {
  punctuation = index === person.friends.length - 1 ? '.' : ', ';

  string9 += `${surname}${punctuation}`;

  return string9;
}, 'Numele de familie ale prietenilor mei sunt:');

console.log(string9);

console.warn(
  ` Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

const string10 = person.friends.reduce((string10, { age }) => {
  string10 += age;
  return string10;
}, 0);

console.log(string10);

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
  `,
);

const arr12 = person.friends.reduce((arr12, { age }, friends) => {
  const ageDiff = person.age - age;

  arr12 += `${ageDiff}, `;
  return arr12;
}, '');

console.log(arr12);

console.warn(
  ` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven...
  ". Repeta pentru tot arrayul friends.`,
);

const arr13 = person.friends.reduce((arr13, { age, name }) => {
  const ageDiff = person.age - age;
  arr13 += ` Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani. `;
  return arr13;
}, '');

console.log(arr13);
