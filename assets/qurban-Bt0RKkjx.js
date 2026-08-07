import{d as r,h as o,a as s,c,i as l,k as f,p as w,e as y,j as q,f as I}from"./index-DWj9LPsn.js";import{i as E,r as S,s as T,d as B,h as x}from"./programExtras-gCmq9gxM.js";var N="Kelola Qurban",i,d,u=[],m="",g,p;function L(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-shop me-2"></i>Program Qurban</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddQrbProg"><i class="bi bi-plus-circle me-1"></i>Tambah Program</button>
      </div>
      <div class="table-responsive">
        <table id="tblQrbProgram" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Judul</th><th>Tahun</th><th>Tanggal Qurban</th><th>Status</th><th style="width:120px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="admin-card" id="pesertaSection" style="display:none">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-people me-2"></i>Peserta Qurban - <span id="selectedQrbName"></span></h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddPeserta"><i class="bi bi-plus-circle me-1"></i>Tambah Peserta</button>
      </div>
      <div class="table-responsive">
        <table id="tblPeserta" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Nama</th><th>Harga</th><th>Kelompok</th><th>Tanggal</th><th>Admin</th><th style="width:80px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalQrbProgram" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalQrbProgTitle">Tambah Program Qurban</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="qrbProgId">
        <div class="mb-3"><label class="form-label fw-bold">Judul</label><input type="text" id="qrbProgJudul" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Tahun</label><input type="text" id="qrbProgTahun" class="form-control" value="${new Date().getFullYear()}"></div>
        <div class="mb-3"><label class="form-label fw-bold">Tanggal Qurban</label><input type="date" id="qrbProgTanggal" class="form-control"></div>
        <div class="mb-3"><label class="form-label fw-bold">Status</label><select id="qrbProgStatus" class="form-select"><option value="aktif">Aktif</option><option value="close">Selesai</option></select></div>
        <div class="mb-3">
          <label class="form-label fw-bold">QRIS Program <span class="text-muted fw-normal">(Opsional)</span></label>
          <div class="btn-group w-100 mb-2" role="group">
            <input type="radio" class="btn-check" name="qrbQrisMode" id="qrbQrisModeUpload" value="upload" checked>
            <label class="btn btn-outline-secondary btn-sm" for="qrbQrisModeUpload"><i class="bi bi-upload me-1"></i>Upload</label>
            <input type="radio" class="btn-check" name="qrbQrisMode" id="qrbQrisModeUrl" value="url">
            <label class="btn btn-outline-secondary btn-sm" for="qrbQrisModeUrl"><i class="bi bi-link-45deg me-1"></i>URL</label>
          </div>
          <div id="qrbQrisUploadSection"><input type="file" id="qrbQrisFileInput" accept="image/*" class="form-control form-control-sm"><small class="text-muted">Upload gambar QRIS khusus program ini</small></div>
          <div id="qrbQrisUrlSection" style="display:none"><input type="text" id="qrbQrisUrl" class="form-control" placeholder="https://..."><small class="text-muted">URL gambar QRIS</small></div>
          <div class="mt-2 text-center">
            <img id="qrbQrisPreview" alt="QRIS" referrerpolicy="no-referrer" style="max-width:150px;border-radius:8px;display:none">
            <p id="qrbQrisNoPreview" class="text-muted small mb-0">Kosongkan jika ingin menggunakan QRIS global</p>
          </div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveQrbProg">Simpan</button></div>
    </div></div></div>

    <div class="modal fade" id="modalPeserta" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Tambah Peserta</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="pesertaId">
        <div class="mb-3"><label class="form-label fw-bold">Nama Peserta</label><input type="text" id="pesertaNama" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Harga (Rp)</label><input type="text" inputmode="numeric" id="pesertaHarga" class="form-control format-rupiah" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Kelompok</label><input type="number" id="pesertaKelompok" class="form-control" min="1" value="1" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Tanggal Daftar</label><input type="date" id="pesertaTanggal" class="form-control"></div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSavePeserta">Simpan</button></div>
    </div></div></div>

    ${S()}
  `}function A(){g=new bootstrap.Modal(document.getElementById("modalQrbProgram")),p=new bootstrap.Modal(document.getElementById("modalPeserta")),document.getElementById("btnAddQrbProg").addEventListener("click",function(){P()}),document.getElementById("btnSaveQrbProg").addEventListener("click",U),document.querySelectorAll('input[name="qrbQrisMode"]').forEach(function(a){a.addEventListener("change",function(){document.getElementById("qrbQrisUploadSection").style.display=this.value==="upload"?"block":"none",document.getElementById("qrbQrisUrlSection").style.display=this.value==="url"?"block":"none"})}),document.getElementById("qrbQrisFileInput").addEventListener("change",function(a){var t=a.target.files[0];if(t){if(!t.type.startsWith("image/")){r("File harus berupa gambar","error");return}var e=new FileReader;e.onload=function(n){var Q=n.target.result.split(",")[1];o("Mengupload QRIS..."),s("uploadImage",{},{base64Data:Q,filename:"qris-qrb-"+Date.now()+".png",mimeType:t.type,token:c()}).then(function(b){l();var k=typeof b=="object"?b.url:b;document.getElementById("qrbQrisUrl").value=k,document.getElementById("qrbQrisPreview").src=n.target.result,document.getElementById("qrbQrisPreview").style.display="inline-block",document.getElementById("qrbQrisNoPreview").style.display="none",r("QRIS berhasil diupload!")}).catch(function(b){l(),r("Gagal upload: "+b.message,"error")})},e.readAsDataURL(t)}}),document.getElementById("btnAddPeserta").addEventListener("click",M),document.getElementById("btnSavePeserta").addEventListener("click",D),E(),v()}function _(){i&&(i.destroy(),i=null),d&&(d.destroy(),d=null),B()}function v(){o("Memuat..."),s("getQurbanPrograms").then(function(a){l(),u=a||[];var t=u.map(function(e,n){return{no:n+1,judul:"<strong>"+e.judul+"</strong>",tahun:e.tahun,tanggal:y(e.tanggal_qurban),status:e.status==="aktif"?'<span class="badge bg-success">Aktif</span>':'<span class="badge bg-secondary">Selesai</span>',aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-info btn-view-peserta" data-id="'+e.id+'" data-name="'+e.judul+'"><i class="bi bi-eye"></i></button><button class="btn btn-outline-primary btn-edit-qrb" data-id="'+e.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del-qrb" data-id="'+e.id+'"><i class="bi bi-trash"></i></button></div>'}});i?i.clear().rows.add(t).draw():i=$("#tblQrbProgram").DataTable({data:t,columns:[{data:"no"},{data:"judul"},{data:"tahun"},{data:"tanggal"},{data:"status"},{data:"aksi",orderable:!1}],language:{search:"Cari:"}}),$("#tblQrbProgram").off("click",".btn-view-peserta").on("click",".btn-view-peserta",function(){m=$(this).data("id"),document.getElementById("selectedQrbName").textContent=$(this).data("name"),document.getElementById("pesertaSection").style.display="block",h(),T("qurban",m)}),$("#tblQrbProgram").off("click",".btn-edit-qrb").on("click",".btn-edit-qrb",function(){var e=u.find((function(n){return n.id===$(this).data("id")}).bind(this));e&&P(e)}),$("#tblQrbProgram").off("click",".btn-del-qrb").on("click",".btn-del-qrb",function(){var e=$(this).data("id");q("Program Qurban akan dihapus.",function(){o("Menghapus..."),s("deleteQurbanProgram",{},{id:e,token:c()}).then(function(){l(),r("Dihapus!"),v(),$("#pesertaSection").hide(),x()}).catch(function(n){l(),r("Gagal: "+n.message,"error")})})})}).catch(function(a){l(),r("Gagal: "+a.message,"error")})}function P(a){$("#qrbProgId").val(a?a.id:""),$("#qrbProgJudul").val(a?a.judul:""),$("#qrbProgTahun").val(a?a.tahun:new Date().getFullYear()),$("#qrbProgTanggal").val(a&&a.tanggal_qurban?new Date(a.tanggal_qurban).toISOString().split("T")[0]:""),$("#qrbProgStatus").val(a?a.status:"aktif");var t=a&&a.qris_url?a.qris_url:"";$("#qrbQrisUrl").val(t),document.getElementById("qrbQrisFileInput").value="",t?(document.getElementById("qrbQrisPreview").src=t,document.getElementById("qrbQrisPreview").style.display="inline-block",document.getElementById("qrbQrisNoPreview").style.display="none",document.getElementById("qrbQrisModeUrl").checked=!0,document.getElementById("qrbQrisUploadSection").style.display="none",document.getElementById("qrbQrisUrlSection").style.display="block"):(document.getElementById("qrbQrisPreview").style.display="none",document.getElementById("qrbQrisNoPreview").style.display="block",document.getElementById("qrbQrisModeUpload").checked=!0,document.getElementById("qrbQrisUploadSection").style.display="block",document.getElementById("qrbQrisUrlSection").style.display="none"),g.show()}function U(){var a=f(),t={id:$("#qrbProgId").val(),judul:$("#qrbProgJudul").val().trim(),tahun:$("#qrbProgTahun").val(),tanggal_qurban:$("#qrbProgTanggal").val(),status:$("#qrbProgStatus").val(),qris_url:($("#qrbQrisUrl").val()||"").trim(),created_by:a?a.username:"admin",token:c()};if(!t.judul){r("Judul wajib!","warning");return}o("Menyimpan..."),s("saveQurbanProgram",{},t).then(function(){l(),g.hide(),r("Disimpan!"),v()}).catch(function(e){l(),r("Gagal: "+e.message,"error")})}function h(){o("Memuat peserta..."),s("getQurbanPeserta",{programId:m}).then(function(a){l();var t=(a||[]).map(function(e,n){return{no:n+1,nama:e.nama,harga:I(e.harga),kelompok:'<span class="badge bg-primary">Kel. '+e.kelompok+"</span>",tanggal:y(e.tanggal),admin:e.admin_input||"-",aksi:'<button class="btn btn-sm btn-outline-danger btn-del-peserta" data-id="'+e.id+'"><i class="bi bi-trash"></i></button>'}});d?d.clear().rows.add(t).draw():d=$("#tblPeserta").DataTable({data:t,columns:[{data:"no"},{data:"nama"},{data:"harga"},{data:"kelompok"},{data:"tanggal"},{data:"admin"},{data:"aksi",orderable:!1}],language:{search:"Cari:"}}),$("#tblPeserta").off("click",".btn-del-peserta").on("click",".btn-del-peserta",function(){var e=$(this).data("id");q("Peserta dihapus.",function(){s("deleteQurbanPeserta",{},{id:e,token:c()}).then(function(){r("Dihapus!"),h()}).catch(function(n){r("Gagal","error")})})})}).catch(function(a){l(),r("Gagal: "+a.message,"error")})}function M(){$("#pesertaId").val(""),$("#pesertaNama").val(""),$("#pesertaHarga").val(""),$("#pesertaKelompok").val(1),$("#pesertaTanggal").val(new Date().toISOString().split("T")[0]),p.show()}function D(){var a=f(),t={program_id:m,nama:$("#pesertaNama").val().trim(),harga:w($("#pesertaHarga").val()),kelompok:parseInt($("#pesertaKelompok").val())||1,tanggal:$("#pesertaTanggal").val(),admin_input:a?a.username:"admin",token:c()};if(!t.nama||!t.harga){r("Lengkapi!","warning");return}o("Menyimpan..."),s("saveQurbanPeserta",{},t).then(function(){l(),p.hide(),r("Peserta ditambahkan!"),h()}).catch(function(e){l(),r("Gagal: "+e.message,"error")})}export{_ as destroy,A as init,N as pageTitle,L as render};
