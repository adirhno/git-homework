/** @format */

const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

for (let letter of Object.keys(dictionary)) {
  for (let j = 0; j < dictionary[letter].length; j++) {
    console.log(dictionary[letter][j]);
  }
}
