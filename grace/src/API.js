export function apiUrl(s) {
  return 'http://10.0.100.86:5000' + s;
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
