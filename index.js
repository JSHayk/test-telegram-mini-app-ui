const url = "https://7cfe-62-89-17-18.ngrok-free.app";

function getTelegramData() {
  const Telegram = window.Telegram;

  if (Telegram) {
    window.Telegram.WebApp.ready();
    return {
      initData: window.Telegram.WebApp.initData,
      userData: window.Telegram.WebApp.initDataUnsafe,
    };
  }

  return {};
}

async function drawElement(selector, content) {
  document.querySelector(selector).innerHTML = content;
}

async function drawData(data) {
  try {
    const res = await data;
    const { userData } = res;
    const drawData = userData?.user;

    drawElement("full-name", `${drawData.first_name} ${drawData.last_name}`);
    drawElement("username", drawData.username);
    drawElement("id", id);

    document.querySelector("body").innerHTML += JSON.stringify(res);
  } catch (err) {
    console.error(err);
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

async function login() {
  try {
    const telegramData = getTelegramData();
    document.querySelector(
      "body"
    ).innerHTML += `Telegram API Data ${JSON.stringify(telegramData)}`;
    const res = await fetch(`${url}/auth`, {
      method: "POST",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Content-Type": "application/json",
      }),

      body: JSON.stringify(telegramData),
    });
    const { data } = await res.json();
    drawData(data);
  } catch (err) {
    console.error(err);
  }
}
login();

// Response

// {
//     "initData": "user={\"id\":5202669681,\"first_name\":\"Hayk\",\"last_name\":\"\",\"username\":\"JSHayk\",\"language_code\":\"en\",\"is_premium\":true,\"allows_write_to_pm\":true}&chat_instance=-8067047231400039736&chat_type=private&auth_date=1728665633&hash=28a5b97fbdda4d5ab981a8f8db01403dd6c82a2ef48fc964c43cc8c20ab24d38",
//     "userData": {
//       "user": {
//         "id": 5202669681,
//         "first_name": "Hayk",
//         "last_name": "",
//         "username": "JSHayk",
//         "language_code": "en",
//         "is_premium": true,
//         "allows_write_to_pm": true
//       },
//       "chat_instance": "-8067047231400039736",
//       "chat_type": "private",
//       "auth_date": "1728665633",
//       "hash": "28a5b97fbdda4d5ab981a8f8db01403dd6c82a2ef48fc964c43cc8c20ab24d38"
//     }
//   }
