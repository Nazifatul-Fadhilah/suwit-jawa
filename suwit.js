function getPilihanComputer() {
  // menangkap pilihan komputer
  const comp = Math.random();
  // membangkitkan pilihan random
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}
function getHasil(comp, player) {
  // menentukan rules
  if (player == comp) return "Anda Seri!!!";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

// Menyeleksi 3 gambar sekaligus

const pilihan = document.querySelectorAll("li img");
let menang = 1;
let kalah = 1;
pilihan.forEach(function (pilih) {
  pilih.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pilih.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      const sKomputer = document.querySelector(".komputer");
      const sPlayer = document.querySelector(".player");
      if (hasil == "MENANG") {
        sPlayer.innerHTML = `Player: ${menang++}`;
      }
      if (hasil == "KALAH") {
        sKomputer.innerHTML = `Komputer: ${kalah++}`;
      }
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// const pOrang = document.querySelector(".orang");
// const pSemut = document.querySelector(".semut");

// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
