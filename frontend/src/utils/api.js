export const API_BASE = "http://localhost:8080";

export const authHeader = {
  Authorization: "Basic " + btoa("admin:admin123"),
  "Content-Type": "application/json"
};

export function fetchJson(path, setter) {
  fetch(`${API_BASE}${path}`, { headers: authHeader })
    .then(res => res.json())
    .then(setter)
    .catch(console.error);
}
