import{c as s,d as l,h as m,a as u,i,e as h,j as v}from"./index-DWj9LPsn.js";var p="Info Petugas Sholat Jumat",n,o=[],b;function J(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-mic me-2"></i>Info Petugas Sholat Jumat</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddJumat"><i class="bi bi-plus-circle me-1"></i>Tambah Jadwal</button>
      </div>
      <div class="table-responsive">
        <table id="tblJumat" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Tanggal</th><th>Khotib</th><th>Imam</th><th>Muadzin</th><th>Tema</th><th style="width:100px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalJumat" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalJumatTitle">Tambah Jadwal Jumat</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="jumatId">
        <div class="row g-3">
          <div class="col-12"><label class="form-label fw-bold">Tanggal Jumat <span class="text-danger">*</span></label><input type="date" id="jumatTanggal" class="form-control" required></div>
          <div class="col-12"><label class="form-label fw-bold">Khotib <span class="text-danger">*</span></label><input type="text" id="jumatKhotib" class="form-control" required></div>
          <div class="col-md-6"><label class="form-label fw-bold">Imam</label><input type="text" id="jumatImam" class="form-control"></div>
          <div class="col-md-6"><label class="form-label fw-bold">Muadzin</label><input type="text" id="jumatMuadzin" class="form-control"></div>
          <div class="col-12"><label class="form-label fw-bold">Tema Khutbah</label><input type="text" id="jumatTema" class="form-control" placeholder="Tema khutbah (opsional)"></div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveJumat">Simpan</button></div>
    </div></div></div>
  `}function w(){b=new bootstrap.Modal(document.getElementById("modalJumat")),document.getElementById("btnAddJumat").addEventListener("click",function(){r()}),document.getElementById("btnSaveJumat").addEventListener("click",g),c()}function y(){n&&(n.destroy(),n=null)}function c(){m("Memuat..."),u("getJumatList",{token:s()}).then(function(a){i(),o=a||[];var e=o.map(function(t,d){return{no:d+1,tanggal:"<strong>"+h(t.tanggal)+"</strong>",khotib:t.khotib,imam:t.imam||"-",muadzin:t.muadzin||"-",tema:t.tema||"-",aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-primary btn-edit" data-id="'+t.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del" data-id="'+t.id+'"><i class="bi bi-trash"></i></button></div>'}});n?n.clear().rows.add(e).draw():n=$("#tblJumat").DataTable({data:e,columns:[{data:"no"},{data:"tanggal"},{data:"khotib"},{data:"imam"},{data:"muadzin"},{data:"tema"},{data:"aksi",orderable:!1}],order:[[1,"desc"]],language:{search:"Cari:"}}),$("#tblJumat").off("click",".btn-edit").on("click",".btn-edit",function(){var t=o.find((function(d){return d.id.toString()===$(this).data("id").toString()}).bind(this));t&&r(t)}),$("#tblJumat").off("click",".btn-del").on("click",".btn-del",function(){var t=$(this).data("id");v("Jadwal jumat akan dihapus.",function(){m("Menghapus..."),u("deleteJumat",{},{id:t,token:s()}).then(function(){i(),l("Dihapus!"),c()}).catch(function(d){i(),l("Gagal: "+d.message,"error")})})})}).catch(function(a){i(),l("Gagal: "+a.message,"error")})}function r(a){$("#jumatId").val(a?a.id:""),$("#jumatTanggal").val(a?(a.tanggal||"").split("T")[0]:""),$("#jumatKhotib").val(a?a.khotib:""),$("#jumatImam").val(a?a.imam:""),$("#jumatMuadzin").val(a?a.muadzin:""),$("#jumatTema").val(a?a.tema:""),$("#modalJumatTitle").text(a?"Edit Jadwal Jumat":"Tambah Jadwal Jumat"),b.show()}function g(){var a={id:$("#jumatId").val(),tanggal:$("#jumatTanggal").val(),khotib:$("#jumatKhotib").val().trim(),imam:$("#jumatImam").val().trim(),muadzin:$("#jumatMuadzin").val().trim(),tema:$("#jumatTema").val().trim(),token:s()};if(!a.tanggal||!a.khotib){l("Tanggal dan khotib wajib diisi!","warning");return}m("Menyimpan..."),u("saveJumat",{},a).then(function(){i(),b.hide(),l("Jadwal jumat disimpan!"),c()}).catch(function(e){i(),l("Gagal: "+e.message,"error")})}export{y as destroy,w as init,p as pageTitle,J as render};
