const url = "https://66cf-62-89-17-18.ngrok-free.app/";

function getTelegramData() {
  const Telegram = window.Telegram;
  document.body.innerHTML = JSON.stringify(Telegram);

  if (Telegram) {
    window.Telegram.WebApp.ready();
    return {
      initData: window.Telegram.initData,
      userData: window.Telegram.initDataUnsafe,
    };
  }
}

async function getAll() {
  try {
    fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err);
  }
}

const telegramData = getTelegramData();
console.log(telegramData);

document.querySelector("body").innerHTML += `
    ${telegramData ? JSON.stringify(telegramData) : "No Data"}
`;
