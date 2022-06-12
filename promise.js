const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  let kino0 = await promiseTheaterIXX();
  let kino1 = await promiseTheaterVGC();
  let kinos = kino0.concat(kino1);
  let totalEmosi = 0;
  kinos.map(kino0 => kino0.hasil == emosi && (totalEmosi += 1));
  return totalEmosi;
};

module.exports = {
  promiseOutput,
};
