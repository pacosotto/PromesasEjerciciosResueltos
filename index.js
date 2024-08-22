/*
********* Ejercicio 1: ************
1. Crea una Promesa que simule la realización de una tarea simple, 
como preparar un café.

2. Usa setTimeout para simular un retraso de 2 segundos antes de 
que la Promesa se cumpla.

3. Muestra cómo usar .then() para manejar la Promesa cumplida.
*/

function prepararUnCafe() {
  return new Promise((resolve) => {
    console.log("Preparando tu café...");
    setTimeout(() => {
      resolve("El café está listo.");
    }, 2000);
  });
}

prepararUnCafe().then((resultado) => {
  console.log(resultado);
});

/*
************ Ejercicio 2: ***********
1. Crea una Promesa que simule lanzar una moneda al aire.

2. Si la moneda cae en "cara", la Promesa se cumple; 
si cae en "cruz", la Promesa se rechaza.

Pista: Puedes utilizar Math.random()

3. Usa .then() y .catch() para manejar ambos resultados.
*/

//Este setTimeout solo es para que no se mezcle con la informacion del ejercicio anterior
setTimeout(() => {
  console.log("******************");
  function lanzarUnaMoneda() {
    return new Promise((resolve, reject) => {
      const moneda = Math.random() > 0.5 ? "Cara" : "Cruz";

      if (moneda === "Cara") {
        resolve("¡Salió Cara, ganaste!");
      } else {
        reject("Perdiste salió Cruz");
      }
    });
  }

  lanzarUnaMoneda()
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });
}, 3000);
