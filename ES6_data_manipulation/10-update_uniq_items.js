export default function updateUniqueItems(mapa) {
  if (!(mapa instanceof Map)) throw Error('Cannot process');

  mapa.forEach((cantidad, producto) => {
    mapa.set(producto, cantidad === 1 ? 100 : cantidad);
  });

  return mapa;
}
