const API_URL = "https://portfolio-auth-app.vercel.app/api/auth";



async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  document.getElementById("regMsg").innerText = data.message;
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "portfolio.html";
  } else {
    document.getElementById("loginMsg").innerText = data.message;
  }
}
