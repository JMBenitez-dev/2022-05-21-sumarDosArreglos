let arregloA:number[]=new Array(6);
let arregloB:number[]=new Array(6);
let arregloSuma:number[]=new Array(6);

let indice:number;

for (indice=0; indice < arregloA.length ; indice++){
    arregloA[indice] = Number(prompt(`Ingrese el valor del elemento actual ${indice} de ${arregloA.length} del arreglo A`));
  ;}

for (indice=0; indice < arregloB.length ; indice++){
  arregloB[indice] = Number(prompt(`Ingrese el valor del elemento actual ${indice} de ${arregloB.length} del arreglo B`));
;}

for (indice=0; indice < arregloSuma.length ; indice++){
  arregloSuma[indice] = arregloA[indice] + arregloB[indice];
  console.log(`La suma del elemento ${indice} del arreglo A:${arregloA[indice]} + el del arreglo B:${arregloB[indice]} = ${arregloSuma[indice]}`);
}
// Esta muy bien tu solución, como verás, los casos donde hay codigos casi identicos son ideales para usar funciones y evitar codigo repetido
// Si bien este ejercicio no pedia usar funciones, cuando tengas tiempo podes intentar hacer eso como una practica.
