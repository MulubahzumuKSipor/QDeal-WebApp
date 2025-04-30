const apiKey = "42aeb5fe8a7ce686cb0937df";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

export async function fetchCurrency() {
  return fetch(url)
    .then((res) => convertToJSON(res))
    .then((data) => {
      console.log(data);
      return data;
    });
}

function convertToJSON(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error("Failed to fetch currency data");
}
