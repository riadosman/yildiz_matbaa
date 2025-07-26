const apiToken =
  "f02362cb97d9544217822a3fe71257125a5ee3ae49eb673f08a4f165b1ffbc5444d7946aef3faa31eb63621e6867a1c02df4e062293beada42e615122ce833548ec4bcb78ec7837608fa510b35424fa7271cf783e482de8d7e07d4b8a641253fc57dd614cce21a4d6733a832fc7b34750c6247abcb63fff3f8fff0217aca40e9";
const AllproductsData = fetch("http://localhost:1337/api/products?populate=*", {
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
})
  .then((res) => res.json())
  .then((data) => data.data);
export { AllproductsData };