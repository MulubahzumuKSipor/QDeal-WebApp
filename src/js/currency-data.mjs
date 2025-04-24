const url =
  "https://v6.exchangerate-api.com/v6/ff1d93c25b679f694ebe5a1c/latest/USD";

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
