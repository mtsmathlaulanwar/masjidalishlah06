import{d as n,h as u,a as s,c as r,i,k as y,p as M,j as k,e as E,f as g}from"./index-DWj9LPsn.js";import{i as T,r as x,s as B,d as K,h as U}from"./programExtras-gCmq9gxM.js";var q="Kelola Ramadhan",d,o,m,h=[],c="",R,p,f;function N(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-moon-stars me-2"></i>Program Ramadhan</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddRamProg"><i class="bi bi-plus-circle me-1"></i>Tambah Program</button>
      </div>
      <div class="table-responsive">
        <table id="tblRamProgram" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Judul</th><th>Tahun</th><th>Status</th><th style="width:120px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div id="ramDetailSection" style="display:none">
      <div class="row g-3">
        <div class="col-lg-6">
          <div class="admin-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="fw-bold mb-0" style="color:#2e7d32"><i class="bi bi-arrow-down-circle me-2"></i>Pemasukan</h6>
              <button class="btn btn-sm btn-success" id="btnAddRamMasuk"><i class="bi bi-plus me-1"></i>Tambah</button>
            </div>
            <div class="table-responsive"><table id="tblRamMasuk" class="table admin-table table-sm" style="width:100%"><thead><tr><th>Nama</th><th>Jumlah</th><th>Tgl</th><th>Aksi</th></tr></thead><tbody></tbody></table></div>
            <div class="text-end mt-2"><strong>Total: <span id="totalRamMasuk" style="color:#2e7d32">Rp 0</span></strong></div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="admin-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="fw-bold mb-0" style="color:#c62828"><i class="bi bi-arrow-up-circle me-2"></i>Pengeluaran</h6>
              <button class="btn btn-sm btn-danger" id="btnAddRamKeluar"><i class="bi bi-plus me-1"></i>Tambah</button>
            </div>
            <div class="table-responsive"><table id="tblRamKeluar" class="table admin-table table-sm" style="width:100%"><thead><tr><th>Keterangan</th><th>Jumlah</th><th>Tgl</th><th>Aksi</th></tr></thead><tbody></tbody></table></div>
            <div class="text-end mt-2"><strong>Total: <span id="totalRamKeluar" style="color:#c62828">Rp 0</span></strong></div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalRamProgram" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalRamProgTitle">Tambah Program</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="ramProgId">
        <div class="mb-3"><label class="form-label fw-bold">Judul</label><input type="text" id="ramProgJudul" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Tahun</label><input type="text" id="ramProgTahun" class="form-control" value="${new Date().getFullYear()}"></div>
        <div class="mb-3"><label class="form-label fw-bold">Status</label><select id="ramProgStatus" class="form-select"><option value="aktif">Aktif</option><option value="close">Selesai</option></select></div>
        <div class="mb-3">
          <label class="form-label fw-bold">QRIS Program <span class="text-muted fw-normal">(Opsional)</span></label>
          <div class="btn-group w-100 mb-2" role="group">
            <input type="radio" class="btn-check" name="ramQrisMode" id="ramQrisModeUpload" value="upload" checked>
            <label class="btn btn-outline-secondary btn-sm" for="ramQrisModeUpload"><i class="bi bi-upload me-1"></i>Upload</label>
            <input type="radio" class="btn-check" name="ramQrisMode" id="ramQrisModeUrl" value="url">
            <label class="btn btn-outline-secondary btn-sm" for="ramQrisModeUrl"><i class="bi bi-link-45deg me-1"></i>URL</label>
          </div>
          <div id="ramQrisUploadSection"><input type="file" id="ramQrisFileInput" accept="image/*" class="form-control form-control-sm"><small class="text-muted">Upload gambar QRIS khusus program ini</small></div>
          <div id="ramQrisUrlSection" style="display:none"><input type="text" id="ramQrisUrl" class="form-control" placeholder="https://..."><small class="text-muted">URL gambar QRIS</small></div>
          <div class="mt-2 text-center">
            <img id="ramQrisPreview" alt="QRIS" referrerpolicy="no-referrer" style="max-width:150px;border-radius:8px;display:none">
            <p id="ramQrisNoPreview" class="text-muted small mb-0">Kosongkan jika ingin menggunakan QRIS global</p>
          </div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveRamProg">Simpan</button></div>
    </div></div></div>

    <div class="modal fade" id="modalRamMasuk" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Tambah Pemasukan Ramadhan</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <div class="mb-3"><label class="form-label fw-bold">Nama / Keterangan</label><input type="text" id="ramMasukNama" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Jumlah (Rp)</label><input type="text" inputmode="numeric" id="ramMasukJumlah" class="form-control format-rupiah" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Tanggal</label><input type="date" id="ramMasukTgl" class="form-control"></div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-success" id="btnSaveRamMasuk">Simpan</button></div>
    </div></div></div>

    <div class="modal fade" id="modalRamKeluar" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Tambah Pengeluaran Ramadhan</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <div class="mb-3"><label class="form-label fw-bold">Keterangan</label><input type="text" id="ramKeluarKet" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Jumlah (Rp)</label><input type="text" inputmode="numeric" id="ramKeluarJumlah" class="form-control format-rupiah" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Tanggal</label><input type="date" id="ramKeluarTgl" class="form-control"></div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-danger" id="btnSaveRamKeluar">Simpan</button></div>
    </div></div></div>

    ${x()}
  `}function F(){R=new bootstrap.Modal(document.getElementById("modalRamProgram")),p=new bootstrap.Modal(document.getElementById("modalRamMasuk")),f=new bootstrap.Modal(document.getElementById("modalRamKeluar")),document.getElementById("btnAddRamProg").addEventListener("click",function(){Q()}),document.getElementById("btnSaveRamProg").addEventListener("click",j),document.querySelectorAll('input[name="ramQrisMode"]').forEach(function(a){a.addEventListener("change",function(){document.getElementById("ramQrisUploadSection").style.display=this.value==="upload"?"block":"none",document.getElementById("ramQrisUrlSection").style.display=this.value==="url"?"block":"none"})}),document.getElementById("ramQrisFileInput").addEventListener("change",function(a){var t=a.target.files[0];if(t){if(!t.type.startsWith("image/")){n("File harus berupa gambar","error");return}var e=new FileReader;e.onload=function(l){var v=l.target.result.split(",")[1];u("Mengupload QRIS..."),s("uploadImage",{},{base64Data:v,filename:"qris-ram-"+Date.now()+".png",mimeType:t.type,token:r()}).then(function(b){i();var S=typeof b=="object"?b.url:b;document.getElementById("ramQrisUrl").value=S,document.getElementById("ramQrisPreview").src=l.target.result,document.getElementById("ramQrisPreview").style.display="inline-block",document.getElementById("ramQrisNoPreview").style.display="none",n("QRIS berhasil diupload!")}).catch(function(b){i(),n("Gagal upload: "+b.message,"error")})},e.readAsDataURL(t)}}),document.getElementById("btnAddRamMasuk").addEventListener("click",function(){$("#ramMasukNama").val(""),$("#ramMasukJumlah").val(""),$("#ramMasukTgl").val(new Date().toISOString().split("T")[0]),p.show()}),document.getElementById("btnSaveRamMasuk").addEventListener("click",D),document.getElementById("btnAddRamKeluar").addEventListener("click",function(){$("#ramKeluarKet").val(""),$("#ramKeluarJumlah").val(""),$("#ramKeluarTgl").val(new Date().toISOString().split("T")[0]),f.show()}),document.getElementById("btnSaveRamKeluar").addEventListener("click",J),T(),w()}function G(){d&&(d.destroy(),d=null),o&&(o.destroy(),o=null),m&&(m.destroy(),m=null),K()}function w(){u("Memuat..."),s("getRamadhanPrograms").then(function(a){i(),h=a||[];var t=h.map(function(e,l){return{no:l+1,judul:"<strong>"+e.judul+"</strong>",tahun:e.tahun,status:e.status==="aktif"?'<span class="badge bg-success">Aktif</span>':'<span class="badge bg-secondary">Selesai</span>',aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-info btn-view-ram" data-id="'+e.id+'"><i class="bi bi-eye"></i></button><button class="btn btn-outline-primary btn-edit-ram" data-id="'+e.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del-ram" data-id="'+e.id+'"><i class="bi bi-trash"></i></button></div>'}});d?d.clear().rows.add(t).draw():d=$("#tblRamProgram").DataTable({data:t,columns:[{data:"no"},{data:"judul"},{data:"tahun"},{data:"status"},{data:"aksi",orderable:!1}],language:{search:"Cari:"}}),$("#tblRamProgram").off("click",".btn-view-ram").on("click",".btn-view-ram",function(){c=$(this).data("id"),document.getElementById("ramDetailSection").style.display="block",P(),I(),B("ramadhan",c)}),$("#tblRamProgram").off("click",".btn-edit-ram").on("click",".btn-edit-ram",function(){var e=h.find((function(l){return l.id===$(this).data("id")}).bind(this));e&&Q(e)}),$("#tblRamProgram").off("click",".btn-del-ram").on("click",".btn-del-ram",function(){var e=$(this).data("id");k("Program Ramadhan akan dihapus.",function(){u("Menghapus..."),s("deleteRamadhanProgram",{},{id:e,token:r()}).then(function(){i(),n("Dihapus!"),w(),$("#ramDetailSection").hide(),U()}).catch(function(l){i(),n("Gagal","error")})})})}).catch(function(a){i(),n("Gagal: "+a.message,"error")})}function Q(a){$("#ramProgId").val(a?a.id:""),$("#ramProgJudul").val(a?a.judul:""),$("#ramProgTahun").val(a?a.tahun:new Date().getFullYear()),$("#ramProgStatus").val(a?a.status:"aktif");var t=a&&a.qris_url?a.qris_url:"";$("#ramQrisUrl").val(t),document.getElementById("ramQrisFileInput").value="",t?(document.getElementById("ramQrisPreview").src=t,document.getElementById("ramQrisPreview").style.display="inline-block",document.getElementById("ramQrisNoPreview").style.display="none",document.getElementById("ramQrisModeUrl").checked=!0,document.getElementById("ramQrisUploadSection").style.display="none",document.getElementById("ramQrisUrlSection").style.display="block"):(document.getElementById("ramQrisPreview").style.display="none",document.getElementById("ramQrisNoPreview").style.display="block",document.getElementById("ramQrisModeUpload").checked=!0,document.getElementById("ramQrisUploadSection").style.display="block",document.getElementById("ramQrisUrlSection").style.display="none"),R.show()}function j(){var a=y(),t={id:$("#ramProgId").val(),judul:$("#ramProgJudul").val().trim(),tahun:$("#ramProgTahun").val(),status:$("#ramProgStatus").val(),qris_url:($("#ramQrisUrl").val()||"").trim(),created_by:a?a.username:"admin",token:r()};if(!t.judul){n("Judul wajib!","warning");return}u("Menyimpan..."),s("saveRamadhanProgram",{},t).then(function(){i(),R.hide(),n("Disimpan!"),w()}).catch(function(e){i(),n("Gagal","error")})}function P(){s("getRamadhanPemasukan",{programId:c}).then(function(a){var t=0,e=(a||[]).map(function(l,v){return t+=parseFloat(l.jumlah)||0,{nama:l.nama,jumlah:g(l.jumlah),tgl:E(l.tanggal),aksi:'<button class="btn btn-sm btn-outline-danger btn-del-ram-masuk" data-id="'+l.id+'"><i class="bi bi-trash"></i></button>'}});$("#totalRamMasuk").text(g(t)),o?o.clear().rows.add(e).draw():o=$("#tblRamMasuk").DataTable({data:e,columns:[{data:"nama"},{data:"jumlah"},{data:"tgl"},{data:"aksi",orderable:!1}],paging:!1,info:!1,searching:!1}),$("#tblRamMasuk").off("click",".btn-del-ram-masuk").on("click",".btn-del-ram-masuk",function(){var l=$(this).data("id");k("Pemasukan dihapus.",function(){s("deleteRamadhanPemasukan",{},{id:l,token:r()}).then(function(){n("Dihapus!"),P()}).catch(function(){n("Gagal","error")})})})}).catch(function(){})}function I(){s("getRamadhanPengeluaran",{programId:c}).then(function(a){var t=0,e=(a||[]).map(function(l,v){return t+=parseFloat(l.jumlah)||0,{ket:l.keterangan,jumlah:g(l.jumlah),tgl:E(l.tanggal),aksi:'<button class="btn btn-sm btn-outline-danger btn-del-ram-keluar" data-id="'+l.id+'"><i class="bi bi-trash"></i></button>'}});$("#totalRamKeluar").text(g(t)),m?m.clear().rows.add(e).draw():m=$("#tblRamKeluar").DataTable({data:e,columns:[{data:"ket"},{data:"jumlah"},{data:"tgl"},{data:"aksi",orderable:!1}],paging:!1,info:!1,searching:!1}),$("#tblRamKeluar").off("click",".btn-del-ram-keluar").on("click",".btn-del-ram-keluar",function(){var l=$(this).data("id");k("Pengeluaran dihapus.",function(){s("deleteRamadhanPengeluaran",{},{id:l,token:r()}).then(function(){n("Dihapus!"),I()}).catch(function(){n("Gagal","error")})})})}).catch(function(){})}function D(){var a=y(),t={program_id:c,nama:$("#ramMasukNama").val().trim(),jumlah:M($("#ramMasukJumlah").val()),tanggal:$("#ramMasukTgl").val(),admin_input:a?a.username:"admin",token:r()};if(!t.nama||!t.jumlah){n("Lengkapi!","warning");return}u("Menyimpan..."),s("saveRamadhanPemasukan",{},t).then(function(){i(),p.hide(),n("Ditambahkan!"),P()}).catch(function(e){i(),n("Gagal","error")})}function J(){var a=y(),t={program_id:c,keterangan:$("#ramKeluarKet").val().trim(),jumlah:M($("#ramKeluarJumlah").val()),tanggal:$("#ramKeluarTgl").val(),admin_input:a?a.username:"admin",token:r()};if(!t.keterangan||!t.jumlah){n("Lengkapi!","warning");return}u("Menyimpan..."),s("saveRamadhanPengeluaran",{},t).then(function(){i(),f.hide(),n("Ditambahkan!"),I()}).catch(function(e){i(),n("Gagal","error")})}export{G as destroy,F as init,q as pageTitle,N as render};
