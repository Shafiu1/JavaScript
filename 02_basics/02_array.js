const marvel_heros=["Thor","Ironman","Spiderman"];
const dc = ['superman','flash','batman'];

// marvel_heros.push(dc);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const all_hero=marvel_heros.concat(dc);
// console.log(all_hero);

const all_new_heros=[...marvel_heros, ...dc]
console.log(all_new_heros)

const another_arry=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arry=another_arry.flat(Infinity);
console.log(real_another_arry)
