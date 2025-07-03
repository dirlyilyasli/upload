function uploadPhoto() {
  const fileInput = document.getElementById("camera");
  const file = fileInput.files[0];

  if (!file) {
    alert("Silakan ambil foto terlebih dahulu.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const base64 = reader.result.split(',')[1];

    console.log("Mengirim foto ke server...");

    fetch("PASTE_URL_GOOGLE_SCRIPT_MU", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "photo=" + encodeURIComponent(base64)
    })
    .then(res => res.text())
    .then(msg => {
      console.log("Respon:", msg);
      alert(msg);
    })
    .catch(err => {
      console.error("Error kirim:", err);
      alert("Gagal mengirim foto: " + err.message);
    });
  };

  reader.readAsDataURL(file);
}
