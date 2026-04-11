async function ping() {
  const res = await fetch("http://127.0.0.1:8000/ping");
  const data = await res.json();

  document.getElementById("output").innerText =
    data.message;
}

function clearOutput() {
  document.getElementById("output").innerText = "";
}