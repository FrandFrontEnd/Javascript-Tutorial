// Function Declaration
// * lebih fleksibel(dapat ditulis dimanapun)
// * mudah dipahami pemula
function namaFunction(parameter) {
  // functionBody
  alert("halo " + parameter);
}

// Function Expression
// * Harus didefinisikan terlebih dahulu sebelum dipanggil
// * Bisa digunakan sebagai closure
// * Bisa digunakan sebagai argumen untuk function lain
// * IIFE (Immediately Invoked Function Expression)
var namaFunction = function (parameter) {
  // functionBody
  alert("Halo " + parameter);
};
