const quizForm = document.getElementById("quizForm");
const hasil = document.getElementById("hasil");
const ulangBtn = document.getElementById("ulangBtn");

const jawabanBenar = {
  q1: "c",
  q2: "b",
  q3: "c",
  q4: "c",
  q5: "b"
};

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let skor = 0;

  for (let key in jawabanBenar) {
    const jawabanUser = quizForm.elements[key].value;
    if (jawabanUser === jawabanBenar[key]) {
      skor += 20;
    }
  }

  let status = skor >= 70 ? "LULUS 🎉" : "TIDAK LULUS ❌";

  hasil.innerHTML = `
    Skor Akhir: ${skor} <br>
    Status: ${status}
  `;

  ulangBtn.style.display = "block";
});

ulangBtn.addEventListener("click", () => {
  quizForm.reset();
  hasil.textContent = "";
  ulangBtn.style.display = "none";
});
