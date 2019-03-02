export function apiUrl(s) {
  return 'http://localhost:5000' + s;
}

export function postJSON(s, obj) {
  const opts = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  };

  return fetch(apiUrl(s), opts);
}
