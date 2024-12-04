// Contoh interaksi form
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! Terima kasih.");
});document.querySelector("form").addEventListener("submit", (e) => {
    const name = document.querySelector("#name").value;
    if (name.trim() === "") {
        alert("Nama harus diisi!");
        e.preventDefault();
    }
});
// Example: Alert on form submission
document.querySelector("form")?.addEventListener("submit", (e) => {
    alert("Thank you for contacting us!");
    e.preventDefault();
});