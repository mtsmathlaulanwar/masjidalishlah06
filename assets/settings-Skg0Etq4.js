import{d as a,h as o,a as n,c as d,i as l}from"./index-DWj9LPsn.js";var I="Pengaturan";function f(){return`
    <div class="admin-card">
      <h6 class="fw-bold mb-4"><i class="bi bi-gear me-2"></i>Pengaturan Masjid</h6>
      <form id="formSettings">
        <div class="border rounded p-3 mb-4">
          <h6 class="fw-bold text-muted mb-3"><i class="bi bi-building me-2"></i>Informasi Masjid</h6>
          <div class="mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="setIsMasjid" checked>
              <label class="form-check-label fw-bold" for="setIsMasjid">Mode Masjid</label>
            </div>
            <small class="text-muted">Aktifkan untuk menampilkan fitur khusus masjid (Info Petugas Sholat Jumat dll)</small>
          </div>
          <div class="mb-3"><label class="form-label fw-bold">Nama Masjid</label><input type="text" id="setNamaMasjid" class="form-control"></div>
          <div class="mb-3"><label class="form-label fw-bold">Lokasi / Alamat</label><textarea id="setLokasi" class="form-control" rows="2"></textarea></div>
          <div class="row g-3">
            <div class="col-md-6"><label class="form-label fw-bold">Latitude</label><input type="text" id="setLatitude" class="form-control"></div>
            <div class="col-md-6"><label class="form-label fw-bold">Longitude</label><input type="text" id="setLongitude" class="form-control"></div>
          </div>
          <button type="button" class="btn btn-outline-primary w-100 mt-2 mb-3" id="btnGetLocation"><i class="bi bi-geo-alt me-2"></i>Ambil Lokasi</button>
          <div class="mb-3 mt-3"><label class="form-label fw-bold">Iframe Peta Google Maps</label><textarea id="setIframePeta" class="form-control" rows="3"></textarea><small class="text-muted">Salin embed code dari Google Maps</small></div>
          <div class="mb-3"><label class="form-label fw-bold">Logo Masjid (URL)</label><input type="text" id="setLogoUrl" class="form-control" placeholder="https://drive.google.com/uc?id=..."><small class="text-muted">Upload logo ke Google Drive, lalu masukkan URL-nya di sini</small></div>
          <div class="mb-3"><label class="form-label fw-bold">Teks Tombol Donasi</label><input type="text" id="setDonasiText" class="form-control" placeholder="Donasi"><small class="text-muted">Teks pada tombol donasi di navbar. Bisa diubah jadi "Infaq", "Sedekah", dll. Default: Donasi</small></div>
          <div class="mb-3">
            <label class="form-label fw-bold">QRIS Donasi</label>
            <div class="btn-group w-100 mb-2" role="group">
              <input type="radio" class="btn-check" name="qrisMode" id="qrisModeUpload" value="upload" checked>
              <label class="btn btn-outline-secondary btn-sm" for="qrisModeUpload"><i class="bi bi-upload me-1"></i>Upload File</label>
              <input type="radio" class="btn-check" name="qrisMode" id="qrisModeUrl" value="url">
              <label class="btn btn-outline-secondary btn-sm" for="qrisModeUrl"><i class="bi bi-link-45deg me-1"></i>URL Manual</label>
            </div>
            <div id="qrisUploadSection"><input type="file" id="qrisFileInput" accept="image/*" class="form-control form-control-sm"><small class="text-muted">Pilih file gambar QRIS (.png, .jpg). Otomatis di-upload ke Drive dan tersimpan.</small></div>
            <div id="qrisUrlSection" style="display:none"><input type="text" id="setQrisUrl" class="form-control" placeholder="https://drive.google.com/file/d/xxx/view"><small class="text-muted">Paste URL gambar QRIS dari Google Drive atau link lain.</small></div>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Preview QRIS</label>
            <div class="border rounded p-2 text-center" style="background:#f8f9fa">
              <img id="qrisPreview" alt="QRIS" style="max-width:200px;border-radius:8px;display:none">
              <p id="qrisNoPreview" class="text-muted small mb-0 py-2">Memuat preview...</p>
            </div>
          </div>
        </div>

        <div class="border rounded p-3 mb-4">
          <h6 class="fw-bold text-muted mb-3"><i class="bi bi-cloud me-2"></i>Google Drive & Sheets IDs</h6>
          <div class="mb-3"><label class="form-label fw-bold">Google Drive Folder ID</label><input type="text" id="setDriveFolderId" class="form-control" placeholder="ID folder untuk upload gambar"></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Berita ID</label><input type="text" id="setSheetBeritaId" class="form-control"></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Keuangan ID</label><input type="text" id="setSheetKeuanganId" class="form-control"></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Infaq ID</label><input type="text" id="setSheetInfaqId" class="form-control"></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Ramadhan ID</label><input type="text" id="setSheetRamadhanId" class="form-control"></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Qurban ID</label><input type="text" id="setSheetQurbanId" class="form-control"></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Kegiatan ID</label><input type="text" id="setSheetKegiatanId" class="form-control"><small class="text-muted">Untuk Kajian & Petugas Jumat</small></div>
          <div class="mb-3"><label class="form-label fw-bold">Sheet Inventaris ID</label><input type="text" id="setSheetInventarisId" class="form-control"><small class="text-muted">Untuk Inventaris & Mustahiq</small></div>
        </div>

        <button type="submit" class="btn btn-admin-primary w-100"><i class="bi bi-save me-2"></i>Simpan Pengaturan</button>
      </form>
    </div>

    <div class="admin-card">
      <h6 class="fw-bold mb-3"><i class="bi bi-tools me-2"></i>Setup Awal</h6>
      <p class="small text-muted">Jika ini pertama kali, klik tombol di bawah untuk membuat file Google Sheets dan mengisi data dummy secara otomatis.</p>
      <button class="btn btn-outline-warning" id="btnRunSetup"><i class="bi bi-lightning me-2"></i>Jalankan Setup Awal (Buat Sheets + Dummy Data)</button>
    </div>
  `}function p(){m(),document.getElementById("btnGetLocation").addEventListener("click",function(){if(!navigator.geolocation){a("Browser tidak mendukung geolokasi","error");return}this.disabled=!0,this.innerHTML='<i class="bi bi-arrow-repeat me-2 spin-icon"></i>Mengambil lokasi...';var e=this;navigator.geolocation.getCurrentPosition(function(t){document.getElementById("setLatitude").value=t.coords.latitude.toFixed(4),document.getElementById("setLongitude").value=t.coords.longitude.toFixed(4),e.disabled=!1,e.innerHTML='<i class="bi bi-geo-alt me-2"></i>Ambil Lokasi',a("Lokasi berhasil diambil!")},function(t){e.disabled=!1,e.innerHTML='<i class="bi bi-geo-alt me-2"></i>Ambil Lokasi',a("Gagal mengambil lokasi: "+t.message,"error")},{enableHighAccuracy:!0,timeout:1e4})}),document.querySelectorAll('input[name="qrisMode"]').forEach(function(e){e.addEventListener("change",function(){document.getElementById("qrisUploadSection").style.display=this.value==="upload"?"block":"none",document.getElementById("qrisUrlSection").style.display=this.value==="url"?"block":"none"})}),document.getElementById("qrisFileInput").addEventListener("change",function(e){var t=e.target.files[0];if(t){if(!t.type.startsWith("image/")){a("File harus berupa gambar","error");return}var s=new FileReader;s.onload=function(c){var r=c.target.result,u=r.split(",")[1];o("Mengupload QRIS..."),n("uploadImage",{},{base64Data:u,filename:"qris-"+Date.now()+".png",mimeType:t.type,token:d()}).then(function(i){l();var b=typeof i=="object"?i.url:i;document.getElementById("setQrisUrl").value=b,document.getElementById("qrisPreview").src=r,document.getElementById("qrisPreview").style.display="inline-block",document.getElementById("qrisNoPreview").style.display="none",a("QRIS berhasil diupload!")}).catch(function(i){l(),a("Gagal upload: "+i.message,"error")})},s.readAsDataURL(t)}}),document.getElementById("formSettings").addEventListener("submit",function(e){e.preventDefault();var t={NAMA_MASJID:$("#setNamaMasjid").val().trim(),LOKASI_MASJID:$("#setLokasi").val().trim(),LATITUDE:$("#setLatitude").val().trim(),LONGITUDE:$("#setLongitude").val().trim(),IFRAME_PETA:$("#setIframePeta").val().trim(),LOGO_URL:$("#setLogoUrl").val().trim(),DONASI_TEXT:$("#setDonasiText").val().trim(),QRIS_URL:$("#setQrisUrl").val().trim(),DRIVE_FOLDER_ID:$("#setDriveFolderId").val().trim(),SHEET_BERITA_ID:$("#setSheetBeritaId").val().trim(),SHEET_KEUANGAN_ID:$("#setSheetKeuanganId").val().trim(),SHEET_INFAQ_ID:$("#setSheetInfaqId").val().trim(),SHEET_RAMADHAN_ID:$("#setSheetRamadhanId").val().trim(),SHEET_QURBAN_ID:$("#setSheetQurbanId").val().trim(),SHEET_KEGIATAN_ID:$("#setSheetKegiatanId").val().trim(),SHEET_INVENTARIS_ID:$("#setSheetInventarisId").val().trim(),IS_MASJID:document.getElementById("setIsMasjid").checked};o("Menyimpan pengaturan..."),n("saveConfig",{},{config:t,token:d()}).then(function(){l(),a("Pengaturan berhasil disimpan!")}).catch(function(s){l(),a("Gagal: "+s.message,"error")})}),document.getElementById("btnRunSetup").addEventListener("click",function(){Swal.fire({title:"Jalankan Setup?",text:"Ini akan membuat 7 file Google Sheets baru dan mengisi data dummy. Lanjutkan?",icon:"question",showCancelButton:!0,confirmButtonText:"Ya, Jalankan!",cancelButtonText:"Batal"}).then(function(e){e.isConfirmed&&(o("Menjalankan setup... (mungkin butuh beberapa saat)"),n("setup").then(function(){l(),Swal.fire({icon:"success",title:"Setup Selesai!",text:"File Sheets telah dibuat dan dummy data telah diisi.",confirmButtonText:"OK"}).then(function(){m()})}).catch(function(t){l(),Swal.fire({icon:"error",title:"Setup Gagal",text:t.message})}))})})}function m(){n("getConfig",{token:d()}).then(function(e){e&&($("#setNamaMasjid").val(e.NAMA_MASJID||""),$("#setLokasi").val(e.LOKASI_MASJID||""),$("#setLatitude").val(e.LATITUDE||""),$("#setLongitude").val(e.LONGITUDE||""),$("#setIframePeta").val(e.IFRAME_PETA||""),$("#setLogoUrl").val(e.LOGO_URL||""),$("#setDonasiText").val(e.DONASI_TEXT||""),$("#setQrisUrl").val(e.QRIS_URL||""),$("#setDriveFolderId").val(e.DRIVE_FOLDER_ID||""),$("#setSheetBeritaId").val(e.SHEET_BERITA_ID||""),$("#setSheetKeuanganId").val(e.SHEET_KEUANGAN_ID||""),$("#setSheetInfaqId").val(e.SHEET_INFAQ_ID||""),$("#setSheetRamadhanId").val(e.SHEET_RAMADHAN_ID||""),$("#setSheetQurbanId").val(e.SHEET_QURBAN_ID||""),$("#setSheetKegiatanId").val(e.SHEET_KEGIATAN_ID||""),$("#setSheetInventarisId").val(e.SHEET_INVENTARIS_ID||""),document.getElementById("setIsMasjid").checked=e.IS_MASJID!==!1&&e.IS_MASJID!=="false",e.QRIS_URL?(document.getElementById("qrisPreview").src=e.QRIS_URL,document.getElementById("qrisPreview").referrerPolicy="no-referrer",document.getElementById("qrisPreview").style.display="inline-block",document.getElementById("qrisNoPreview").style.display="none"):document.getElementById("qrisNoPreview").textContent="Belum ada QRIS")}).catch(function(){document.getElementById("qrisNoPreview").textContent="Belum ada QRIS"})}export{p as init,I as pageTitle,f as render};
