import{c as d,d as i,h as r,a as m,i as l,f,e as h,j as v}from"./index-DWj9LPsn.js";var y="Data Mustahiq / Penerima Bantuan",n,o=[],c,p=["Fakir","Miskin","Amil","Muallaf","Riqab","Gharimin","Fisabilillah","Ibnu Sabil"];function w(){var a=p.map(function(s){return'<option value="'+s+'">'+s+"</option>"}).join("");return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-people me-2"></i>Data Mustahiq / Penerima Bantuan</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddMst"><i class="bi bi-plus-circle me-1"></i>Tambah Mustahiq</button>
      </div>
      <div class="table-responsive">
        <table id="tblMst" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Nama</th><th>Kategori</th><th>No HP</th><th>Bantuan Terakhir</th><th>Status</th><th style="width:100px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalMst" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalMstTitle">Tambah Mustahiq</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="mstId">
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label fw-bold">Nama Lengkap <span class="text-danger">*</span></label><input type="text" id="mstNama" class="form-control" required></div>
          <div class="col-md-6"><label class="form-label fw-bold">Kategori Asnaf <span class="text-danger">*</span></label><select id="mstKategori" class="form-select">${a}</select></div>
          <div class="col-12"><label class="form-label fw-bold">Alamat</label><textarea id="mstAlamat" class="form-control" rows="2"></textarea></div>
          <div class="col-md-4"><label class="form-label fw-bold">No HP</label><input type="text" id="mstHp" class="form-control"></div>
          <div class="col-md-4"><label class="form-label fw-bold">Jumlah Bantuan</label><input type="number" id="mstBantuan" class="form-control" min="0"></div>
          <div class="col-md-4"><label class="form-label fw-bold">Tanggal Terakhir</label><input type="date" id="mstTglTerakhir" class="form-control"></div>
          <div class="col-md-8"><label class="form-label fw-bold">Keterangan</label><input type="text" id="mstKeterangan" class="form-control"></div>
          <div class="col-md-4"><label class="form-label fw-bold">Status</label><select id="mstStatus" class="form-select"><option value="aktif">Aktif</option><option value="nonaktif">Nonaktif</option></select></div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveMst">Simpan</button></div>
    </div></div></div>
  `}function T(){c=new bootstrap.Modal(document.getElementById("modalMst")),document.getElementById("btnAddMst").addEventListener("click",function(){u()}),document.getElementById("btnSaveMst").addEventListener("click",k),b()}function x(){n&&(n.destroy(),n=null)}function g(a){return a==="aktif"?'<span class="badge bg-success">Aktif</span>':'<span class="badge bg-secondary">Nonaktif</span>'}function b(){r("Memuat..."),m("getMustahiqList",{token:d()}).then(function(a){l(),o=a||[];var s=o.map(function(t,e){return{no:e+1,nama:"<strong>"+t.nama+'</strong><br><small class="text-muted">'+(t.alamat||"-")+"</small>",kategori:'<span class="badge bg-info text-dark">'+t.kategori_asnaf+"</span>",hp:t.no_hp||"-",bantuan:t.jumlah_bantuan?f(t.jumlah_bantuan)+"<br><small>"+h(t.tanggal_terakhir)+"</small>":"-",status:g(t.status),aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-primary btn-edit" data-id="'+t.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del" data-id="'+t.id+'"><i class="bi bi-trash"></i></button></div>'}});n?n.clear().rows.add(s).draw():n=$("#tblMst").DataTable({data:s,columns:[{data:"no"},{data:"nama"},{data:"kategori"},{data:"hp"},{data:"bantuan"},{data:"status"},{data:"aksi",orderable:!1}],order:[[0,"asc"]],language:{search:"Cari:"}}),$("#tblMst").off("click",".btn-edit").on("click",".btn-edit",function(){var t=o.find((function(e){return e.id.toString()===$(this).data("id").toString()}).bind(this));t&&u(t)}),$("#tblMst").off("click",".btn-del").on("click",".btn-del",function(){var t=$(this).data("id");v("Data mustahiq akan dihapus.",function(){r("Menghapus..."),m("deleteMustahiq",{},{id:t,token:d()}).then(function(){l(),i("Dihapus!"),b()}).catch(function(e){l(),i("Gagal: "+e.message,"error")})})})}).catch(function(a){l(),i("Gagal: "+a.message,"error")})}function u(a){$("#mstId").val(a?a.id:""),$("#mstNama").val(a?a.nama:""),$("#mstKategori").val(a?a.kategori_asnaf:"Fakir"),$("#mstAlamat").val(a?a.alamat:""),$("#mstHp").val(a?a.no_hp:""),$("#mstBantuan").val(a?a.jumlah_bantuan:""),$("#mstTglTerakhir").val(a?(a.tanggal_terakhir||"").split("T")[0]:""),$("#mstKeterangan").val(a?a.keterangan:""),$("#mstStatus").val(a?a.status:"aktif"),$("#modalMstTitle").text(a?"Edit Mustahiq":"Tambah Mustahiq"),c.show()}function k(){var a={id:$("#mstId").val(),nama:$("#mstNama").val().trim(),kategori_asnaf:$("#mstKategori").val(),alamat:$("#mstAlamat").val().trim(),no_hp:$("#mstHp").val().trim(),jumlah_bantuan:parseInt($("#mstBantuan").val())||0,tanggal_terakhir:$("#mstTglTerakhir").val(),keterangan:$("#mstKeterangan").val().trim(),status:$("#mstStatus").val(),token:d()};if(!a.nama){i("Nama wajib diisi!","warning");return}r("Menyimpan..."),m("saveMustahiq",{},a).then(function(){l(),c.hide(),i("Mustahiq disimpan!"),b()}).catch(function(s){l(),i("Gagal: "+s.message,"error")})}export{x as destroy,T as init,y as pageTitle,w as render};
