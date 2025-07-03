function uploadPhoto() {
  const fileInput = document.getElementById("camera");
  const file = fileInput.files[0];

  if (!file) {
    alert("Silakan ambil foto terlebih dahulu.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const base64 = reader.result.split(',')[1]; // hilangkan header data URL
    fetch("https://script.google.com/macros/s/AKfycbw8odVMUOaxVZowR7BMHINhouPQuRbPrE2Vv3sZevXZCHdw1AL7Zldd6ng52uR4v4T7/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "photo=" + encodeURIComponent(base64)
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => {
      console.error(err);
      alert("Gagal mengirim foto.");
    });
  };

  reader.readAsDataURL(file);
}
