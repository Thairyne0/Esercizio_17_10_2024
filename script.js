const padreDiv = document.getElementById("cell-container");

const funzioneCreatrice = function () {
  for (let i = 1; i < 77; i++) {
    let stringa = String(i);
    console.log("ciao");
    let divFiglio = document.createElement("div");
    divFiglio.id = stringa;

    divFiglio.classList.add("cell");

    divFiglio.innerHTML = `
        <h2>${stringa}</h2>
          `;
    padreDiv.appendChild(divFiglio);
  }
};

const funzioneRandomica = function () {
  return Math.floor(Math.random() * 76) + 1;
};

const funzioneSelected = function () {
  for (let i = 1; i < 77; i++) {
    let casellaSelezionata = document.getElementById(
      String(funzioneRandomica())
    );
    if (casellaSelezionata.style.backgroundColor === "red") {
    } else {
      casellaSelezionata.style.backgroundColor = "red";
      break;
    }
  }
};

const funzioneReset = function () {
  for (let i = 1; i < 77; i++) {
    let casellaSelezionata = document.getElementById(String(i));
    casellaSelezionata.style.backgroundColor = "whitesmoke";
  }
};

funzioneCreatrice();

const button = document.getElementById("pulsante");

button.addEventListener("click", funzioneSelected);

const buttonReset = document.getElementById("pulsanteReset");

buttonReset.addEventListener("click", funzioneReset);
