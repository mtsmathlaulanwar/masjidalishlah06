import{k as g,c as b,p as y,d as n,h as j,a as o,i as r,f as u,j as q,e as B}from"./index-DWj9LPsn.js";var s,d,h,v,i="",m="";function x(){return`
    <div class="admin-card" id="mustahiqSection" style="display:none">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-people-fill me-2"></i>Daftar Mustahiq <small class="text-muted fw-normal">(Penerima Bantuan)</small></h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddMustahiq"><i class="bi bi-plus-circle me-1"></i>Tambah</button>
      </div>
      <div class="table-responsive">
        <table id="tblMustahiq" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Nama</th><th>Nominal (Rp)</th><th>Alamat</th><th>Keterangan</th><th style="width:80px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="admin-card" id="belanjaSection" style="display:none">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-cart3 me-2"></i>Pengeluaran / Pembelian</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddBelanja"><i class="bi bi-plus-circle me-1"></i>Tambah</button>
      </div>
      <div class="table-responsive">
        <table id="tblBelanja" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Nama Barang</th><th>Qty</th><th>Jumlah (Rp)</th><th>Keterangan</th><th>Tanggal</th><th style="width:80px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="text-end mt-2"><strong>Total: <span id="totalBelanja">Rp 0</span></strong></div>
    </div>

    <div class="modal fade" id="modalMustahiq" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Tambah Mustahiq</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="mustahiqId">
        <div class="mb-3"><label class="form-label fw-bold">Nama</label><input type="text" id="mustahiqNama" class="form-control" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Nominal Bantuan (Rp)</label><input type="text" inputmode="numeric" id="mustahiqNominal" class="form-control format-rupiah" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Alamat</label><input type="text" id="mustahiqAlamat" class="form-control"></div>
        <div class="mb-3"><label class="form-label fw-bold">Keterangan</label><input type="text" id="mustahiqKet" class="form-control" placeholder="Opsional"></div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveMustahiq">Simpan</button></div>
    </div></div></div>

    <div class="modal fade" id="modalBelanja" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Tambah Pembelian</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="belanjaId">
        <div class="mb-3"><label class="form-label fw-bold">Nama Barang</label><input type="text" id="belanjaNama" class="form-control" required></div>
        <div class="row g-3">
          <div class="col-6"><div class="mb-3"><label class="form-label fw-bold">Jumlah (Rp)</label><input type="text" inputmode="numeric" id="belanjaJumlah" class="form-control format-rupiah" required></div></div>
          <div class="col-6"><div class="mb-3"><label class="form-label fw-bold">Qty</label><input type="number" id="belanjaQty" class="form-control" value="1" min="1"></div></div>
        </div>
        <div class="mb-3"><label class="form-label fw-bold">Keterangan</label><input type="text" id="belanjaKet" class="form-control" placeholder="Opsional"></div>
        <div class="mb-3"><label class="form-label fw-bold">Tanggal</label><input type="date" id="belanjaTanggal" class="form-control"></div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveBelanja">Simpan</button></div>
    </div></div></div>
  `}function E(){h=new bootstrap.Modal(document.getElementById("modalMustahiq")),v=new bootstrap.Modal(document.getElementById("modalBelanja")),document.getElementById("btnAddMustahiq").addEventListener("click",function(){$("#mustahiqId").val(""),$("#mustahiqNama").val(""),$("#mustahiqNominal").val(""),$("#mustahiqAlamat").val(""),$("#mustahiqKet").val(""),h.show()}),document.getElementById("btnSaveMustahiq").addEventListener("click",k),document.getElementById("btnAddBelanja").addEventListener("click",function(){$("#belanjaId").val(""),$("#belanjaNama").val(""),$("#belanjaJumlah").val(""),$("#belanjaQty").val(1),$("#belanjaKet").val(""),$("#belanjaTanggal").val(new Date().toISOString().split("T")[0]),v.show()}),document.getElementById("btnSaveBelanja").addEventListener("click",I)}function N(){s&&(s.destroy(),s=null),d&&(d.destroy(),d=null)}function T(e,t){i=e,m=t,document.getElementById("mustahiqSection").style.display="block",document.getElementById("belanjaSection").style.display="block",p(),f()}function S(){document.getElementById("mustahiqSection").style.display="none",document.getElementById("belanjaSection").style.display="none"}function p(){o("getProgramMustahiq",{type:i,programId:m}).then(function(e){var t=(e||[]).map(function(l,a){return{no:a+1,nama:l.nama,nominal:u(l.nominal),alamat:l.alamat||"-",ket:l.keterangan||"-",aksi:'<button class="btn btn-sm btn-outline-danger btn-del-mustahiq" data-id="'+l.id+'"><i class="bi bi-trash"></i></button>'}});s?s.clear().rows.add(t).draw():s=$("#tblMustahiq").DataTable({data:t,columns:[{data:"no"},{data:"nama"},{data:"nominal"},{data:"alamat"},{data:"ket"},{data:"aksi",orderable:!1}],paging:!1,info:!1,language:{search:"Cari:"}}),$("#tblMustahiq").off("click",".btn-del-mustahiq").on("click",".btn-del-mustahiq",function(){var l=$(this).data("id");q("Mustahiq akan dihapus.",function(){o("deleteProgramMustahiq",{},{id:l,type:i,token:b()}).then(function(){n("Dihapus!"),p()}).catch(function(a){n("Gagal: "+a.message,"error")})})})}).catch(function(){})}function f(){o("getProgramBelanja",{type:i,programId:m}).then(function(e){var t=0,l=(e||[]).map(function(a,c){var w=(parseFloat(a.jumlah)||0)*(parseInt(a.qty)||1);return t+=w,{no:c+1,nama:a.nama_barang,qty:a.qty||1,jumlah:u(a.jumlah),ket:a.keterangan||"-",tgl:B(a.tanggal),aksi:'<button class="btn btn-sm btn-outline-danger btn-del-belanja" data-id="'+a.id+'"><i class="bi bi-trash"></i></button>'}});$("#totalBelanja").text(u(t)),d?d.clear().rows.add(l).draw():d=$("#tblBelanja").DataTable({data:l,columns:[{data:"no"},{data:"nama"},{data:"qty"},{data:"jumlah"},{data:"ket"},{data:"tgl"},{data:"aksi",orderable:!1}],paging:!1,info:!1,language:{search:"Cari:"}}),$("#tblBelanja").off("click",".btn-del-belanja").on("click",".btn-del-belanja",function(){var a=$(this).data("id");q("Data belanja akan dihapus.",function(){o("deleteProgramBelanja",{},{id:a,type:i,token:b()}).then(function(){n("Dihapus!"),f()}).catch(function(c){n("Gagal: "+c.message,"error")})})})}).catch(function(){})}function k(){var e=g(),t={program_id:m,type:i,nama:$("#mustahiqNama").val().trim(),nominal:y($("#mustahiqNominal").val()),alamat:$("#mustahiqAlamat").val().trim(),keterangan:$("#mustahiqKet").val().trim(),admin_input:e?e.username:"admin",token:b()},l=$("#mustahiqId").val();if(l&&(t.id=l),!t.nama){n("Nama wajib diisi!","warning");return}j("Menyimpan..."),o("saveProgramMustahiq",{},t).then(function(){r(),h.hide(),n("Mustahiq disimpan!"),p()}).catch(function(a){r(),n("Gagal: "+a.message,"error")})}function I(){var e=g(),t={program_id:m,type:i,nama_barang:$("#belanjaNama").val().trim(),jumlah:y($("#belanjaJumlah").val()),qty:parseInt($("#belanjaQty").val())||1,keterangan:$("#belanjaKet").val().trim(),tanggal:$("#belanjaTanggal").val(),admin_input:e?e.username:"admin",token:b()},l=$("#belanjaId").val();if(l&&(t.id=l),!t.nama_barang||!t.jumlah){n("Nama barang & jumlah wajib!","warning");return}j("Menyimpan..."),o("saveProgramBelanja",{},t).then(function(){r(),v.hide(),n("Belanja disimpan!"),f()}).catch(function(a){r(),n("Gagal: "+a.message,"error")})}export{N as d,S as h,E as i,x as r,T as s};
