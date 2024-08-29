export default function shuffle(lista) {

  for (let indice = lista.length; indice; indice--) {

    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] =
      [lista[indiceAleatorio], lista[indice - 1]];
  }
}