const numbers = [45, 4, 9, 16, 25];

//ForEach
numbers.forEach((number) => console.log(number));
console.log();

//ForIn
for(let index in numbers){
  console.log(numbers[index])
}
console.log();

//ForOf
const letrasT = ["a","b","c"];
for (const elementos of letrasT) {
   console.log(elementos);
}
console.log();

// Conjuntos (Equivalem as nossas listas em Java)
const letras = new Set(["a","b","c"]);
letras.delete("a");
for (const index of letras) {
    letras.add("T");
    console.log(index);
 }