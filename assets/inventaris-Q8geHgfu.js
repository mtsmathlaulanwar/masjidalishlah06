import{c as d,d as l,h as r,a as c,i as t,f as u,j as g}from"./index-DWj9LPsn.js";var k="Inventaris & Aset Masjid",e,o=[],v;function I(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-box-seam me-2"></i>Inventaris & Aset Masjid</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddInv"><i class="bi bi-plus-circle me-1"></i>Tambah Barang</button>
      </div>
      <div class="table-responsive">
        <table id="tblInv" class="table admin-table" style="width:100%">
          <thead><tr><th>No</th><th>Nama Barang</th><th>Jumlah</th><th>Kondisi</th><th>Lokasi</th><th>Harga</th><th style="width:100px">Aksi</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalInv" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content">
      <div class="modal-header"><h5 class="modal-title" id="modalInvTitle">Tambah Inventaris</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="hidden" id="invId">
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label fw-bold">Nama Barang <span class="text-danger">*</span></label><input type="text" id="invNama" class="form-control" required></div>
          <div class="col-md-3"><label class="form-label fw-bold">Jumlah <span class="text-danger">*</span></label><input type="number" id="invJumlah" class="form-control" min="0" value="1" required></div>
          <div class="col-md-3"><label class="form-label fw-bold">Kondisi</label><select id="invKondisi" class="form-select"><option value="Baik">Baik</option><option value="Rusak Ringan">Rusak Ringan</option><option value="Rusak Berat">Rusak Berat</option><option value="Perlu Service">Perlu Service</option></select></div>
          <div class="col-md-6"><label class="form-label fw-bold">Lokasi</label><input type="text" id="invLokasi" class="form-control" placeholder="Lantai 1 / Gudang"></div>
          <div class="col-md-3"><label class="form-label fw-bold">Tgl Pembelian</label><input type="date" id="invTglBeli" class="form-control"></div>
          <div class="col-md-3"><label class="form-label fw-bold">Harga Satuan</label><input type="number" id="invHarga" class="form-control" min="0"></div>
          <div class="col-12"><label class="form-label fw-bold">Keterangan</label><textarea id="invKeterangan" class="form-control" rows="2"></textarea></div>
        </div>
      </div>
      <div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button class="btn btn-admin-primary" id="btnSaveInv">Simpan</button></div>
    </div></div></div>
  `}function y(){v=new bootstrap.Modal(document.getElementById("modalInv")),document.getElementById("btnAddInv").addEventListener("click",function(){m()}),document.getElementById("btnSaveInv").addEventListener("click",f),b()}function w(){e&&(e.destroy(),e=null)}function h(a){var i={Baik:"bg-success","Rusak Ringan":"bg-warning text-dark","Rusak Berat":"bg-danger","Perlu Service":"bg-info"};return'<span class="badge '+(i[a]||"bg-secondary")+'">'+a+"</span>"}function b(){r("Memuat..."),c("getInventarisList",{token:d()}).then(function(a){t(),o=a||[];var i=o.map(function(n,s){return{no:s+1,nama:"<strong>"+n.nama_barang+"</strong>",jumlah:n.jumlah,kondisi:h(n.kondisi||"Baik"),lokasi:n.lokasi||"-",harga:n.harga?u(n.harga):"-",aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-primary btn-edit" data-id="'+n.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del" data-id="'+n.id+'"><i class="bi bi-trash"></i></button></div>'}});e?e.clear().rows.add(i).draw():e=$("#tblInv").DataTable({data:i,columns:[{data:"no"},{data:"nama"},{data:"jumlah"},{data:"kondisi"},{data:"lokasi"},{data:"harga"},{data:"aksi",orderable:!1}],order:[[1,"asc"]],language:{search:"Cari:"}}),$("#tblInv").off("click",".btn-edit").on("click",".btn-edit",function(){var n=o.find((function(s){return s.id.toString()===$(this).data("id").toString()}).bind(this));n&&m(n)}),$("#tblInv").off("click",".btn-del").on("click",".btn-del",function(){var n=$(this).data("id");g("Barang akan dihapus dari inventaris.",function(){r("Menghapus..."),c("deleteInventaris",{},{id:n,token:d()}).then(function(){t(),l("Dihapus!"),b()}).catch(function(s){t(),l("Gagal: "+s.message,"error")})})})}).catch(function(a){t(),l("Gagal: "+a.message,"error")})}function m(a){$("#invId").val(a?a.id:""),$("#invNama").val(a?a.nama_barang:""),$("#invJumlah").val(a?a.jumlah:1),$("#invKondisi").val(a?a.kondisi:"Baik"),$("#invLokasi").val(a?a.lokasi:""),$("#invTglBeli").val(a?(a.tanggal_pembelian||"").split("T")[0]:""),$("#invHarga").val(a?a.harga:""),$("#invKeterangan").val(a?a.keterangan:""),$("#modalInvTitle").text(a?"Edit Inventaris":"Tambah Inventaris"),v.show()}function f(){var a={id:$("#invId").val(),nama_barang:$("#invNama").val().trim(),jumlah:parseInt($("#invJumlah").val())||1,kondisi:$("#invKondisi").val(),lokasi:$("#invLokasi").val().trim(),tanggal_pembelian:$("#invTglBeli").val(),harga:parseInt($("#invHarga").val())||0,keterangan:$("#invKeterangan").val().trim(),token:d()};if(!a.nama_barang){l("Nama barang wajib diisi!","warning");return}r("Menyimpan..."),c("saveInventaris",{},a).then(function(){t(),v.hide(),l("Inventaris disimpan!"),b()}).catch(function(i){t(),l("Gagal: "+i.message,"error")})}export{w as destroy,y as init,k as pageTitle,I as render};
