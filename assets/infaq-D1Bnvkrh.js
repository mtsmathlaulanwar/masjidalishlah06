import{d as i,h as r,a as o,c as u,i as l,k,p as I,f as v,j as w,e as Q}from"./index-DWj9LPsn.js";import{i as D,r as B,s as S,d as x,h as T}from"./programExtras-gCmq9gxM.js";var N="Kelola Infaq/Bantuan",s,d,p=[],c="",f,h;function L(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-hand-thumbs-up me-2"></i>Program Infaq / Bantuan</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddProg"><i class="bi bi-plus-circle me-1"></i>Tambah Program</button>
      </div>
      <div class="table-responsive">
        <table id="tblInfaqProgram" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Judul</th><th>Target</th><th>Terkumpul</th><th>%</th><th>Status</th><th style="width:120px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="admin-card" id="donasiSection" style="display:none">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-people me-2"></i>Daftar Donatur - <span id="selectedProgramName"></span></h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddDonasi"><i class="bi bi-plus-circle me-1"></i>Tambah Donasi</button>
      </div>
      <div class="table-responsive">
        <table id="tblDonasi" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Nama</th><th>Jumlah</th><th>Tanggal</th><th>Admin</th><th style="width:80px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalProgram" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalProgramTitle">Tambah Program</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="progId">
        <div class="mb-3"><label class="form-label fw-bold">Judul Program</label><input type="text" id="progJudul" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Deskripsi</label><textarea id="progDeskripsi" class="form-control" rows="3"></textarea></div>
        <div class="mb-3"><label class="form-label fw-bold">Target (Rp)</label><input type="text" inputmode="numeric" id="progTarget" class="form-control format-rupiah" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Status</label><select id="progStatus" class="form-select"><option value="aktif">Aktif</option><option value="close">Close</option></select></div>
        <div class="mb-3">
          <label class="form-label fw-bold">QRIS Program <span class="text-muted fw-normal">(Opsional)</span></label>
          <div class="btn-group w-100 mb-2" role="group">
            <input type="radio" class="btn-check" name="progQrisMode" id="progQrisModeUpload" value="upload" checked>
            <label class="btn btn-outline-secondary btn-sm" for="progQrisModeUpload"><i class="bi bi-upload me-1"></i>Upload</label>
            <input type="radio" class="btn-check" name="progQrisMode" id="progQrisModeUrl" value="url">
            <label class="btn btn-outline-secondary btn-sm" for="progQrisModeUrl"><i class="bi bi-link-45deg me-1"></i>URL</label>
          </div>
          <div id="progQrisUploadSection"><input type="file" id="progQrisFileInput" accept="image/*" class="form-control form-control-sm"><small class="text-muted">Upload gambar QRIS khusus program ini</small></div>
          <div id="progQrisUrlSection" style="display:none"><input type="text" id="progQrisUrl" class="form-control" placeholder="https://..."><small class="text-muted">URL gambar QRIS</small></div>
          <div class="mt-2 text-center">
            <img id="progQrisPreview" alt="QRIS" referrerpolicy="no-referrer" style="max-width:150px;border-radius:8px;display:none">
            <p id="progQrisNoPreview" class="text-muted small mb-0">Kosongkan jika ingin menggunakan QRIS global</p>
          </div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveProg">Simpan</button></div>
    </div></div></div>

    <div class="modal fade" id="modalDonasi" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalDonasiTitle">Tambah Donasi</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="donId">
        <div class="mb-3"><label class="form-label fw-bold">Nama Donatur</label><input type="text" id="donNama" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Jumlah (Rp)</label><input type="text" inputmode="numeric" id="donJumlah" class="form-control format-rupiah" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Tanggal</label><input type="date" id="donTanggal" class="form-control" required></div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveDonasi">Simpan</button></div>
    </div></div></div>

    ${B()}
  `}function A(){f=new bootstrap.Modal(document.getElementById("modalProgram")),h=new bootstrap.Modal(document.getElementById("modalDonasi")),document.getElementById("btnAddProg").addEventListener("click",function(){E()}),document.getElementById("btnSaveProg").addEventListener("click",U),document.querySelectorAll('input[name="progQrisMode"]').forEach(function(a){a.addEventListener("change",function(){document.getElementById("progQrisUploadSection").style.display=this.value==="upload"?"block":"none",document.getElementById("progQrisUrlSection").style.display=this.value==="url"?"block":"none"})}),document.getElementById("progQrisFileInput").addEventListener("change",function(a){var e=a.target.files[0];if(e){if(!e.type.startsWith("image/")){i("File harus berupa gambar","error");return}var t=new FileReader;t.onload=function(n){var g=n.target.result.split(",")[1];r("Mengupload QRIS..."),o("uploadImage",{},{base64Data:g,filename:"qris-prog-"+Date.now()+".png",mimeType:e.type,token:u()}).then(function(m){l();var P=typeof m=="object"?m.url:m;document.getElementById("progQrisUrl").value=P,document.getElementById("progQrisPreview").src=n.target.result,document.getElementById("progQrisPreview").style.display="inline-block",document.getElementById("progQrisNoPreview").style.display="none",i("QRIS berhasil diupload!")}).catch(function(m){l(),i("Gagal upload: "+m.message,"error")})},t.readAsDataURL(e)}}),document.getElementById("btnAddDonasi").addEventListener("click",q),document.getElementById("btnSaveDonasi").addEventListener("click",M),D(),b()}function J(){s&&(s.destroy(),s=null),d&&(d.destroy(),d=null),x()}function b(){r("Memuat..."),o("getInfaqPrograms").then(function(a){l(),p=a||[];var e=p.map(function(t,n){var g=t.target>0?Math.round((parseFloat(t.terkumpul)||0)/parseFloat(t.target)*100):0;return{no:n+1,judul:"<strong>"+t.judul+"</strong>",target:v(t.target),terkumpul:v(t.terkumpul),pct:'<div class="progress" style="height:8px"><div class="progress-bar bg-success" style="width:'+Math.min(g,100)+'%"></div></div><small>'+g+"%</small>",status:t.status==="aktif"?'<span class="badge bg-success">Aktif</span>':'<span class="badge bg-secondary">Close</span>',aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-info btn-view-donasi" data-id="'+t.id+'" data-name="'+t.judul+'"><i class="bi bi-eye"></i></button><button class="btn btn-outline-primary btn-edit-prog" data-id="'+t.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del-prog" data-id="'+t.id+'"><i class="bi bi-trash"></i></button></div>'}});s?s.clear().rows.add(e).draw():s=$("#tblInfaqProgram").DataTable({data:e,columns:[{data:"no"},{data:"judul"},{data:"target"},{data:"terkumpul"},{data:"pct"},{data:"status"},{data:"aksi",orderable:!1}],order:[[0,"asc"]],language:{search:"Cari:"}}),$("#tblInfaqProgram").off("click",".btn-view-donasi").on("click",".btn-view-donasi",function(){c=$(this).data("id"),document.getElementById("selectedProgramName").textContent=$(this).data("name"),document.getElementById("donasiSection").style.display="block",y(),S("infaq",c)}),$("#tblInfaqProgram").off("click",".btn-edit-prog").on("click",".btn-edit-prog",function(){var t=p.find((function(n){return n.id===$(this).data("id")}).bind(this));t&&E(t)}),$("#tblInfaqProgram").off("click",".btn-del-prog").on("click",".btn-del-prog",function(){var t=$(this).data("id");w("Program dan semua donasi akan dihapus.",function(){r("Menghapus..."),o("deleteInfaqProgram",{},{id:t,token:u()}).then(function(){l(),i("Dihapus!"),b(),document.getElementById("donasiSection").style.display="none",T()}).catch(function(n){l(),i("Gagal: "+n.message,"error")})})})}).catch(function(a){l(),i("Gagal: "+a.message,"error")})}function E(a){$("#progId").val(a?a.id:""),$("#progJudul").val(a?a.judul:""),$("#progDeskripsi").val(a?a.deskripsi:""),$("#progTarget").val(a?a.target.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):""),$("#progStatus").val(a?a.status:"aktif");var e=a&&a.qris_url?a.qris_url:"";$("#progQrisUrl").val(e),document.getElementById("progQrisFileInput").value="",e?(document.getElementById("progQrisPreview").src=e,document.getElementById("progQrisPreview").style.display="inline-block",document.getElementById("progQrisNoPreview").style.display="none",document.getElementById("progQrisModeUrl").checked=!0,document.getElementById("progQrisUploadSection").style.display="none",document.getElementById("progQrisUrlSection").style.display="block"):(document.getElementById("progQrisPreview").style.display="none",document.getElementById("progQrisNoPreview").style.display="block",document.getElementById("progQrisModeUpload").checked=!0,document.getElementById("progQrisUploadSection").style.display="block",document.getElementById("progQrisUrlSection").style.display="none"),$("#modalProgramTitle").text(a?"Edit Program":"Tambah Program"),f.show()}function U(){var a=k(),e={id:$("#progId").val(),judul:$("#progJudul").val().trim(),deskripsi:$("#progDeskripsi").val().trim(),target:I($("#progTarget").val()),status:$("#progStatus").val(),qris_url:($("#progQrisUrl").val()||"").trim(),created_by:a?a.username:"admin",token:u()};if(!e.judul){i("Judul wajib diisi!","warning");return}r("Menyimpan..."),o("saveInfaqProgram",{},e).then(function(){l(),f.hide(),i("Program disimpan!"),b()}).catch(function(t){l(),i("Gagal: "+t.message,"error")})}function y(){r("Memuat donasi..."),o("getInfaqDonasi",{programId:c}).then(function(a){l();var e=(a||[]).map(function(t,n){return{no:n+1,nama:t.nama,jumlah:v(t.jumlah),tanggal:Q(t.tanggal),admin:t.admin_input||"-",aksi:'<button class="btn btn-sm btn-outline-danger btn-del-donasi" data-id="'+t.id+'"><i class="bi bi-trash"></i></button>'}});d?d.clear().rows.add(e).draw():d=$("#tblDonasi").DataTable({data:e,columns:[{data:"no"},{data:"nama"},{data:"jumlah"},{data:"tanggal"},{data:"admin"},{data:"aksi",orderable:!1}],language:{search:"Cari:"}}),$("#tblDonasi").off("click",".btn-del-donasi").on("click",".btn-del-donasi",function(){var t=$(this).data("id");w("Donasi akan dihapus.",function(){o("deleteInfaqDonasi",{},{id:t,programId:c,token:u()}).then(function(){i("Dihapus!"),y(),b()}).catch(function(n){i("Gagal: "+n.message,"error")})})})}).catch(function(a){l(),i("Gagal: "+a.message,"error")})}function q(){$("#donId").val(""),$("#donNama").val(""),$("#donJumlah").val(""),$("#donTanggal").val(new Date().toISOString().split("T")[0]),h.show()}function M(){var a=k(),e={program_id:c,nama:$("#donNama").val().trim(),jumlah:I($("#donJumlah").val()),tanggal:$("#donTanggal").val(),admin_input:a?a.username:"admin",token:u()};if(!e.nama||!e.jumlah){i("Lengkapi semua field!","warning");return}r("Menyimpan..."),o("saveInfaqDonasi",{},e).then(function(){l(),h.hide(),i("Donasi ditambahkan!"),y(),b()}).catch(function(t){l(),i("Gagal: "+t.message,"error")})}export{J as destroy,A as init,N as pageTitle,L as render};
