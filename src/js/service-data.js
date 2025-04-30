const url = "../services.json";

export async function fetchServices() {
  return fetch(url)
    .then((response) => convertToJSON(response))
    .then((data) => {
      console.log(data);
      return data.services || data;
    });
}

function convertToJSON(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error("Failed to fetch services data");
}
