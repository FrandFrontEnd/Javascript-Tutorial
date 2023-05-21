// function init() {
//   let nama = "Lefrand";
//   function tampilNama() {
//     console.log(nama); // membutuhkan nama dari function parentnya sehingga di sebut dengan Closures
//   }
//   tampilNama();
// }

// init();

let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();

console.log(a());
console.log(a());
console.log(a());
