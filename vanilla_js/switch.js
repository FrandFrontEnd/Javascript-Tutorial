var item = prompt(
  "masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT!");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan / minuman TIDAK SEHAT!");
    break;
  default:
    alert("anda memasukkan makanan / minuman yang salah!");
    break;
}

// var inputUser = parseInt(prompt("masukkan angka: "));

// switch (inputUser) {
//   case 1:
//     alert("Anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("Anda memasukkan angka 2");
//     break;
//   case 3:
//     alert("Anda memasukkan angka 3");
//     break;
//   default:
//     alert("Yang anda masukkan bukan angka");
//     break;
// }
