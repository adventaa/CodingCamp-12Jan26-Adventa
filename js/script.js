// bagian home
const name = prompt("Masukkan nama kamu:");
if (name) {
  document.getElementById("username").textContent = name;
}

// bagian message us
const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop reload

  // mengambil nilai input
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const cerita = document.getElementById("cerita").value;

  // tampilan hasil
  const card = document.createElement("div");
  card.classList.add("story-card");

  card.innerHTML = `
    <h5>Nama   : ${nama}</h5>
    <h5>Email  : ${email}</h5>
    <h5>Cerita : </h5>
    <p class="mt-3">${cerita}</p>
  `;

  // card tampilan halaman
  result.prepend(card);

  // reset form
  form.reset();
});