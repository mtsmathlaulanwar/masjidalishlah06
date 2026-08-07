import{h as m,a as c,c as r,i as o,j as k,d as l}from"./index-DWj9LPsn.js";var E="Menu Navigasi",s,d=[],p;function B(){return`
    <div class="admin-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0"><i class="bi bi-list-nested me-2"></i>Menu Navigasi Publik</h6>
        <button class="btn btn-sm btn-admin-primary" id="btnAddMenu">
          <i class="bi bi-plus-circle me-1"></i>Tambah Menu
        </button>
      </div>
      <p class="small text-muted mb-3">Atur menu navigasi yang tampil di halaman depan website (navbar & footer).</p>
      <div class="table-responsive">
        <table id="tblMenu" class="table admin-table" style="width:100%">
          <thead>
            <tr><th>Urutan</th><th>Nama</th><th>Link</th><th>Icon</th><th>Tipe</th><th>Tampil</th><th style="width:100px">Aksi</th></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="modalMenu" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalMenuTitle">Tambah Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <input type="hidden" id="menuId">
            <div class="mb-3">
              <label class="form-label fw-bold">Nama Menu</label>
              <input type="text" id="menuNama" class="form-control" placeholder="contoh: Beranda" required>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Link / URL</label>
              <input type="text" id="menuLink" class="form-control" placeholder="contoh: /berita atau https://...">
              <small class="text-muted">Untuk dropdown parent, isi dengan <code>#</code></small>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Icon (Bootstrap Icons)</label>
              <input type="text" id="menuIcon" class="form-control" placeholder="contoh: bi-house">
              <small class="text-muted">Lihat daftar icon di <a href="https://icons.getbootstrap.com/" target="_blank">icons.getbootstrap.com</a></small>
            </div>
            <div class="row g-3">
              <div class="col-6">
                <label class="form-label fw-bold">Urutan</label>
                <input type="number" id="menuUrutan" class="form-control" value="1" min="1">
              </div>
              <div class="col-6">
                <label class="form-label fw-bold">Tipe</label>
                <select id="menuTipe" class="form-select">
                  <option value="item">Item (link biasa)</option>
                  <option value="dropdown">Dropdown (parent)</option>
                  <option value="child">Child (anak dropdown)</option>
                </select>
              </div>
            </div>
            <div class="mb-3 mt-3" id="parentGroup" style="display:none">
              <label class="form-label fw-bold">Parent Menu</label>
              <select id="menuParent" class="form-select">
                <option value="">-- Pilih Parent --</option>
              </select>
            </div>
            <div class="mb-3 mt-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="menuTampil" checked>
                <label class="form-check-label fw-bold" for="menuTampil">Tampilkan di Website</label>
              </div>
            </div>
            <div class="mb-0 mt-3 p-3 bg-light rounded" id="menuPreview">
              <small class="text-muted d-block mb-1">Preview:</small>
              <span id="menuPreviewIcon"></span>
              <strong id="menuPreviewNama">Menu</strong>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-admin-primary" id="btnSaveMenu">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  `}function T(){p=new bootstrap.Modal(document.getElementById("modalMenu")),b(),document.getElementById("btnAddMenu").addEventListener("click",function(){f()}),document.getElementById("btnSaveMenu").addEventListener("click",w),document.getElementById("menuTipe").addEventListener("change",function(){var e=this.value==="child";document.getElementById("parentGroup").style.display=e?"":"none"}),["menuNama","menuIcon"].forEach(function(e){document.getElementById(e).addEventListener("input",g)})}function x(){s&&(s.destroy(),s=null)}function b(){m("Memuat menu..."),c("getMenuList",{token:r()}).then(function(e){o(),d=e||[];var a=d.map(function(n){var t=n.tipe==="dropdown"?'<span class="badge bg-primary">Dropdown</span>':n.tipe==="child"?'<span class="badge bg-info text-dark">Child</span>':'<span class="badge bg-secondary">Item</span>',i=String(n.tampil)==="true"||n.tampil===!0?'<span class="badge bg-success">Ya</span>':'<span class="badge bg-danger">Tidak</span>',u=n.icon?'<i class="'+n.icon+'"></i> '+n.icon:"-",y=n.tipe==="child"?'<span class="text-muted ms-3">↳</span> ':"",v="";if(n.tipe==="child"&&n.parent_id){var h=d.find(function(I){return I.id===n.parent_id});v=h?' <small class="text-muted">('+h.nama+")</small>":""}return{urutan:n.urutan,nama:y+"<strong>"+n.nama+"</strong>"+v,link:"<code>"+(n.link||"-")+"</code>",icon:u,tipe:t,tampil:i,aksi:'<div class="btn-group btn-group-sm"><button class="btn btn-outline-primary btn-edit-menu" data-id="'+n.id+'"><i class="bi bi-pencil"></i></button><button class="btn btn-outline-danger btn-del-menu" data-id="'+n.id+'"><i class="bi bi-trash"></i></button></div>',_sort:(n.tipe==="child"?100:0)+Number(n.urutan)}});a.sort(function(n,t){return n._sort-t._sort}),s?s.clear().rows.add(a).draw():s=$("#tblMenu").DataTable({data:a,columns:[{data:"urutan",width:"60px"},{data:"nama"},{data:"link"},{data:"icon"},{data:"tipe"},{data:"tampil"},{data:"aksi",orderable:!1}],ordering:!1,paging:!1,info:!1,language:{search:"Cari:"}}),$("#tblMenu").off("click",".btn-edit-menu").on("click",".btn-edit-menu",function(){var n=$(this).data("id"),t=d.find(function(i){return i.id===n});t&&f(t)}),$("#tblMenu").off("click",".btn-del-menu").on("click",".btn-del-menu",function(){var n=$(this).data("id"),t=d.find(function(u){return u.id===n}),i='Menu "'+(t?t.nama:"")+'" akan dihapus.';t&&t.tipe==="dropdown"&&(i+=" Semua child di bawahnya juga akan ikut terhapus."),k(i,function(){m("Menghapus..."),c("deleteMenu",{},{id:n,token:r()}).then(function(){o(),l("Menu dihapus!"),b()}).catch(function(u){o(),l("Gagal: "+u.message,"error")})})})}).catch(function(e){o(),l("Gagal: "+e.message,"error")})}function f(e){document.getElementById("menuId").value=e?e.id:"",document.getElementById("menuNama").value=e?e.nama:"",document.getElementById("menuLink").value=e?e.link:"",document.getElementById("menuIcon").value=e?e.icon:"",document.getElementById("menuUrutan").value=e?e.urutan:1,document.getElementById("menuTipe").value=e?e.tipe:"item",document.getElementById("menuTampil").checked=e?String(e.tampil)==="true"||e.tampil===!0:!0;var a=document.getElementById("menuParent");a.innerHTML='<option value="">-- Pilih Parent --</option>',d.filter(function(t){return t.tipe==="dropdown"}).forEach(function(t){var i=document.createElement("option");i.value=t.id,i.textContent=t.nama,e&&e.parent_id===t.id&&(i.selected=!0),a.appendChild(i)});var n=(e?e.tipe:"item")==="child";document.getElementById("parentGroup").style.display=n?"":"none",document.getElementById("modalMenuTitle").textContent=e?"Edit Menu":"Tambah Menu",g(),p.show()}function g(){var e=document.getElementById("menuNama").value||"Menu",a=document.getElementById("menuIcon").value;document.getElementById("menuPreviewNama").textContent=e,document.getElementById("menuPreviewIcon").innerHTML=a?'<i class="'+a+' me-2"></i>':""}function w(){var e={id:document.getElementById("menuId").value,nama:document.getElementById("menuNama").value.trim(),link:document.getElementById("menuLink").value.trim(),icon:document.getElementById("menuIcon").value.trim(),urutan:parseInt(document.getElementById("menuUrutan").value)||1,tipe:document.getElementById("menuTipe").value,parent_id:document.getElementById("menuTipe").value==="child"?document.getElementById("menuParent").value:"",tampil:document.getElementById("menuTampil").checked,token:r()};if(!e.nama){l("Nama menu wajib diisi!","warning");return}if(e.tipe==="child"&&!e.parent_id){l("Pilih parent menu!","warning");return}m("Menyimpan..."),c("saveMenu",{},e).then(function(){o(),p.hide(),l(e.id?"Menu diupdate!":"Menu ditambahkan!"),b()}).catch(function(a){o(),l("Gagal: "+a.message,"error")})}export{x as destroy,T as init,E as pageTitle,B as render};
