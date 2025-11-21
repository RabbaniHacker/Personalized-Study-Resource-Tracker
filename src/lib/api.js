const API_BASE = "http://127.0.0.1:5000/api";

export function getToken() {
  return localStorage.getItem("token");
}

export function authFetch(path, opts = {}) {
  const headers = opts.headers ? opts.headers : {};
  const token = getToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return fetch(`${API_BASE}${path}`, { ...opts, headers });
}
