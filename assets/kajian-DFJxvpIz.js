import{d as n,h as r,a as c,c as u,i as l,g,e as k,j}from"./index-DWj9LPsn.js";var E="Jadwal Kajian & Kegiatan",s,m=[],p;function B(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-calendar-event me-2"></i>Jadwal Kajian & Kegiatan</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddKajian"><i class="bi bi-plus-circle me-1"></i>Tambah Kajian</button>
      </div>
      <div class="table-responsive">
        <table id="tblKajian" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Judul</th><th>Pemateri</th><th>Tanggal</th><th>Waktu</th><th>Status</th><th style="width:100px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalKajian" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalKajianTitle">Tambah Kajian</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="kajianId">
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label fw-bold">Judul Kajian/Kegiatan <span class="text-danger">*</span></label><input type="text" id="kajianJudul" class="form-control" required></div>
          <div class="col-md-6"><label class="form-label fw-bold">Pemateri/Ustadz <span class="text-danger">*</span></label><input type="text" id="kajianPemateri" class="form-control" required></div>
          <div class="col-md-4"><label class="form-label fw-bold">Tanggal <span class="text-danger">*</span></label><input type="date" id="kajianTanggal" class="form-control" required></div>
          <div class="col-md-4"><label class="form-label fw-bold">Waktu</label><input type="text" id="kajianWaktu" class="form-control" placeholder="Ba'da Maghrib / 19:00"></div>
          <div class="col-md-4"><label class="form-label fw-bold">Status</label><select id="kajianStatus" class="form-select"><option value="upcoming">Akan Datang</option><option value="rutin">Rutin</option><option value="selesai">Selesai</option><option value="batal">Batal</option></select></div>
          <div class="col-md-6"><label class="form-label fw-bold">Tempat</label><input type="text" id="kajianTempat" class="form-control" placeholder="Lantai 1 Masjid"></div>
          <div class="col-md-6">
            <label class="form-label fw-bold">Poster/Foto (Opsional)</label>
            <div class="btn-group w-100 mb-2" role="group">
              <input type="radio" class="btn-check" name="posterMode" id="posterModeUpload" value="upload" checked>
              <label class="btn btn-outline-secondary btn-sm" for="posterModeUpload"><i class="bi bi-upload me-1"></i>Upload</label>
              <input type="radio" class="btn-check" name="posterMode" id="posterModeUrl" value="url">
              <label class="btn btn-outline-secondary btn-sm" for="posterModeUrl"><i class="bi bi-link-45deg me-1"></i>URL Manual</label>
            </div>
            <div id="posterUploadSection">
              <input type="file" id="kajianPosterFile" accept="image/*" class="form-control form-control-sm">
            </div>
            <div id="posterUrlSection" style="display:none">
              <input type="text" id="kajianPoster" class="form-control form-control-sm" placeholder="URL Foto Flyer">
            </div>
            <div class="mt-2 text-center" style="background:#f8f9fa;border:1px dashed #ced4da;border-radius:6px;min-height:80px;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:8px">
              <img id="kajianPosterPreview" alt="Preview Poster" referrerpolicy="no-referrer" crossorigin="anonymous" style="max-width:100%;max-height:120px;display:none;border-radius:4px">
              <span id="kajianNoPoster" class="text-muted small">Belum ada poster</span>
            </div>
          </div>
          <div class="col-12"><label class="form-label fw-bold">Deskripsi</label><textarea id="kajianDeskripsi" class="form-control" rows="3"></textarea></div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveKajian">Simpan</button></div>
    </div></div></div>
  `}function K(){p=new bootstrap.Modal(document.getElementById("modalKajian")),document.getElementById("btnAddKajian").addEventListener("click",function(){v()}),document.getElementById("btnSaveKajian").addEventListener("click",w),document.querySelectorAll('input[name="posterMode"]').forEach(function(a){a.addEventListener("change",function(){document.getElementById("posterUploadSection").style.display=this.value==="upload"?"block":"none",document.getElementById("posterUrlSection").style.display=this.value==="url"?"block":"none"})}),document.getElementById("kajianPosterFile").addEventListener("change",function(a){var t=a.target.files[0];if(t){if(!t.type.startsWith("image/")){n("File harus berupa gambar","error");return}var e=new FileReader;e.onload=function(i){var d=i.target.result,y=d.split(",")[1];r("Mengupload Poster..."),c("uploadImage",{},{base64Data:y,filename:"kajian-"+Date.now()+".png",mimeType:t.type,token:u()}).then(function(o){l();var f=typeof o=="object"?o.url:o;document.getElementById("kajianPoster").value=f,document.getElementById("kajianPosterPreview").src=d,document.getElementById("kajianPosterPreview").style.display="inline-block",document.getElementById("kajianNoPoster").style.display="none",n("Poster berhasil diupload!")}).catch(function(o){l(),n("Gagal upload: "+o.message,"error")})},e.readAsDataURL(t)}}),document.getElementById("kajianPoster").addEventListener("input",function(){var a=this.value.trim();a?(document.getElementById("kajianPosterPreview").src=g(a),document.getElementById("kajianPosterPreview").style.display="inline-block",document.getElementById("kajianNoPoster").style.display="none"):(document.getElementById("kajianPosterPreview").style.display="none",document.getElementById("kajianNoPoster").style.display="inline-block")}),b()}function x(){s&&(s.destroy(),s=null)}function h(a){var t={rutin:"bg-primary",upcoming:"bg-info",selesai:"bg-secondary",batal:"bg-danger"},e={rutin:"Rutin",upcoming:"Akan Datang",selesai:"Selesai",batal:"Batal"};return'<span class="badge '+(t[a]||"bg-secondary")+'">'+(e[a]||a)+"</span>"}function b(){r("Memuat..."),c("getKajianList",{token:u()}).then(function(a){l(),m=a||[];var t=m.map(function(e,i){return{no:i+1,judul:"<strong>"+e.judul+"</strong>",pemateri:e.pemateri,tanggal:k(e.tanggal),waktu:e.waktu||"-",status:h(e.status),aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-primary btn-edit" data-id="'+e.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del" data-id="'+e.id+'"><i class="bi bi-trash"></i></button></div>'}});s?s.clear().rows.add(t).draw():s=$("#tblKajian").DataTable({data:t,columns:[{data:"no"},{data:"judul"},{data:"pemateri"},{data:"tanggal"},{data:"waktu"},{data:"status"},{data:"aksi",orderable:!1}],order:[[3,"desc"]],language:{search:"Cari:"}}),$("#tblKajian").off("click",".btn-edit").on("click",".btn-edit",function(){var e=m.find((function(i){return i.id.toString()===$(this).data("id").toString()}).bind(this));e&&v(e)}),$("#tblKajian").off("click",".btn-del").on("click",".btn-del",function(){var e=$(this).data("id");j("Kajian akan dihapus.",function(){r("Menghapus..."),c("deleteKajian",{},{id:e,token:u()}).then(function(){l(),n("Dihapus!"),b()}).catch(function(i){l(),n("Gagal: "+i.message,"error")})})})}).catch(function(a){l(),n("Gagal: "+a.message,"error")})}function v(a){$("#kajianId").val(a?a.id:""),$("#kajianJudul").val(a?a.judul:""),$("#kajianPemateri").val(a?a.pemateri:""),$("#kajianTanggal").val(a?(a.tanggal||"").split("T")[0]:""),$("#kajianWaktu").val(a?a.waktu:""),$("#kajianTempat").val(a?a.tempat:""),$("#kajianDeskripsi").val(a?a.deskripsi:""),$("#kajianStatus").val(a?a.status:"upcoming"),$("#kajianPoster").val(a&&a.poster||""),$("#kajianPosterFile").val(""),document.getElementById("posterModeUpload").checked=!0,document.getElementById("posterUploadSection").style.display="block",document.getElementById("posterUrlSection").style.display="none";var t=a&&a.poster?a.poster.trim():"",e=document.getElementById("kajianPosterPreview"),i=document.getElementById("kajianNoPoster");if(t){var d=g(t);e.src=d,e.style.display="inline-block",i.style.display="none"}else e.style.display="none",e.src="",i.style.display="inline-block";$("#modalKajianTitle").text(a?"Edit Kajian":"Tambah Kajian"),p.show()}function w(){var a={id:$("#kajianId").val(),judul:$("#kajianJudul").val().trim(),pemateri:$("#kajianPemateri").val().trim(),tanggal:$("#kajianTanggal").val(),waktu:$("#kajianWaktu").val().trim(),tempat:$("#kajianTempat").val().trim(),deskripsi:$("#kajianDeskripsi").val().trim(),poster:$("#kajianPoster").val().trim(),status:$("#kajianStatus").val(),token:u()};if(!a.judul||!a.pemateri||!a.tanggal){n("Judul, pemateri, dan tanggal wajib diisi!","warning");return}r("Menyimpan..."),c("saveKajian",{},a).then(function(){l(),p.hide(),n("Kajian disimpan!"),b()}).catch(function(t){l(),n("Gagal: "+t.message,"error")})}export{x as destroy,K as init,E as pageTitle,B as render};
