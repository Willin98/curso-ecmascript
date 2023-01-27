const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, etc. ect. ect';

for (const match of fruit.matchAll(regex)){
  console.log(match)
}