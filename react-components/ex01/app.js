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

console.warn(
  `Folosind metoda map pe arrayul skills, returneaza si afiseaza in consola un array in care fiecare consoana este scrisa cu litera mare (vocalele nu)
  `,
);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const arr1 = person.skills.map((skill) => {
  const letters = skill.split('');

  letters.forEach((letter, index, letters) => {
    if (!vowels.includes(letter)) {
      letters[index] = letters[index].toUpperCase();
    }
  });

  return letters.join('');
});

console.log(arr1);
