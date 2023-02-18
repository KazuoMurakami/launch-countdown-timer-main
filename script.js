const day = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function getHours() {
  const agora = new Date(); // cria um novo objeto Date com a hora atual
  const dias = agora.getDay();
  const hora = agora.getHours(); // obtém a hora atual
  const minuto = agora.getMinutes(); // obtém o minuto atual
  const segundo = agora.getSeconds(); // obtém o segundo atual

  if (segundo < 10) {
    seconds.innerHTML = `0${segundo}`;
  } else {
    seconds.innerHTML = segundo;
  }

  if (minuto < 10) {
    minutes.innerHTML = `0${minuto}`;
  } else {
    minutes.innerHTML = minuto;
  }

  if (hora < 10) {
    hours.innerHTML = `0${hora}`;
  } else {
    hours.innerHTML = hora;
  }

  if (dias < 10) {
    day.innerHTML = `0${dias}`;
  } else {
    day.innerHTML = dias;
  }
}
setInterval(getHours, 1000);
