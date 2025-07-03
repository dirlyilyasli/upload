README - Upload Foto ke Google Drive

Langkah-langkah:

1. Buka https://script.google.com dan buat proyek baru.
2. Ganti kodenya dengan:

function doPost(e) {
  try {
    var folder = DriveApp.getFolderById("FOLDER_ID_ANDA");
    var blob = Utilities.base64Decode(e.parameter.photo);
    var file = folder.createFile(blob, "foto_" + Date.now() + ".jpg", MimeType.JPEG);
    return ContentService.createTextOutput("Upload berhasil");
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err);
  }
}

3. Klik Deploy > Web App
   - Execute as: Me
   - Who has access: Anyone
4. Salin URL script-nya
5. Ganti YOUR_GOOGLE_SCRIPT_URL_HERE di file script.js
6. Upload project ini ke Netlify atau hosting lain.
